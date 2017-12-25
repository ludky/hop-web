import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {HopApiService} from "./hop-api.service";
import {AddReservationModule} from '../add-reservation/add-reservation.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    IonicModule,
    HomeRoutingModule,
    AddReservationModule
  ],
  entryComponents: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HopApiService
  ]
})
export class HomeModule { }
