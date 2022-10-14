import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleViaje1PageRoutingModule } from './detalle-viaje1-routing.module';

import { DetalleViaje1Page } from './detalle-viaje1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleViaje1PageRoutingModule
  ],
  declarations: [DetalleViaje1Page]
})
export class DetalleViaje1PageModule {}
