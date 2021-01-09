import { Component, OnInit } from '@angular/core';
import { imc } from '../imc/imc'
import { mcm } from '../mcm/mcm'
import { act } from '../ACT/act'
import { asc } from '../asc/asc'
import { AuthenticationService } from '../_services'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }
  
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
  ngOnInit(): void {
  }
  calculate() {
    this.isShown = ! this.isShown;
    this.result_imc = imc(this.height, this.weight);
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

}