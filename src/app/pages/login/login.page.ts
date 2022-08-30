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

  item: any ={
    pic: "assets/waypoint.png"
  }

  constructor(public toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro exitoso',
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
    let re = /@duocuc.cl/;

    if(re.test(this.usuario)==false){
      this.presentAlert();
    }
    else if(!this.clave){
      this.presentAlert();
    }
    else if(this.usuario.length<14){
      this.presentAlert();
    }
    else if(this.clave.length<8){
      this.presentAlert();
    }
    else{
      this.presentToast();
      this.router.navigate(['/main-menu'], navigationExtras);
    }
  }
// ME QUIERON PURO MATAR HERMANO, ME DEMORÉ COMO 3 HORAS EN HACER LAS VALIDACIONES
}

  

