import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LocationsComponent } from './locations.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { FacilityComponent } from './facility/facility.component';
import { SiteComponent } from './site/site.component';
import { LocationComponent } from './location/location.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { LayoutContainersModule } from '../../../../../containers/layout/layout.containers.module';
import { SiteFormComponent } from './site-form/site-form.component';
import { FacilityFormComponent } from './facility-form/facility-form.component';
import { LocationFormComponent } from './location-form/location-form.component';

@NgModule({
  declarations: [LocationsComponent, FacilityComponent, SiteComponent, LocationComponent, SiteFormComponent, FacilityFormComponent, LocationFormComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    SharedModule,
    LayoutContainersModule,
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class LocationsModule { }
