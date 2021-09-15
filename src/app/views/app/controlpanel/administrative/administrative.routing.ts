import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrativeComponent } from './administrative.component';



const routes: Routes = [
    {
        path: '', component: AdministrativeComponent,
        children: [
            
            { path: '', redirectTo: 'RolePriviliges', pathMatch: 'full' },
            { path: 'RolePriviliges', loadChildren: () => import('./role-privileges/role-privileges.module').then(m => m.RolePrivilegesModule) },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrativeRoutingModule { }
