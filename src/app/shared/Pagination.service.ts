import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {PerPage} from 'src/app/shared/AppServices/Locations/FacilitiesPerPage'


@Injectable({ providedIn: 'root' })
export class PaginationService {

    //Pagination
  pageNo: any = 1;
  pageNumber: boolean[] = [];
  smallPageRow: boolean = true;
  mediumPageRow: boolean = false;
  largePageRow: boolean = false;
  small = PerPage.small;
  medium = PerPage.medium;
  large = PerPage.large;
  pageField = [];
  exactPageList: any;
  paginationData: number;
  itemPerPage: any = PerPage.small;
  totalitems: any;
  totalitemsCount: any;
  currentPage = 1;
  pageNumberPerPage = 0;
  pageNumberShow = PerPage.displayNoOfPagesPerPage;
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
prev() {

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
next() {

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

    this.paginationData = Number(this.totalitemsCount / this.itemPerPage);
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
}