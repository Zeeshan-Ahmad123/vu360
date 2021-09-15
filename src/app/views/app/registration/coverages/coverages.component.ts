import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationService } from 'src/app/shared/Pagination.service';
import { SubscriberService } from './../../../../shared/AppServices/Registration/Subscriber.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-coverages',
  templateUrl: './coverages.component.html',
  styleUrls: ['./coverages.component.scss']
})
export class CoveragesComponent implements OnInit {

  constructor(private formBuilder: 
    FormBuilder,private subscriberService:SubscriberService,private route: Router,private aroute: ActivatedRoute,private ngxService: NgxUiLoaderService,
    public ps:PaginationService
    ) {
    }
    Subcriberform: FormGroup;
    InsurencsCoverageform:FormGroup;

    SubcriberList:[];
    list:[];

    

  showSubscribersByPageNumber(page, i) {
    this.SubcriberList = [];  
    this.ps.pageNumber = [];
    this.ps.pageNumber[i] = true;
    this.ps.pageNo = page;
    this.ps.currentPage =page;
    this.GetSubscribers();
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
      this.GetSubscribers();
    
    }else if (noOfRec == this.ps.itemPerPage.medium) {
      this.ps.smallPageRow = false;
      this.ps.mediumPageRow = true;
      this.ps.largePageRow = false;
      this.ps.itemPerPage = noOfRec;
      this.ps.currentPage = 1;
      this.ps.pageNumber[0] = true;
      this.GetSubscribers();
    
    } else {
      this.ps.smallPageRow = false;
      this.ps.mediumPageRow = false;
      this.ps.largePageRow = true;
      this.ps.itemPerPage = noOfRec;
      this.ps.currentPage = 1;
      this.ps.pageNumber[0] = true;
      this.GetSubscribers();
    }
  }
  showPrevSubscribers() {

    if (this.ps.showNoOfCurrentPage != 1) {
      this.ps.prev();
      this.ps.pageNumber = [];
      this.ps.pageNumber[0] = true;
      this.ps.currentPage = this.ps.pageField[0];
      this.GetSubscribers();
    }
  }
  showNextSubscribers() {
    
    if (this.ps.disabledNextBtn == false) {
      this.ps.pageNumber = [];
      this.ps.next();
      this.ps.pageNumber[0] = true;
      this.ps.currentPage = this.ps.pageField[0];
      this.GetSubscribers();
    }
  }
  getAllSubscribersCount() {  
    this.subscriberService.GetTotalCount().subscribe((res: any) => {  
    this.ps.totalitemsCount = res;  
    this.ps.totalNoOfPages();
    });  
  }
  GetSubscribers() {
    debugger;
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    this.subscriberService.getall(this.ps.itemPerPage,this.ps.pageNo).subscribe(
      res => {
        this.SubcriberList = res as [];
        this.getAllSubscribersCount();
        setTimeout(() => {
          this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
        }, 500);
      },
      err => {
        console.log('Error', err);
      });
  }
  setClickedRow(Id){
    sessionStorage.setItem("SubId",Id);    
  } 
   
  ngOnInit(): void {

    // Pagination
    this.ps.pageNumber[0] = true;
    this.ps.temppage = 0;
    this.GetSubscribers();


    //Subscriber Information form
    this.Subcriberform = this.formBuilder.group({
      SubscriberId:[0],
      LastName: [''],
      InsuredIdno:[''], 
    });
   //Coverage Information form 
    this.InsurencsCoverageform=this.formBuilder.group({
      Relationship:['']
    });

    this.RelationWithSubscribers();
    
  }
  ManageSubscriber(){
    if (this.Subcriberform.value) {
     this.GetSubscribersInfo();
    } else {
    }
    
  }
  RelationWithSubscribers() {
  
    this.subscriberService.relationWithSubscriber().subscribe(
      res => {
        this.relationshipswithsubscriber = res as [];
      },
      err => {
        console.log('Error', err);
      });
  }
  GetSubscribersInfo()
  {
      const LastName=this.Subcriberform.controls.LastName.value;
      const InsuredIdno=this.Subcriberform.controls.InsuredIdno.value;

      this.subscriberService.searchSubscribers(LastName,InsuredIdno).subscribe
      (
        res =>
        {
          this.SubcriberList=res as [];
          this.Subcriberform.reset();
        },
      )
   
  }
  AddToCoverage()
  {
    const subscriberId =sessionStorage.getItem('SubId');
    this.subscriberService.getbyid(subscriberId).subscribe(
      res => {
        this.list=res as [];
        console.log(this.list)
      },
      err => {
        console.log('Error', err);
      });

  }
  types = [
    { label: 'Both', value: 'Both' },
    { label: 'Person', value: 'Person' },
    { label: 'Non Person', value: 'Non Person' }
  ];
  relationshipswithsubscriber = [];

}