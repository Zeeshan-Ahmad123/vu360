import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-state-city',
  templateUrl: './country-state-city.component.html'
})
export class CountryStateCityComponent implements OnInit {

  constructor() { }

  step= 1;

  ngOnInit() {
    //this.step = localStorage.getItem('step');
    this.step==1;
    localStorage.setItem('step', JSON.stringify(this.step));
  }

  clickTab(stepValue){
    this.step = stepValue;
    localStorage.setItem('step', JSON.stringify(this.step));
  }

}
