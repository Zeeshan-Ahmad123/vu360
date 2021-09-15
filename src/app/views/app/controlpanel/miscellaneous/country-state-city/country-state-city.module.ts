import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { CountryComponent } from './country/country.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryStateCityComponent } from './country-state-city.component';
import { CountryStateCityRoutingModule } from './country-state-city-routing.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { LayoutContainersModule } from '../../../../../containers/layout/layout.containers.module';
import { CountryFormComponent } from './country-form/country-form.component';
import { StateFormComponent } from './state-form/state-form.component';
import { CityFormComponent } from './city-form/city-form.component';


@NgModule({
  declarations: [CountryStateCityComponent, CountryComponent, StateComponent, CityComponent, CountryFormComponent, StateFormComponent, CityFormComponent],
  imports: [
    CommonModule,
    CountryStateCityRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class CountryStateCityModule { }
