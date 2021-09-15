import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './controlpanel.component';
import { ControlPanelRoutingModule } from './controlpanel.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';



@NgModule({
  declarations: [ControlPanelComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class ControlPanelModule { }
