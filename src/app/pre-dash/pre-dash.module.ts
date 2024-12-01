import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreDashPageRoutingModule } from './pre-dash-routing.module';

import { PreDashPage } from './pre-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreDashPageRoutingModule
  ],
  declarations: [PreDashPage]
})
export class PreDashPageModule {}
