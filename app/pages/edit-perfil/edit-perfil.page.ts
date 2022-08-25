import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.page.html',
  styleUrls: ['./edit-perfil.page.scss'],
})
export class EditPerfilPage implements OnInit {
  item: any ={
    pic: "assets/profile.png"
  }

  constructor() { }

  ngOnInit() {
  }

}
