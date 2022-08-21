import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string;
  clave: string;

  constructor(public toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  pasarDatos(){
    let navigationExtras: NavigationExtras = {
      state: {
        usu:this.usuario,
        contra:this.clave
      }
    }
    this.router.navigate(['/main-menu'], navigationExtras);
  }

}
