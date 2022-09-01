import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaCComponent } from 'app/components/mapa-c/mapa-c.component';
import { MisDatosComponent } from 'app/components/mis-datos/mis-datos.component';
import { MisdatoscComponent } from 'src/app/components/misdatosc/misdatosc.component';
import { ViajeComponent } from 'src/app/components/viaje/viaje.component';

import { MainMenuPage } from './main-menu.page';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPage,

    children:[
      {
        path:'misdatos',
        component: MisdatoscComponent

      },
      {
        path: 'mapa-c',
        component: MapaCComponent
      },
      {
        path: 'viaje',
        component: ViajeComponent
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuPageRoutingModule {}
