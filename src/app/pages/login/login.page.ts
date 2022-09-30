import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  item: any = {
    pic: "assets/waypoint.png"
  }

  constructor(public toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Inicio de sesión exitoso',
      duration: 500
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
  admin(){
    let navigationExtras: NavigationExtras = {}
    this.presentToast();
    this.router.navigate(['/admin'], navigationExtras);
  }

  validar() {
    let navigationExtras: NavigationExtras = {}
    this.presentToast();
    this.router.navigate(['/main-menu'], navigationExtras);
  }
}
