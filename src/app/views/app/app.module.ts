import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { PracticeManagementComponent } from './practice-management/practice-management.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [AppComponent, PracticeManagementComponent,RegistrationComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
  ]
})
export class AppModule { }

