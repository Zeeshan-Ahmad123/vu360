import { PagesContainersModule } from './../../../containers/pages/pages.containers.module';
import { FormsContainersModule } from './../../../containers/forms/forms.containers.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { DemographicsComponent } from './demographics/demographics.component';

import { AlertsComponent } from './alerts/alerts.component';
import { TemporaryPatientDemographicsComponent } from './temporary-patient-demographics/temporary-patient-demographics.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CoveragesComponent } from './coverages/coverages.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientCommentsComponent } from './patient-comments/patient-comments.component';
import { EncountersComponent } from './encounters/encounters.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
//import { NgxLoadingModule } from 'ngx-loading';







@NgModule({
  declarations: [DemographicsComponent, CoveragesComponent, SubscriberComponent,AlertsComponent
    ,TemporaryPatientDemographicsComponent
    ,PatientCommentsComponent
    ,EncountersComponent
    ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    LayoutContainersModule,
    NgSelectModule,
    BsDatepickerModule,
    FormsContainersModule,
    PagesContainersModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    //NgxLoadingModule.forRoot({})

  ]
})
export class RegistrationModule { }
