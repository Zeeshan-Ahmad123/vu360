import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FacilityService} from 'src/app/shared/AppServices/Locations/Facility.service'
import {FacilityModel} from 'src/app/shared/AppServices/Locations/FacilityModel'
import {FacilitiesPerPage} from 'src/app/shared/AppServices/Locations/FacilitiesPerPage'
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService


@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private facilityservice:FacilityService, private route: Router,private aroute: ActivatedRoute,private ngxService: NgxUiLoaderService) { }
    // Form Initialize
    FacilityForm:FormGroup;
  //Pagination
  Facilities:FacilityModel[];
  pageNo: any = 1;
  pageNumber: boolean[] = [];
  smallPageRow: boolean = true;
  mediumPageRow: boolean = false;
  largePageRow: boolean = false;
  small = FacilitiesPerPage.small;
  medium = FacilitiesPerPage.medium;
  large = FacilitiesPerPage.large;
  pageField = [];
  exactPageList: any;
  paginationData: number;
  facilitiesPerPage: any = FacilitiesPerPage.small;
  totalFacilities: any;
  totalFacilitiesCount: any;
  currentPage = 1;
  pageNumberPerPage = 0;
  pageNumberShow = FacilitiesPerPage.displayNoOfPagesPerPage;
  temppage: number = 0;
  disabledNextBtn: boolean;
  disabledPrevBtn: boolean = true;
  prevtrue: boolean;
  nexttrue: boolean;
  showNoOfCurrentPage: any = 1;
  showPageOnlyOntabsChange: boolean = true;
  lastPage: any = 0;
  pageOnLoad() {
    if (this.temppage == 0 ) {
        
        this.pageField = [];
        for (var a = 0; a < this.pageNumberShow; a++) {
            this.pageField[a] = this.temppage + 1;
            this.temppage = this.temppage + 1;
            if (this.exactPageList == this.pageField[a]) {
                for (var b = 0; b < this.pageNumberShow - 7; b++) {
                    if (a == b) {
                        this.temppage = this.temppage - (b + 1);
                        this.prevtrue = false;
                        break;
                    }
                }
                this.disabledNextBtn = true;
                break;
            } else {
                this.disabledNextBtn = false;
            }
        }
    }
}
prevFacilities() {

    this.pageNumber[0] = true;
    this.nexttrue = true;
    if (this.showNoOfCurrentPage != 1) {
        this.disabledNextBtn = false;
        this.showNoOfCurrentPage = this.showNoOfCurrentPage - 1;
        if (this.prevtrue) {
            if (this.lastPage == 0) {
                this.temppage = this.temppage - 10;
                this.prevtrue = false;
            } else {
                this.temppage = this.lastPage ;
                this.nexttrue =false;
                this.prevtrue = false;
                this.lastPage = 0;
            }
        }
        for (var a = this.pageNumberShow - 1; a >= 0; a--) {
            this.pageField[a] = this.temppage;
            this.temppage = this.temppage - 1;
        }
        if (this.temppage == 0) {
            this.showPageOnlyOntabsChange = false;
        }
        this.currentPage = this.pageField[0];
    }
}
nextFacilities() {

    if (this.disabledNextBtn == false) {
        this.disabledPrevBtn = false;
        this.pageField = [];
        this.prevtrue = true;
        this.showNoOfCurrentPage = this.showNoOfCurrentPage + 1;
        this.pageNumber[0] = true;
        if (this.nexttrue) {
            this.temppage = this.temppage + 10;
            this.nexttrue = false;
        }
        for (var a = 0; a < this.pageNumberShow; a++) {
            this.pageField[a] = this.temppage + 1;
            this.temppage = this.temppage + 1;
            if (this.exactPageList == this.pageField[a]) {
                this.lastPage = this.pageField[a];
                this.lastPage = this.lastPage - (a + 1);
                for (var b = 0; b < this.pageNumberShow - 7; b++) {
                    if (a == b) {
                        this.temppage = this.temppage - (b + 1);

                        //this.prevtrue = false;
                        break;
                    }
                }
                this.disabledNextBtn = true;
                break;
            } else {
                this.disabledNextBtn = false;
            }
        }
        this.currentPage = this.pageField[0];
    }
}
totalNoOfPages() {

this.paginationData = Number(this.totalFacilitiesCount / this.facilitiesPerPage);
let tempPageData = this.paginationData.toFixed();
if (Number(tempPageData) < this.paginationData) {
  this.exactPageList = Number(tempPageData) + 1;
  this.exactPageList = this.exactPageList;
} else {
  this.exactPageList = Number(tempPageData);
  this.exactPageList = this.exactPageList
}
this.pageOnLoad();
this.pageField = this.pageField;

}
showPrevFacilities() {

if (this.showNoOfCurrentPage != 1) {
  this.prevFacilities();
  this.pageNumber = [];
  this.pageNumber[0] = true;
  this.currentPage = this.pageField[0];
  this.GetFacilites();
}

}
showNextFacilities() {

if (this.disabledNextBtn == false) {
  this.pageNumber = [];
  this.nextFacilities();
  this.pageNumber[0] = true;
  this.currentPage = this.pageField[0];
  this.GetFacilites();
}
}
setRecPerPage(noOfRec) {

this.Facilities = [];
this.pageNumber = [];
this.pageNumber[0] = true;
this.temppage = 0;
if (noOfRec == FacilitiesPerPage.small) {
  this.smallPageRow = true;
  this.mediumPageRow = false;
  this.largePageRow = false;
  this.facilitiesPerPage = noOfRec;
  this.currentPage = 1;
  this.pageNumber[0] = true;
  this.GetFacilites();

}
else if (noOfRec == FacilitiesPerPage.medium) {
  this.smallPageRow = false;
  this.mediumPageRow = true;
  this.largePageRow = false;
  this.facilitiesPerPage = noOfRec;
  this.currentPage = 1;
  this.pageNumber[0] = true;
  this.GetFacilites();

} else {
  this.smallPageRow = false;
  this.mediumPageRow = false;
  this.largePageRow = true;
  this.facilitiesPerPage = noOfRec;
  this.currentPage = 1;
  this.pageNumber[0] = true;
  this.GetFacilites();

}
//this.pageSize = page;
}
getAllFacilitiesCount() {  
  this.facilityservice.GetTotalCount().subscribe((res: any) => {  
  this.totalFacilitiesCount = res;  
  this.totalNoOfPages();
  });  
}

GetFacilites() {
  this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
  // Stop the foreground loading after 5s
  this.facilityservice.getall(this.facilitiesPerPage,this.pageNo).subscribe(
    res => {
      this.Facilities = res as FacilityModel[];
      setTimeout(() => {
        this.ngxService.stop();
      }, 1300);
         // stop foreground spinner of the master loader with 'default' taskId
      this.getAllFacilitiesCount();
    },
    err => {
      console.log('Error', err);
    });
}
showFacilitiesByPageNumber(page, i) {  
  this.Facilities = [];
  this.pageNumber = [];
  this.pageNumber[i] = true;
  this.pageNo = page;
  this.currentPage =page;
  this.GetFacilites();
} 
Editbuttonclicked(id: number) {
  this.route.navigate(['/app/Control Panel/Provider/Locations/edit',id]);
}
  ngOnInit(): void {
    this.pageNumber[0] = true;
    this.temppage = 0;
    this.GetFacilites()
    
  }

}
