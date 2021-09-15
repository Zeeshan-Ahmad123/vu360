import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolePrivilegesComponent } from './role-privileges.component';
import { RolePrivilegesRoutingModule } from './role-privileges-routing.module';
import { RolePrivilegeComponent } from './role-privilege/role-privilege.component';
import { FormPrivilegeComponent } from './form-privilege/form-privilege.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { LayoutContainersModule } from '../../../../../containers/layout/layout.containers.module';



@NgModule({
  declarations: [RolePrivilegesComponent, RolePrivilegeComponent, FormPrivilegeComponent],
  imports: [
    CommonModule,
    RolePrivilegesRoutingModule,
    SharedModule,
    LayoutContainersModule
  ],

})

export class RolePrivilegesModule { }
