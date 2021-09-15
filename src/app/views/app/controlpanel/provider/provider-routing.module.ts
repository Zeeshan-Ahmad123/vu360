import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider.component';

const routes: Routes = [
  {
      path: '', component: ProviderComponent,
      children: [
          { path: '', redirectTo: 'Locations', pathMatch: 'full' },
          { path: 'Locations', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule) },
          
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
