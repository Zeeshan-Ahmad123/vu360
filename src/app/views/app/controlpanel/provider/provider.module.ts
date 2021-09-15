import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';
import { SharedModule } from '../../../../shared/shared.module';
import { LayoutContainersModule } from '../../../../containers/layout/layout.containers.module';



@NgModule({
  declarations: [ProviderComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class ProviderModule { }
