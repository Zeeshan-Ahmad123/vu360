import { TemporaryPatientDemographicService } from './../../../../shared/AppServices/Registration/TemporaryPatientDemographic.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { SubscriberService } from 'src/app/shared/AppServices/Registration/Subscriber.service';
import {DemographicsService} from 'src/app/shared/AppServices/Registration/demographics.service'
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
@Component({
  selector: 'app-temporary-patient-demographics',
  templateUrl: './temporary-patient-demographics.component.html',
  styleUrls: ['./temporary-patient-demographics.component.scss']
})
export class TemporaryPatientDemographicsComponent implements OnInit {

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  bsInlineValue = new Date();
  constructor(private formBuilder: FormBuilder
    ,private subscriberService:SubscriberService,
    private TempPDService:TemporaryPatientDemographicService,private ngxService: NgxUiLoaderService
    
    ) {
    //datepicker start
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    defineLocale('es', esLocale);
    //datepicker end
   }

   tempPatientDemographicForm: FormGroup;
   titles = [];
   genders = [];
   countries = [];
   states = [];
   cities = [];
   nationalities=[];
   relationships=[];

  ngOnInit(): void {
    this.GetAllCountries();
    this.GetAllGenders();
    this.GetAlltitles();
    this.GetRelaionShips();
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 3000);

    this.tempPatientDemographicForm = this.formBuilder.group({
      TempId:[0],
      PersonTitleId:[],
      PersonFirstName:['',[Validators.required]],
      PersonMiddleName:[''],
      PersonLastName:['',[Validators.required]],
      PersonEmail:[''],
      PersonSex:[null,[Validators.required]],
      PatientBirthDate:['',[Validators.required]],
      PersonAge:[],
      PersonHomePhone1:[''],
      PersonWorkPhone1:[''],
      PersonCellPhone:['',[Validators.required]],
      PersonAddress1:[''],
      PersonAddress2:[''],
      PersonZipCode:[''],
      PersonCountryId:[],
      PersonStateId:[],
      PersonCityId:[],
      Nationality:[],

      NokrelationshipId:[],
      NokfirstName:[''],
      NokmiddleName:[''],
      NoklastName:[''],
      Nokaddress1:[''],
      Nokaddress2:[''],
      NokzipCode:[''],
      NokcountryId:[],
      NokstateId:[],
      NokcityId:[],
      NokhomePhone:[''],
      NokcellNo:[''],
      CreatedBy:[''],
      UpdatedBy:[''],
      CreatedDate:[''],
      UpdatedDate:[''],
      Comments:['']
     //Comments tabs fields missing ???
     //last label created_by & created_dated & updated_By & updated_date fields name not write ???
    })
  }
  ManageTemporaryPatientDemographic(){
    
    if (this.tempPatientDemographicForm.value.TempId == 0) {
      this.AddTemporaryPatientDemographic();
    } else {
    }
  }
  PersonFirstName = new FormControl('', Validators.required);
  AddTemporaryPatientDemographic()
  {
    if(!this.tempPatientDemographicForm.valid) {
      this.tempPatientDemographicForm.markAllAsTouched();
    }else{
      this.TempPDService.create(this.tempPatientDemographicForm.value).subscribe(
        res => { 
         this.tempPatientDemographicForm.reset();
        },
        err => {
          console.log('Error', err);
        } 
      );
    }
    
  }
  GetAlltitles(){
    this.subscriberService.getallTitle().subscribe(
      res => {
        this.titles=res as [];
      
      },
      err => {
        console.log('Error', err);
      });
  }
  GetRelaionShips()
  {
    this.TempPDService.getRelationships().subscribe(
      res =>{
        this.relationships=res as [];
        console.log(this.relationships);
      },
      err => {
        console.log('Error', err);
      });
    
  }
  GetAllCountries(){
    this.subscriberService.getallcountries().subscribe(
      res => {
        this.countries=res as [];
      },
      err => {
        console.log('Error', err);
      });
  }
  changeCountry(id) {
    this.subscriberService.getallstates(id).subscribe(
      res => {
        this.states=res as [];
        //this.Subcriberform.get('StateId').reset(); 
        //this.Subcriberform.get('CityId').reset(); 
      },
      err => {
        console.log('Error', err);
      });
  }
  changeState(id) {
    this.subscriberService.getallcities(id).subscribe(
      res => {
        this.cities=res as [];
        //this.Subcriberform.get('CityId').reset(); 
      },
      err => {
        console.log('Error', err);
      });
  }
  GetAllGenders(){
    this.subscriberService.getallgender().subscribe(
      res => {
        this.genders=res as [];
      },
      err => {
        console.log('Error', err);
      });
  }
}