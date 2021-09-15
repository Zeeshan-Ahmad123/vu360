import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';
import { JwtModule } from '@auth0/angular-jwt';
export function TokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule,
    JwtModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: TokenGetter,
        allowedDomains: ["localhost:44333"],
        disallowedRoutes: [],
      }

    }),
    //AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
