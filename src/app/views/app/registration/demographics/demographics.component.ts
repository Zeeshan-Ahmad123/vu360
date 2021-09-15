import { Component, OnInit, Renderer2 } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { ActivatedRoute,Router } from '@angular/router';
import {DemographicsService} from 'src/app/shared/AppServices/Registration/demographics.service'
import {CountryStateCityService} from 'src/app/shared/AppServices/Shared/countrystatecity.service'
import * as moment from 'moment';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss']
})
export class DemographicsComponent implements OnInit {
  
  constructor(private localeService: BsLocaleService,private demographiceService:DemographicsService ,
    private router: Router, private formBuilder: FormBuilder,private aroute: ActivatedRoute,
    private countrystatecity:CountryStateCityService,
    ) {

    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    defineLocale('es', esLocale);
  }
  // Dummy
  countries =[];
  states = [];
  cities = [];

  regTitle=[];
  regGender=[];
  regMaritalStatus=[];
  regBloodGroup=[];
  language=[];
  religion=[];
  regEthnicityType=[];
  promotionalMediaChannel:[];
  promotionalMediaitems:[];

  Demographicsform: FormGroup;
  DemographicsDetailform: FormGroup;
  DemographicsDetails:any;
  list:[];
  // Dropdowns
  dropdowns:any;
  step= 1;
  ngOnInit(): void 
  {
    this.Demographicsform = this.formBuilder.group({
      //--Main
      Empi:[''],
      Mrno:[''],
      PersonTitleId:[],
      PersonFirstName: ['',[Validators.required]],
      PersonMiddleName: [''],
      PersonLastName: ['',[Validators.required]],
      PersonNameArabic:[''],
      PersonSex:[null,[Validators.required]],
      PatientPicture:[],
      Vippatient:[false],
      PersonMaritalStatus:[],
      PatientBirthDate:['',[Validators.required]],
      Age:[''],
      PatientBloodGroupId:[],
      Nationality:[null,[Validators.required]],
      PrimaryLanguage:[],
      Religion:[],
      PersonEthnicityTypeId:[],
      EmiratesIdn:['',[Validators.required]],
      PersonPassportNo:[''],
      PersonDriversLicenseNo:[''],
      LaborCardNo:[''],
      Reference_Channel:[null],
      Refernce_By:[''],
      ResidenceVisaNo:[''],
      // Emirates ID Type
      
     
      //--Residence

      PersonAddress1:[''],
      PersonAddress2:[''],
      PersonEmail:[''],
      PersonCountryId:[null,[Validators.required]],
      PersonStateId: [null,[Validators.required]],
      PersonCityId: [null,[Validators.required]],
      PersonZipCode:[''],
      PersonHomePhone1:[''],
      PersonWorkPhone1:[''],
      PersonFax:[''],
      PersonCellPhone:['',[Validators.required]],


    //--Temporary


      PersonTempAddress1:[''],
      PersonTempAddress2:[''],
      // Email
      PersonTempCountryId:[],
      PersonTempStateId:[],
      PersonTempCityId:[],
      PersonTempZipCode:[''],
      PersonTempHomePhone:[''],
      PersonTempWorkPhone:[''],
      PersonTempFax:[''],
      PersonTempCellPhone:[''],



    //--Other


      PersonOtherAddress1:[''],
      PersonOtherAddress2:[''],
      // Email
      PersonOtherCountryId:[],
      PersonOtherStateId:[],
      PersonOtherCityId:[],
      PersonOtherZipCode:[''],
      PersonOtherHomePhone:[''],
      PersonOtherWorkPhone:[''],
      PersonOtherFax:[''],
      PersonOtherCellPhone:[''],


    // --Employment


    EmploymentCompanyName:[''],
    EmploymentOccupation:[],
    EmploymentStatusId:[],
    EmploymentTypeId:[],


    // --Emergency Contact


    EcontactRelationship:[],
    EcontactFirstName:[''],
    EcontactMiddleName:[''],
    EcontactLastName:[''],
    // National Id
    EcontactAddress1:[''],
    EcontactAddress2:[''],
    EcontactCountryId:[],
    EcontactStateId:[],
    EcontactCityId:[],
    EcontactZipCode:[''],
    EcontactHomePhone:[''],
    EcontactWorkPhone:[''],
    EcontactCellPhone:[''],

    // --Next of Kin

    NokrelationshipId:[],
    NokfirstName:[''],
    NokmiddleName:[''],
    NoklastName:[''],
    // National Id
    Nokaddress1:[''],
    Nokaddress2:[''],
    NokcountyId:[],
    NokstateId:[],
    NokcityId:[],
    NokzipCode:[''],
    NokhomePhone:[''],
    NokworkPhone:[''],
    NokcellNo:[''],


    // --Spouse
    SpouseFirstName:[''],
    SpouseMiddleName:[''],
    SpouseLastName:[''],
    SpouseSex:[],

    // --Parent

    // FirstName
    // MiddleName
    // LastName
    FatherEmailAddress:[''],
    FatherHomePhone:[''],
    FatherCellPhone:[''],
    MotherFirstName:[''],
    MotherMiddleName:[''],
    MotherLastName:[''],
    MotherEmailAddress:[''],
    MotherHomePhone:[''],
    MotherCellPhone:[''],

    // Assignment

    ProofOfIncome:[''],
    ProviderId:[],
    FeeScheduleId:[],
    FinancialClassId:[],
    LocationId:[],
    // Site
    // Signed
    // Un-Signed
    // Signed Date
    // Expiray Date
    // Entity Type
    // Entity Name
    // Referenced by


    // Family Members

    TypeId:[false],
    MasterAccountNo:[''],
    Relationship:[''],


    });
    this.DemographicsDetailform = this.formBuilder.group({
      SearchMRNO:['']
    });
    this.GetAllCountries();
    this.GetAllDropdowns();
  }
  GetAllCountries(){
    this.countrystatecity.getallcountries().subscribe(
      res => {
        this.countries=res as [];
      },
      err => {
        console.log('Error', err);
      });
  }
  GetAllStates(){
    this.countrystatecity.getallstateslist().subscribe(
      res => {
        this.states=res as [];
      },
      err => {
        console.log('Error', err);
      });
  }
  GetAllCities(){
    this.countrystatecity.getallcitieslist().subscribe(
      res => {
        this.cities=res as [];
      },
      err => {
        console.log('Error', err);
      });
  }
  changeCountry(id) {
    this.countrystatecity.getallstates(id).subscribe(
      res => {
        this.states=res as [];
        //this.SiteForm.get('StateId').reset(); 
        //this.SiteForm.get('CityId').reset(); 
      },
      err => {
        console.log('Error', err);
      });
  }
  changeState(id) {
    this.countrystatecity.getallcities(id).subscribe(
      res => {
        this.cities=res as [];
        //this.Demographicsform.get('CityId').reset(); 
      },
      err => {
        console.log('Error', err);
      });
  }
  GetAllDropdowns(){ 
    this.demographiceService.getalldemographicsdropdowns().subscribe(
      res => { 
       this.dropdowns=res;

       this.regTitle=this.dropdowns.regTitle;
       this.regGender=this.dropdowns.regGender;
       this.regMaritalStatus=this.dropdowns.regMaritalStatus;
       this.regBloodGroup=this.dropdowns.regBloodGroup;
       this.language=this.dropdowns.language;
       this.religion=this.dropdowns.religion;
       this.regEthnicityType=this.dropdowns.regEthnicityType;
       this.promotionalMediaChannel=this.dropdowns.promotionalMediaChannel;

       this.countrystatecity.getallcountries().subscribe(res =>{
        this.countries=res as [];
       })

       console.log(this.dropdowns);
      },
      err => {
        console.log('Error', err);
      }
    );
  } 
  ManageDemographics(){
    this.AddDemographicsDetail();
  }
  AddDemographicsDetail(){ 
    debugger;
    if(!this.Demographicsform.valid) {
      this.Demographicsform.markAllAsTouched();

    }
    else{
    this.demographiceService.create(this.Demographicsform.value).subscribe(
      res => { 
       this.Demographicsform.reset();
      },
      err => {
        console.log('Error', err);
      }
    );
    }
  }
  DemographicsDetail(){

     
    this.demographiceService.getbymrno(this.DemographicsDetailform.value.SearchMRNO).subscribe(
      res => { 
        this.DemographicsDetails=res;
        console.log(this.DemographicsDetails);
      },
      err => {
        console.log('Error', err);
      }
    );
      
  }
  
