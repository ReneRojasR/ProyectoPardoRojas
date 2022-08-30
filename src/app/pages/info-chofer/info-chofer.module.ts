import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoChoferPageRoutingModule } from './info-chofer-routing.module';

import { InfoChoferPage } from './info-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoChoferPageRoutingModule
  ],
  declarations: [InfoChoferPage]
})
export class InfoChoferPageModule {}
