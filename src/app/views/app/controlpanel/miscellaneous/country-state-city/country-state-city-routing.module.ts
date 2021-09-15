import { CityFormComponent } from './city-form/city-form.component';
import { StateFormComponent } from './state-form/state-form.component';
import { CountryFormComponent } from './country-form/country-form.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { CountryStateCityComponent } from './country-state-city.component';
import { CountryComponent } from './country/country.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '', component: CountryStateCityComponent,
      children: [
          { path: '', redirectTo: 'Country', pathMatch: 'full' },
          { path: 'Country', component: CountryComponent },
          { path: 'CountryForm', component: CountryFormComponent },
          { path: 'State', component: StateComponent },
          { path: 'StateForm', component: StateFormComponent },
          { path: 'City', component: CityComponent },
          { path: 'CityForm', component: CityFormComponent },
          
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryStateCityRoutingModule { }
