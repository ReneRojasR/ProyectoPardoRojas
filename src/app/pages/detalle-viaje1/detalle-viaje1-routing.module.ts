import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleViaje1Page } from './detalle-viaje1.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleViaje1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleViaje1PageRoutingModule {}
