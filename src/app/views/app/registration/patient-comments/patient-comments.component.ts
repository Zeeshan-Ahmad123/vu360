import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DemographicsService } from 'src/app/shared/AppServices/Registration/demographics.service';
import {PatientCommentsService} from 'src/app/shared/AppServices/Registration/PatientComments.service'


@Component({
  selector: 'app-patient-comments',
  templateUrl: './patient-comments.component.html',
  styleUrls: ['./patient-comments.component.scss']
})
export class PatientCommentsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private patientcomments:PatientCommentsService,
    private demographiceService:DemographicsService
    ) { }

  // Form Initialize
  PatientsCommentsForm:FormGroup;
  DemographicsDetailform: FormGroup;
  DemographicsDetails:any;
  DisplayContent:any;
  DisplayDate:any;
  UserName:any;

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(
      `<html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  DemographicsDetail(){
    this.demographiceService.getbymrno(this.DemographicsDetailform.value.SearchMRNO).subscribe(
      res => { 
        this.DemographicsDetails=res;
        this.PatientsCommentsForm.patchValue({
          Mrno:this.DemographicsDetails.mrno
        })
      },
      err => {
        console.log('Error', err);
      }
    );
  }
  ManagePatientsComments(){
    this.AddPatientsComments();
  }
  AddPatientsComments(){
    // if(this.PatientsCommentsForm.value.Mrno==""){
    //   alert("Please load Patient First.....");
    //   return false;
    // }
    this.DisplayContent=this.PatientsCommentsForm.value.Comments;
    this.DisplayDate=new Date().toLocaleDateString();
    this.UserName=localStorage.getItem("username");
    alert(this.DisplayDate)

    // this.patientcomments.create(this.PatientsCommentsForm.value).subscribe(
    // res => {
    //   this.DisplayContent=this.PatientsCommentsForm.value.Comments
    // },
    // err => {
    //   console.log('Error', err);
    // });
  }

  ngOnInit(): void {
    this.PatientsCommentsForm = this.formBuilder.group({
      Mrno: [''],
      Comments: [],
      OldMrno:['']
    });
    this.DemographicsDetailform = this.formBuilder.group({
      SearchMRNO:['']
    });
  }

  //texteditor start
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '200px',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    // uploadWithCredentials: false
    // sanitize: true
    // toolbarPosition: 'top'
    // toolbarHiddenButtons: [
    //   ['bold', 'italic'],
    //   ['fontSize']
    // ]
}
//textEditor end
}
