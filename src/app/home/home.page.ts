import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: string = "Desconocido";
  clave: string = "";

  constructor() {}

  
  item: any = {
    imagen:"",
    icono:"",
  }
}
