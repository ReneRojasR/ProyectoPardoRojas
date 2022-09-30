import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnablePage } from './enable.page';

const routes: Routes = [
  {
    path: '',
    component: EnablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnablePageRoutingModule {}
