import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-privileges',
  templateUrl: './role-privileges.component.html'
})
export class RolePrivilegesComponent implements OnInit {

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
