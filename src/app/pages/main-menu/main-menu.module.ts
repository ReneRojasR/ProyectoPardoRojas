import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMenuPageRoutingModule } from './main-menu-routing.module';

import { MainMenuPage } from './main-menu.page';
import { MisdatoscComponent } from 'src/app/components/misdatosc/misdatosc.component';
import { ViajeComponent } from 'src/app/components/viaje/viaje.component';
import { MapaComponent } from 'src/app/components/mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMenuPageRoutingModule
  ],
  declarations: [MainMenuPage,MisdatoscComponent,MapaComponent,ViajeComponent]
})
export class MainMenuPageModule {}
