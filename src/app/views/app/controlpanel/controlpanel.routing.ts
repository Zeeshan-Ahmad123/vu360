import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './controlpanel.component';




const routes: Routes = [
    {
        path: '', component: ControlPanelComponent,
        children: [
            { path: '', redirectTo: 'Administrative', pathMatch: 'full' },
            { path: 'Administrative', loadChildren: () => import('./administrative/administrative.module').then(m => m.AdministrativeModule) },
            { path: 'Provider', loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule) },
            { path: 'Miscellaneous', loadChildren: () => import('./miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule) },

            // Added By Kashif According to database
            { path: 'Locations', loadChildren: () => import('./provider/locations/locations.module').then(m => m.LocationsModule) },
            { path: 'Country, State, City', loadChildren: () => import('./miscellaneous/country-state-city/country-state-city.module').then(m => m.CountryStateCityModule) },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ControlPanelRoutingModule { }
