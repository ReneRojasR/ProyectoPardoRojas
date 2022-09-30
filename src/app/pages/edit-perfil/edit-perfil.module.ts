import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { IonicModule } from '@ionic/angular';

import { EditPerfilPageRoutingModule } from './edit-perfil-routing.module';

import { EditPerfilPage } from './edit-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPerfilPageRoutingModule,
    MatSelectModule
  ],
  declarations: [EditPerfilPage]
})
export class EditPerfilPageModule {}
