import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FacilityService} from 'src/app/shared/AppServices/Locations/Facility.service'
import {FacilityModel} from 'src/app/shared/AppServices/Locations/FacilityModel'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.scss']
})
export class FacilityFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private facilityservice:FacilityService, private route: Router,private aroute: ActivatedRoute) { }

  // Form Initialize
  FacilityForm:FormGroup;

  ManageFacility(){
    if (this.FacilityForm.value.Id == 0) {
      this.AddFacilityDetail();
    } else {
      this.EditFacilityDetail();
    }
  }

  AddFacilityDetail(){
    if(!this.FacilityForm.valid) {
      this.FacilityForm.markAllAsTouched();

    }else{
    this.facilityservice.create(this.FacilityForm.value).subscribe(
    res => {
      this.FacilityForm.reset();
      Swal.fire(
        'Good job!',
        'Your Data Has been Enter!',
        'success'
      )
      this.route.navigate(['/app/Control Panel/Provider/Locations/Facility']);
    },
  
    err => {
      console.log('Error', err);
    });
  }
  }
  GetFacility(id: number) {
    this.facilityservice.getbyid(id).subscribe(
      (facility: FacilityModel) => this.EditFacility(facility),
      err => {
        console.log('Error', err);
      });
  }

  EditFacility(facility : FacilityModel){
    this.FacilityForm.patchValue({
      Id: facility.id,
      Name: facility.name,
      FacilityNameArabic:facility.facilityNameArabic,
      LoginRegCode:facility.loginRegCode,
      ClaimLicenseNumber:facility.claimLicenseNumber,
      Code:facility.code,
      LabReferenceNoPrefix:facility.labReferenceNoPrefix,
      Phone1:facility.phone1,
      GeoMapUrl:facility.geoMapUrl,
      Description:facility.description
    });
  }
  EditFacilityDetail() {
    this.facilityservice.edit(this.FacilityForm.value.Id ,this.FacilityForm.value).subscribe(
      res => {
        this.FacilityForm.reset();
        this.route.navigate(['/app/Control Panel/Provider/Locations/Facility']);
      },
      err => {
        console.log('Error', err);
      }
    );
  }

  ngOnInit(): void {
    this.FacilityForm = this.formBuilder.group({
      Id: [0],
      Name: ['', [Validators.required]],
      FacilityNameArabic: ['', [Validators.required]],
      LoginRegCode: ['', [Validators.required]],
      ClaimLicenseNumber: ['', [Validators.required]],
      Code: ['', [Validators.required]],
      LabReferenceNoPrefix: ['', [Validators.required]],
      Phone1: ['', [Validators.required]],
      GeoMapUrl: ['', [Validators.required]],
      Description: ['', [Validators.required]]
    });

    this.aroute.paramMap.subscribe(params => {
      const Facid = +params.get('id');
      if (Facid) {
        this.GetFacility(Facid);
      }
    });
  }

}
