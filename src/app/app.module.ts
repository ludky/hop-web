import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import {ResetPasswordModule} from './reset-password/reset-password.module';
import {HttpClientModule} from '@angular/common/http';
import {AddReservationModule} from './add-reservation/add-reservation.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(AppComponent, {locationStrategy: 'path'}),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    LoginModule,
    ResetPasswordModule,
    AddReservationModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [IonicApp]
})
export class AppModule { }
