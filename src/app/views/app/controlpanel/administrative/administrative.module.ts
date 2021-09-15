import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeComponent } from './administrative.component';
import { AdministrativeRoutingModule } from './administrative.routing';
import { SharedModule } from '../../../../shared/shared.module';
import { LayoutContainersModule } from '../../../../containers/layout/layout.containers.module';



@NgModule({
  declarations: [AdministrativeComponent ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class AdministrativeModule { }
