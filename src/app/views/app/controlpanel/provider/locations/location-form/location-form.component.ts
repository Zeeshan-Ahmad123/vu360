import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FacilityService} from 'src/app/shared/AppServices/Locations/Facility.service'
import {LocationTypeService} from 'src/app/shared/AppServices/Locations/LocationType.service'
import {LocationService} from 'src/app/shared/AppServices/Locations/Location.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private facilityservice:FacilityService,
    private locationtype:LocationTypeService,
    private location:LocationService,
    private route: Router
    ) { }
  // Form Initialize
  LocationForm:FormGroup;

  ManageLocation(){
    if (this.LocationForm.value.LocationId == 0) {
      this.AddLocation();
    } else {
    }
  }

  AddLocation(){
    this.location.create(this.LocationForm.value).subscribe(
    res => {
      this.LocationForm.reset();
      this.route.navigate(['/app/Control Panel/Provider/Locations/Location']);
    },
    err => {
      console.log('Error', err);
    });
  }
  facilities=[];
  sites=[];
  GetFacilites() {
    this.facilityservice.getallfacilities().subscribe(
      res => {
        this.facilities = res as [];

        console.log(this.facilities);

      },
      err => {
        console.log('Error', err);
      });
  }
  GetLocationTypes() {
    this.locationtype.getalllocationtypes().subscribe(
      res => {
        this.sites = res as [];

        console.log(this.locationTypes);

      },
      err => {
        console.log('Error', err);
      });
  }


  ngOnInit(): void {
    this.LocationForm = this.formBuilder.group({
      LocationId: [0],
      LocationType: ['', [Validators.required]],
      TypeId: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Active: [false, [Validators.required]],
    });


    this.GetFacilites();
    this.GetLocationTypes();
  }

  // facilities = [
  //   { label: 'Demo 1', value: 'Demo 1' },
  // ];

  locationTypes = [
    { typeId: 'Consult', name: 'Consult' },
    { typeId: 'OT', name: 'OT' },
  ];

  // sites = [
  //   { label: 'Site', value: 'Site' },
  // ];

}