  changeDate() {
    const PatientBirthDate=this.Demographicsform.value.PatientBirthDate;
    const oldDate = new Date(PatientBirthDate);
    const newDate = new Date();


    var oldDateMoment, newDateMoment, numYears, numMonths, numDays;

    oldDateMoment = moment(oldDate);
    newDateMoment = moment(newDate);

    numYears = newDateMoment.diff(oldDateMoment, 'years');
    oldDateMoment = oldDateMoment.add(numYears, 'years');
    numMonths = newDateMoment.diff(oldDateMoment, 'months');
    oldDateMoment = oldDateMoment.add(numMonths, 'months');
    numDays = newDateMoment.diff(oldDateMoment, 'days');

    var Age="Y -"+numYears + " M -" + numMonths + " D -" + numDays;
    this.Demographicsform.patchValue({
    Age:Age
    })
  }
  changepromotionalMediaChannel(Id){
    this.demographiceService.getallpromotionalmediaitems(Id).subscribe(
      res => { 
        this.promotionalMediaitems=res as [];
      },
      err => {
        console.log('Error', err);
      }
    );
  }

//table row add and delete in employment tab. start
 fieldArray: Array<any> = [];
 newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
//table row add and delete in employment tab. end

//enable and disable proof of incom field on click chechbox. start

v1: any;
check_en(v1){
  if(v1 == true){
    document.getElementById('text1').setAttribute("disabled", "false");                  
  }
   else {
    document.getElementById('text1').removeAttribute("disabled")    
  }    
}

//enable and disable proof of incom field on click chechbox. end

//on radio btn enable disable fields start
textBoxDisabled = true;
textBoxDisabledMaster = false;

//for assignments tab calender 
toggle(){
  this.textBoxDisabled = !this.textBoxDisabled;
}
//for family member tab master 
toggleMaster(){
  
  this.textBoxDisabledMaster = !this.textBoxDisabledMaster;
}
//on radio btn enable disable fields end

 
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  bsInlineValue = new Date();


