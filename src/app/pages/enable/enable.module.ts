import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnablePageRoutingModule } from './enable-routing.module';

import { EnablePage } from './enable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnablePageRoutingModule
  ],
  declarations: [EnablePage]
})
export class EnablePageModule {}
