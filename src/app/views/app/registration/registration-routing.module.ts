import { SubscriberComponent } from './subscriber/subscriber.component';
import { CoveragesComponent } from './coverages/coverages.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { AlertsComponent } from './alerts/alerts.component';
import { TemporaryPatientDemographicsComponent } from './temporary-patient-demographics/temporary-patient-demographics.component';
import { PatientCommentsComponent } from './patient-comments/patient-comments.component';
import { EncountersComponent } from './encounters/encounters.component';

const routes: Routes = [
  {
      path: '', component: RegistrationComponent,
      children: [
          { path: '', redirectTo: 'Demographics', pathMatch: 'full' },
          { path: 'Demographics', component: DemographicsComponent },
          { path: 'Coverages', component: CoveragesComponent },
          { path: 'Subscriber', component: SubscriberComponent },
          { path: 'Alerts', component: AlertsComponent },
          { path: 'Temporary Patient Demographics', component: TemporaryPatientDemographicsComponent },
          { path: 'Patient Comments', component: PatientCommentsComponent },
          { path: 'Encounters', component: EncountersComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