  nationality = [
    { label: 'Demo', value: 1 }
  ];
  primarylanguage = [
    { label: 'Demo', value: 1 }
  ];
  religions = [
    { label: 'Demo', value: 1 }
  ];
  ethnicity = [
    { label: 'Demo', value: 1 }
  ];


  emiratesIdtype = [
    { label: 'Demo', value: 1 }
  ];
  refrencedby = [
    { label: 'Demo', value: 1 }
  ];
  refrencechannel = [
    { label: 'Demo', value: 1 }
  ];

 

  sectors = [
    { label: 'Demo', value: "1" }
  ];
  employmentstatus = [
    { label: 'Demo', value: 1 }
  ];
  employmenttype = [
    { label: 'Demo', value: 1 }
  ];
  relationships = [
    { label: 'Demo', value: "1" }
  ];
  gender1 = [
    { label: 'Demo', value: "1" }
  ];
  providers = [
    { label: 'Demo', value: 1 }
  ];
  feeschedules = [
    { label: 'Demo', value: 1 }
  ];
  financialclasses = [
    { label: 'Demo', value: 1 }
  ];
  locations = [
    { label: 'Demo', value: 1 }
  ];
  sites1 = [
    { label: 'Demo', value: 1 }
  ];
  refrencedby1 = [
    { label: 'Demo', value: 1 }
  ];
  entitynames = [
    { label: 'Demo', value: 1 }
  ];
  entitytypes = [
    { label: 'Demo', value: 1 }
  ];
  relationship2 = [
    { label: 'Demo', value: 1 }
  ];
  prints = [
    { label: 'Demo', value: 1 }
  ];
  demos = [
    { label: 'Demo', value: 1 }
  ];

 //image select
  url:any="/assets/img/profiles/dummy-profile.jpg";
    onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        let bytes;
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (e: any) => {
          this.url = e.target.result;
          bytes = e.target.result.split('base64,')[1];
          this.Demographicsform.patchValue({
            PatientPicture:bytes
          })
        };
      }
  }
}

