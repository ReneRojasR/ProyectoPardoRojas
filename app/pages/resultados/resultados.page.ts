import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  item: any ={
    pic: "assets/vidal.png"
  }

  constructor() { }

  ngOnInit() {
  }

}
