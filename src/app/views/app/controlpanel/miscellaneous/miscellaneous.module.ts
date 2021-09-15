import { MiscellaneousComponent } from './miscellaneous.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { LayoutContainersModule } from '../../../../containers/layout/layout.containers.module';


@NgModule({
  declarations: [MiscellaneousComponent],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class MiscellaneousModule { }
