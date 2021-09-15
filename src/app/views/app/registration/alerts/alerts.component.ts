import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { esLocale } from 'ngx-bootstrap/locale';
import { ActivatedRoute, Router } from '@angular/router';
import { defineLocale } from 'ngx-bootstrap/chronos';
import {FacilityService} from 'src/app/shared/AppServices/Locations/Facility.service'
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  bsInlineValue = new Date();

  constructor(private formBuilder: FormBuilder, private facilityservice:FacilityService, private route: Router,private ngxService: NgxUiLoaderService) {
     //for datepicker start 
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    defineLocale('es', esLocale);
    //for datepicker start
 
   }
   
   Alertsform: FormGroup;

  ngOnInit(): void {
    this.Alertsform = this.formBuilder.group({
      Id: [0],
      Type: [null, [Validators.required]],
      Date: ['', [Validators.required]],
      Message: ['', [Validators.required]],
        // ClaimLicenseNumber: ['', [Validators.required]],
        // Code: ['', [Validators.required]],
        // LabReferenceNoPrefix: ['', [Validators.required]],
        // Phone1: ['', [Validators.required]],
        // GeoMapUrl: ['', [Validators.required]],
        // Description: ['', [Validators.required]]
    })
  }
 
  types = [
    { label: 'Medical', value: 'Medical' },
    { label: 'Billing', value: 'Billing' },
    { label: 'Miscellaneous', value: 'Miscellaneous' },
    { label: 'Eligibility', value: 'Eligibility' },

  ];


  ManageAlerts(){
    debugger;
    if (this.Alertsform.value.Id == 0) {
      this.ManageAlert();
    } else {
      //this.EditFacilityDetail();
    }
  }

  ManageAlert(){
    debugger;
    if(!this.Alertsform.valid) {
      this.Alertsform.markAllAsTouched();

    }else{
    //console.log(this.Alertsform)
    this.facilityservice.create(this.Alertsform.value).subscribe(
    res => {
      this.Alertsform.reset();
      //this.route.navigate(['/app/Control Panel/Provider/Locations/Facility']);
    },
    err => {
      console.log('Error', err);
    });
  }
}
}
