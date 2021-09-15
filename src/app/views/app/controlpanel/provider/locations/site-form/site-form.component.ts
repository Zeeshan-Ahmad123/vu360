import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {LocationTypeService} from 'src/app/shared/AppServices/Locations/LocationType.service';
import {LocationType} from 'src/app/shared/AppServices/Locations/LocationTypeModel';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private LTService:LocationTypeService,private route: Router,private aroute: ActivatedRoute) { }

    // Form Initialize
    SiteForm:FormGroup;

    ManageLocationType(){

      if (this.SiteForm.value.TypeId == 0) {
        this.AddLocationTypeDetail();
      } else {
        this.EditLocationTypeDetail();
      }
    }
    AddLocationTypeDetail(){
      this.LTService.create(this.SiteForm.value).subscribe(
      res => {
        this.SiteForm.reset();
      },
      err => {
        console.log('Error', err);
      });
    }
    GetLocationType(id: number) {
      this.LTService.getbyid(id).subscribe(
        (locationtype: LocationType) => this.EditLocationType(locationtype),
        err => {
          console.log('Error', err);
        });
    }
  
    EditLocationType(locationtype : LocationType){
      this.SiteForm.patchValue({
        TypeId:locationtype.typeId,
        Name:locationtype.name,
        SiteNameArabic:locationtype.siteNameArabic,
        SiteCode:locationtype.siteCode,
        FacilityId:locationtype.facilityId,
        Address1:locationtype.address1,
        GeoMapUrl:locationtype.geoMapUrl,
        CountryId:locationtype.countryId,
        StateId:locationtype.stateId,
        CityId:locationtype.cityId,
        ZipCode:locationtype.zipCode,
        Phone1:locationtype.phone1,
        Phone2:locationtype.phone2,
        Fax:locationtype.fax,
        Email:locationtype.email,
        SiteNum:locationtype.siteNum,
        PlaceOfService:locationtype.placeOfService,
        OpeningTime:locationtype.openingTime,
        ClosingTime:locationtype.closingTime,
        Description:locationtype.description,
        Active:locationtype.active
      });
      this.GetAllStates();
      this.GetAllCities();

    }
    EditLocationTypeDetail() {
      this.LTService.edit(this.SiteForm.value.TypeId ,this.SiteForm.value).subscribe(
        res => {
          this.SiteForm.reset();
          this.route.navigate(['/app/Control Panel/Provider/Locations/Site']);
        },
        err => {
          console.log('Error', err);
        }
      );
    }

    facilities = [];
    countries = [];
    states = [];
    cities = [];


    GetAllFacilities(){
      this.LTService.getallfacilities().subscribe(
        res => {
          this.facilities=res as [];
        },
        err => {
          console.log('Error', err);
        });
    }
    GetAllCountries(){
      this.LTService.getallcountries().subscribe(
        res => {
          this.countries=res as [];
        },
        err => {
          console.log('Error', err);
        });
    }
    GetAllStates(){
      this.LTService.getallstateslist().subscribe(
        res => {
          this.states=res as [];
        },
        err => {
          console.log('Error', err);
        });
    }
    GetAllCities(){
      this.LTService.getallcitieslist().subscribe(
        res => {
          this.cities=res as [];
        },
        err => {
          console.log('Error', err);
        });
    }
    
    changeCountry(id) {
      this.LTService.getallstates(id).subscribe(
        res => {
          this.states=res as [];
          this.SiteForm.get('StateId').reset(); 
          this.SiteForm.get('CityId').reset(); 
        },
        err => {
          console.log('Error', err);
        });
    }
    changeState(id) {
      this.LTService.getallcities(id).subscribe(
        res => {
          this.cities=res as [];
          this.SiteForm.get('CityId').reset(); 
        },
        err => {
          console.log('Error', err);
        });
    }


  ngOnInit(): void {




    this.GetAllFacilities();
    this.GetAllCountries();




    this.SiteForm = this.formBuilder.group({
    TypeId: [0],
    Name:['', [Validators.required]],
    SiteNameArabic:['', [Validators.required]],
    SiteCode:['', [Validators.required]],
    FacilityId:['', [Validators.required]],
    Address1:['', [Validators.required]],
    GeoMapUrl:['', [Validators.required]],
    CountryId:['', [Validators.required]],
    StateId:['', [Validators.required]],
    CityId:['', [Validators.required]],
    ZipCode:['', [Validators.required]],
    Phone1:['', [Validators.required]],
    Phone2:['', [Validators.required]],
    Fax:['', [Validators.required]],
    Email:['', [Validators.required]],
    SiteNum:['', [Validators.required]],
    PlaceOfService:['', [Validators.required]],
    OpeningTime:['', [Validators.required]],
    ClosingTime:['', [Validators.required]],
    Description:['', [Validators.required]],
    Active:[false, [Validators.required]]
    });


    this.aroute.paramMap.subscribe(params => {
      const Facid = +params.get('id');
      if (Facid) {
        this.GetLocationType(Facid);
      }
    });
  }


  
  

  placeofservicescode = [
    { label: 'Office', value: '1' },
    { label: 'Home', value: '2' },
    { label: 'Group Home', value: '3' }
  ];

}
