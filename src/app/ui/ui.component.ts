import { Component, OnInit } from '@angular/core';

import { imc } from '../imc/imc'
import { mcm } from '../mcm/mcm'
import { act } from '../ACT/act'


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }
  weight;
  height;
  age;
  gender;
  result;
  isShown: boolean = false ;
  ngOnInit(): void {
  }
  calculate() {
    this.isShown = ! this.isShown;
    let result_imc = 0.0;
    let result_mcm = 0.0;
    let result_act = 0.0;
    result_imc = imc(this.height, this.weight);
    result_mcm = mcm(this.gender, this.weight, this.height);
    result_act = act(this.gender,this.weight,this.height, this.age);
    
    console.log(result_imc);
    console.log(result_mcm);
    console.log(result_act);
    this.result = result_act;
    

    
    
    


  }
}
