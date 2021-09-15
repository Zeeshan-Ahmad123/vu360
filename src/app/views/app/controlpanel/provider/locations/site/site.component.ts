import { Component, OnInit } from '@angular/core';
import {PaginationService} from 'src/app/shared/Pagination.service'
import {LocationTypeService} from 'src/app/shared/AppServices/Locations/LocationType.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  
  constructor(public ps:PaginationService,private lts:LocationTypeService,private route: Router) { }

  LocationTypes:[];

  ngOnInit(): void {
    this.ps.pageNumber[0] = true;
    this.ps.temppage = 0;
    this.GetLocationTypes()
  }
  Editbuttonclicked(id: number) {
    this.route.navigate(['/app/Control Panel/Provider/Locations/editsite',id]);
  }

  showLocationTypeByPageNumber(page, i) {
    this.LocationTypes = [];  
    this.ps.pageNumber = [];
    this.ps.pageNumber[i] = true;
    this.ps.pageNo = page;
    this.ps.currentPage =page;
    this.GetLocationTypes();
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
      this.GetLocationTypes();
    
    }else if (noOfRec == this.ps.itemPerPage.medium) {
      this.ps.smallPageRow = false;
      this.ps.mediumPageRow = true;
      this.ps.largePageRow = false;
      this.ps.itemPerPage = noOfRec;
      this.ps.currentPage = 1;
      this.ps.pageNumber[0] = true;
      this.GetLocationTypes();
    
    } else {
      this.ps.smallPageRow = false;
      this.ps.mediumPageRow = false;
      this.ps.largePageRow = true;
      this.ps.itemPerPage = noOfRec;
      this.ps.currentPage = 1;
      this.ps.pageNumber[0] = true;
      this.GetLocationTypes();
    }
  }
  showPrevLocationTypes() {

    if (this.ps.showNoOfCurrentPage != 1) {
      this.ps.prev();
      this.ps.pageNumber = [];
      this.ps.pageNumber[0] = true;
      this.ps.currentPage = this.ps.pageField[0];
      this.GetLocationTypes();
    }
    }
    showNextLocationTypes() {
    
    if (this.ps.disabledNextBtn == false) {
      this.ps.pageNumber = [];
      this.ps.next();
      this.ps.pageNumber[0] = true;
      this.ps.currentPage = this.ps.pageField[0];
      this.GetLocationTypes();
    }
    }
    getAllLocationTypesCount() {  
      this.lts.GetTotalCount().subscribe((res: any) => {  
      this.ps.totalitemsCount = res;  
      this.ps.totalNoOfPages();
      });  
    }
  GetLocationTypes() {
    this.lts.getall(this.ps.itemPerPage,this.ps.pageNo).subscribe(
      res => {
        this.LocationTypes = res as [];
        this.getAllLocationTypesCount();
      },
      err => {
        console.log('Error', err);
      });
  }

}
