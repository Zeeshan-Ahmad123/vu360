import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit {

  constructor() { }
  step= 1;
  
  ngOnInit() {
    this.step == 1;
    localStorage.setItem('step', JSON.stringify(this.step));
  }
  
  clickTab(stepValue){
    this.step = stepValue;
    localStorage.setItem('step', JSON.stringify(this.step));
  }

}
