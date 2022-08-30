import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent implements OnInit {

  user: string = "";
  nivel: string = "";

  texto: string = "hola mundo";
  num: number = 2500;

  niveles: any[] = [
    {
      id: 1,
      nombre: 'Básica'
    },
    {
      id: 2,
      nombre: 'Media'
    },
    {
      id: 3,
      nombre: 'Universitaria'
    }
  ]
  
  constructor() { }

  ngOnInit() {}

}
