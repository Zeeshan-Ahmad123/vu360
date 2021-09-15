import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPrivilegeComponent } from './form-privilege/form-privilege.component';
import { RolePrivilegeComponent } from './role-privilege/role-privilege.component';
import { RolePrivilegesComponent } from './role-privileges.component';

const routes: Routes = [
  {
      path: '', component: RolePrivilegesComponent,
      children: [
          { path: '', redirectTo: 'RolePrivilege', pathMatch: 'full' },
          { path: 'RolePrivilege', component: RolePrivilegeComponent },
          { path: 'FormPrivilege', component: FormPrivilegeComponent },

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolePrivilegesRoutingModule { }
