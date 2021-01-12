import { Component, OnInit } from '@angular/core';
import { imc } from '../imc/imc'
import { mcm } from '../mcm/mcm'
import { act } from '../ACT/act'
import { asc } from '../asc/asc'
import { AuthenticationService } from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

const GetImc = gql`
  mutation GetImc(
    $token: String!

  ) {
    getImc(token: $token) {
      imcHistory{
        date, imc
      }
    }
  }
`;

const CreateNewImc = gql`
  mutation CreateNewImc(
    $imc: String!
    $token: String!

  ) {
    createNewImc(imc: $imc, token: $token) {
      ok
    }
  }
`;

function getAverages(data) {
  var sums = data.reduce(function(acc, obj) {
    var date = obj.date;
    if (!acc[date]) {
      acc[date] = {sum:0, count:0};
    }
    acc[date].sum += +obj.imc;
    acc[date].count++;
    return acc;
  }, Object.create(null));
  return Object.keys(sums).map(function(date) {
    return {[date]:sums[date].sum/sums[date].count};
  });
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  _COURSES = [
    'Title1',
    'Title2',
    'Title3',
    'Title4'];
    _BAR_CHART_COLORS = [
      {
        borderColor: [
          'rgba(255,0,0,0.5)',
          'rgba(54, 75, 181, 0.5)',
          'rgba(114, 155, 59, 0.5)',
          'rgba(102, 59, 155, 0.5)'
        ],
        backgroundColor: [
          'rgba(255,0,0,0.3)',
          'rgba(54, 75, 181, 0.3)',
          'rgba(114, 155, 59, 0.3)',
          'rgba(102, 59, 155, 0.3)'
        ]
      }];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'IMC Average', barThickness: 60, barPercentage: 0.1 }];
   public barChartLabels: Label[] = this._COURSES  // Array of strings
   public barChartOptions: ChartOptions = {
     responsive: true,
     scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
   };
   public barChartColors: Color[] = this._BAR_CHART_COLORS // 
   public barChartLegend = true;
   public barChartType: ChartType = 'bar';
   public barChartPlugins = [];
 



  
  public data: any = null;
  
  public token: string = localStorage.getItem('currentUser');
  

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private apollo: Apollo
    ) { }




   

  imc_history: Array<String>;
  chart_arr;
  weight;
  height;
  age;
  gender;
  result_imc;
  status_imc;
  result_mcm;
  result_act;
  result_asc;
  result_pi;
  isShown: boolean = false ;
  isShownCalcular: boolean = false ;
  isShownHistory: boolean = false ;
  isShownGraph: boolean = false ;


  


  ngOnInit(): void {
    this.apollo
    .mutate({
      mutation: GetImc,
      variables: {
        token: this.token,
      }})
      .subscribe(
        ({ data }) => {
          this.data = data;
          this.imc_history = this.data.getImc.imcHistory;
          this.chart_arr = getAverages(this.imc_history)
         
        },
        error => {
          console.log("there was an error sending the query", error);
        }
      );

  }
  calculate() {
    this.isShown = ! this.isShown;
    this.result_imc = imc(this.height, this.weight);
    this.apollo
        .mutate({
          mutation: CreateNewImc,
          variables: {
            imc: this.result_imc,
            token: this.token,
          }})
          .subscribe(
            ({ data }) => {
              console.log("OK")
            },
            error => {
              console.log("there was an error sending the query", error);
            }
          );
    this.result_mcm = mcm(this.gender, this.weight, this.height);
    this.result_act = act(this.gender,this.weight,this.height, this.age);
    this.result_asc = asc(this.weight, this.height)
    this.result_pi = Number((21.7 * Math.pow((this.height / 100), 2)).toFixed(2))

    if (this.result_imc < 16.0) {
      this.status_imc = "Delgadez severa";
  } else if (this.result_imc >= 16.0 && this.result_imc < 17.0) {
      this.status_imc = "Delgadez moderada";
  } else if (this.result_imc >= 17.0 && this.result_imc < 18.5) {
      this.status_imc = "Delgadez leve";
  } else if (this.result_imc >= 18.5 && this.result_imc < 24.9) {
      this.status_imc = "Peso normal";
  } else if (this.result_imc >= 24.9 && this.result_imc < 29.9) {
      this.status_imc = "Pre-obeso";
  } else if (this.result_imc >= 29.9 && this.result_imc < 34.9) {
      this.status_imc = "Obesidad tipo I";
  } else if (this.result_imc >= 34.9 && this.result_imc < 39.9){
    this.status_imc = "Obesidad tipo II";
  } else if (this.result_imc >= 40) {
    this.status_imc = "Obesidad tipo III";
  }

  }

  logout(){

    this.authenticationService.logout();
    console.log("logged out");
    this.router.navigateByUrl('/dashboard');
  }

  activeCalculate(){
    this.isShownCalcular = true;
    this.isShownHistory = false;
    this.isShownGraph = false;
  }
  activeHistory(){
    this.isShownCalcular = false;
    this.isShownHistory = true;
    this.isShownGraph = false;

    console.log(this.token);
    this.apollo
        .mutate({
          mutation: GetImc,
          variables: {
            token: this.token,
          }})
          .subscribe(
            ({ data }) => {
              this.data = data;
              this.imc_history = this.data.getImc.imcHistory;
              this.chart_arr = getAverages(this.imc_history)
             
            },
            error => {
              console.log("there was an error sending the query", error);
            }
          );
    
    
  }
  activeGraph(){
    this.isShownCalcular = false;
    this.isShownHistory = false;
    this.isShownGraph = true;
    let result = this.chart_arr.map((o) => {
      return Object.values(o)
  }).reduce((prev, curr) => {
      return prev.concat(curr)
  }).filter((col, i, array) => {
      return array.indexOf(col) === i
  });
    this.barChartData[0].data =  result.map(v=> parseInt((result).toString())) 
    this.barChartLabels =  this.chart_arr.map((o) => {
      return Object.keys(o)
  }).reduce((prev, curr) => {
      return prev.concat(curr)
  }).filter((col, i, array) => {
      return array.indexOf(col) === i
  });
  }


}