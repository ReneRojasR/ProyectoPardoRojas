import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { UsuariobdService } from '../../services/usuariobd.service';

@Component({
  selector: 'app-misdatosc',
  templateUrl: './misdatosc.component.html',
  styleUrls: ['./misdatosc.component.scss'],
})
export class MisdatoscComponent implements OnInit {

  arrelgoUser: any = [
    {
      idUsuario: '',
      nombre_Usuario: '',
      claveUsuario: '',
      sedeUsuario:'',
      //rolIdRol: '',
      state: '',
    }
  ]

  item: any = {
    pic: "assets/profile.png"
  }

  constructor(private servicioBD: UsuariobdService, public toastController: ToastController, private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) { }
  //******************BD******************//
  async ngOnInit() {
    this.servicioBD.dbState().subscribe(res => {
      if (res) {
        this.servicioBD.fetchUsuario().subscribe(res => {
          this.arrelgoUser = res;
        })
      }
    })
  }
}
