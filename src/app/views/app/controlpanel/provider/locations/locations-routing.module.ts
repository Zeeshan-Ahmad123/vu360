import { LocationFormComponent } from './location-form/location-form.component';
import { FacilityFormComponent } from './facility-form/facility-form.component';
import { SiteFormComponent } from './site-form/site-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilityComponent } from './facility/facility.component';
import { LocationComponent } from './location/location.component';
import { LocationsComponent } from './locations.component';
import { SiteComponent } from './site/site.component';
import { AuthGuard } from 'src/app/shared/auth.guard';


const routes: Routes = [
  {
      path: '', component: LocationsComponent,
      children: [
          { path: '', redirectTo: 'Facility', pathMatch: 'full' },
          { path: 'Facility', component: FacilityComponent },
          { path: 'edit/:id', component: FacilityFormComponent },
          { path: 'FacilityForm', component: FacilityFormComponent},
          { path: 'Site', component: SiteComponent },
          { path: 'editsite/:id', component: SiteFormComponent },
          { path: 'SiteForm', component: SiteFormComponent },
          { path: 'Location', component: LocationComponent },
          { path: 'LocationForm', component: LocationFormComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
