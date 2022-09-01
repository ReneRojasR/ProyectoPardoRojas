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
  default1: string = "enrique.mallea@duocuc.cl";
  default2: string = "Sushicoreano1";

  item: any ={
    pic: "assets/waypoint.png"
  }

  constructor(public toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Inicio de sesión exitoso',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Usuario o contraseña invalido',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });

    await alert.present();
  }

  validar(){
    let navigationExtras: NavigationExtras = {
      state: {
        usu:this.usuario,
        contra:this.clave
      }
    }
    if(this.clave==this.default2 && this.usuario==this.default1){
      this.presentToast();
      this.router.navigate(['/main-menu'], navigationExtras);
    }
    else{
      this.presentAlert();
    }
  }
// 
}
