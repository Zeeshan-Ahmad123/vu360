import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PracticeManagementComponent } from './practice-management/practice-management.component';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'Control Panel' },
            { path: 'Control Panel', loadChildren: () => import('./controlpanel/controlpanel.module')
            .then(m => m.ControlPanelModule),
            },
            { path: 'Registration', loadChildren: () => import('./registration/registration.module')
            .then(m => m.RegistrationModule),
            },
            { path: 'Practice-Management', component:PracticeManagementComponent },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
