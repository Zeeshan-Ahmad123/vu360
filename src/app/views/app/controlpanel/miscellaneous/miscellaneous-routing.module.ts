import { MiscellaneousComponent } from './miscellaneous.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '', component: MiscellaneousComponent,
      children: [
          { path: '', redirectTo: 'CountryStateCity', pathMatch: 'full' },
          { path: 'CountryStateCity', loadChildren: () => import('./country-state-city/country-state-city.module').then(m => m.CountryStateCityModule) },
          
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousRoutingModule { }
