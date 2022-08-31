import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage implements OnInit {

  item: any ={
    pic: "assets/vidal.png",
    pic2: "assets/car1.jpg"
  }

  constructor() { }

  ngOnInit() {
  }

}
