import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaCComponent } from 'src/app/components/mapa-c/mapa-c.component';
import { MisDatosCComponent } from 'src/app/components/mis-datos-c/mis-datos-c.component';

import { MenuChoferPage } from './menu-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: MenuChoferPage,
    children:[
      {
        path:'perfil',
        component: MisDatosCComponent

      },
      {
        path: 'mapaC',
        component: MapaCComponent
      },
      {
       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuChoferPageRoutingModule {}
