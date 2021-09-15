import { SubscriberService } from './../../../../shared/AppServices/Registration/Subscriber.service';
import { FormBuilder,Validators, FormGroup ,FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { ActivatedRoute,Router } from '@angular/router';
import data from 'src/app/data/follow';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {



  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  constructor(private localeService: BsLocaleService,private router: Router, private formBuilder: 
    FormBuilder,private aroute: ActivatedRoute,private subscriberService:SubscriberService) {

    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    defineLocale('es', esLocale);
   }
   Subcriberform: FormGroup;
    list:[];
    Subcribers=[];
    fieldArrayCopay: Array<any> = [];
    newAttributeCopay: any = {};
    titles = [''];
    genders = [];
    countries = [];
    states = [];
    cities = [];
    carrier = [];

  ngOnInit(): void {

    //this.GetSubscribers();
    this.GetAllCountries();
    this.GetAllGenders();
    this.GetAllTitles();
    this.GetAllCarrier();
    //for datepicker
    this.Subcriberform = this.formBuilder.group({
     SubscriberId:[0],
     FirstName: [''],
     MiddleName: [''],
     LastName: ['',[Validators.required]],
     BirthDate:[''],
     Sex:[null],
     InsuredPhone:['',[Validators.required]],
    //Ssn:[''],
    //EmployerOrSchoolName:[''],
    // Employer:[''],
     Suffix:[null],
     
     Address1:[''],
     Address2:[''],
     //ZipCode:[''],
     Inactive:[false],

    //  EnteredBy:[''],
    //  EntryDate:[''],
     
    Deductibles: [10.10], //IP
    OPCopay:[10.10],    //OP
    DNDeductible:[10.10],
    // PC:[10.10],

     CarrierId:[null,[Validators.required]],
     InsuredIDNo:['',[Validators.required]],
     InsuredGroupOrPolicyNam:[null,[Validators.required]],
     InsuredGroupOrPolicyNo: ['1'],
    // Relationship:[''],
    // Title:[''],
    // InsuranceTypeCode:[''],
     CityId:[null],
     StateId:[null],
     CountryId:[null],
      //Policy 
      EffectiveDate: [''],
      TerminationDate:[''],
      EmploymentStatusId:[''],
      //copy
      Copay: [10.10],

    });

    
  }
  ManageSubscriber(){
    if (this.Subcriberform.value.SubscriberId == 0) {
      this.AddSubscriber();
    } else {
     // this.EditSubscriberDetail();
    }
    
  }
  AddSubscriber(){ 
    debugger;
    if(!this.Subcriberform.valid) {
      this.Subcriberform.markAllAsTouched();

    }
    else{
    this.subscriberService.create(this.Subcriberform.value).subscribe(
      res => { 
       this.Subcriberform.reset();
       console.log(this.Subcribers);
      },
      err => {
        console.log('Error', err);
      }
    );
    }
  }
  GetSubscribers() {
    this.subscriberService.getAllSubscriberInformation().subscribe(
      res => {
        this.Subcribers = res as [];
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
  GetAllGenders(){
    this.subscriberService.getallgender().subscribe(
      res => {
        this.genders=res as [];
      },
      err => {
        console.log('Error', err);
      });
  }
  GetAllTitles(){
    this.subscriberService.getallTitle().subscribe(
      res => {
        this.titles=res as [];
      },
      err => {
        console.log('Error', err);
      });
  }
  // GetAllStates(){
  //   this.subscriberService.getallstateslist().subscribe(
  //     res => {
  //       this.states=res as [];
  //     },
  //     err => {
  //       console.log('Error', err);
  //     });
  // }
  // GetAllCities(){
  //   this.subscriberService.getallcitieslist().subscribe(
  //     res => {
  //       this.cities=res as [];
  //     },
  //     err => {
  //       console.log('Error', err);
  //     });
  // }
  GetAllCarrier(){
    this.subscriberService.getallCarrier().subscribe(
      res => {
        this.carrier=res as [];
       // console.log(this.carrier);
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

 

  //table row add and delete in Policy tab. start
  fieldArrayPolicy: Array<any> = [];
  newAttribute: any = {};

  addFieldValuePolicy() {
       this.fieldArrayPolicy.push(this.newAttribute)
       this.newAttribute = {};
   }

   deleteFieldValuePolicy(index) {
       this.fieldArrayPolicy.splice(index, 1);
   }
//table row add and delete in Policy tab. end
//table row add and delete in Copay tab. start


  addFieldValueCopay() {
       this.fieldArrayCopay.push(this.newAttributeCopay)
       this.newAttributeCopay = {};
   }

   deleteFieldValueCopay(index) {
       this.fieldArrayCopay.splice(index, 1);
   }
  //table row add and delete[] in Copay tab. end
  EntityType=new FormControl('',[Validators.required])
  types = [
    { label: 'Person', value: 1},
    {label: 'Non Person', value: 2 }
  ];
  policynames = [
    { label: '1 - Daman Patient to Bill Al Noor Hospital', value: '1 - Daman Patient to Bill Al Noor Hospital' },
    { label: '2 - ALICO Insurance', value: '2 - ALICO Insurance' }
  ];
  status = [
    { label: 'Active', value: 1 },
    { label: 'Inactive', value: 2 }
  ];
  services = [
    { label: 'Demo', value: 1 }
  ];
}