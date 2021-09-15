import { Component, OnInit } from '@angular/core';
import {LocationService} from 'src/app/shared/AppServices/Locations/Location.service'
import { PaginationService } from 'src/app/shared/Pagination.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private locationservice:LocationService,public ps:PaginationService) { }
  Locations:[];
  showLocationsByPageNumber(page, i) {
    this.Locations = [];  
    this.ps.pageNumber = [];
    this.ps.pageNumber[i] = true;
    this.ps.pageNo = page;
    this.ps.currentPage =page;
    this.GetLocations();
  } 
  setRecPerPage(noOfRec) {
        
    this.ps.pageNumber = [];
    this.ps.pageNumber[0] = true;
    this.ps.temppage = 0;
    if (noOfRec == this.ps.itemPerPage.small) {
      this.ps.smallPageRow = true;
      this.ps.mediumPageRow = false;
      this.ps.largePageRow = false;
      this.ps.itemPerPage = noOfRec;
      this.ps.currentPage = 1;
      this.ps.pageNumber[0] = true;
      this.GetLocations();
    
    }else if (noOfRec == this.ps.itemPerPage.medium) {
      this.ps.smallPageRow = false;
      this.ps.mediumPageRow = true;
      this.ps.largePageRow = false;
      this.ps.itemPerPage = noOfRec;
      this.ps.currentPage = 1;
      this.ps.pageNumber[0] = true;
      this.GetLocations();
    
    } else {
      this.ps.smallPageRow = false;
      this.ps.mediumPageRow = false;
      this.ps.largePageRow = true;
      this.ps.itemPerPage = noOfRec;
      this.ps.currentPage = 1;
      this.ps.pageNumber[0] = true;
      this.GetLocations();
    }
  }
  showPrevLocations() {

    if (this.ps.showNoOfCurrentPage != 1) {
      this.ps.prev();
      this.ps.pageNumber = [];
      this.ps.pageNumber[0] = true;
      this.ps.currentPage = this.ps.pageField[0];
      this.GetLocations();
    }
    }
    showNextLocations() {
    
    if (this.ps.disabledNextBtn == false) {
      this.ps.pageNumber = [];
      this.ps.next();
      this.ps.pageNumber[0] = true;
      this.ps.currentPage = this.ps.pageField[0];
      this.GetLocations();
    }
    }
    getAllLocationsCount() {  
      this.locationservice.GetTotalCount().subscribe((res: any) => {  
      this.ps.totalitemsCount = res;  


        console.log(this.ps.totalitemsCount);

      this.ps.totalNoOfPages();
      });  
    }
  GetLocations() {
    this.locationservice.getall(this.ps.itemPerPage,this.ps.pageNo).subscribe(
      res => {
        this.Locations = res as [];
        this.getAllLocationsCount();
        console.log(res)


      },
      err => {
        console.log('Error', err);
      });
  }

  ngOnInit(): void {

    this.ps.pageNumber[0] = true;
    this.ps.temppage = 0;
    this.GetLocations()


  }

  facilities = [
    { label: 'Demo 1', value: 'Demo 1' },
  ];

  locationTypes = [
    { label: 'Consult', value: 'Consult' },
    { label: 'OT', value: 'OT' },
  ];

  sites = [
    { label: 'Site', value: 'Site' },
  ];

}
