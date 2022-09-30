import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  correo: string;
  numero: string;
  sede: string;
  clave1: string;
  clave2: string;

  constructor(public toastController: ToastController, private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro exitoso!',
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
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Tiene que seleccionar alguna sede',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Las contraseñas deben ser iguales',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Numero incorrecto',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'La contraseña debe tener al menos una mayuscula, un numero, y un minimo de 8 caracteres',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });
    await alert.present();
  }

  validar(){
    let navigationExtras: NavigationExtras = {
      state: {
        mail:this.correo,
        contra:this.clave1,
        num:this.numero,
        sede1:this.sede
      }
    }
    let re = /@duocuc.cl/;
    let num = /^[0-9]*$/
    let recontra = /[QWERTYUIOPASDFGHJKLÑZXCVBNM]/
    let repass = /[1234567890]/
 
    if(re.test(this.correo)==false){
      this.presentAlert();
    }
    else if(!this.clave1){
      this.presentAlert();
    }
    else if(this.correo.length<14){
      this.presentAlert();
    }
    else if(this.clave1.length<8){
      this.presentAlert4();
    }
    else if (!this.sede){
      this.presentAlert1();
    }
    else if(this.clave1!=this.clave2){
      this.presentAlert2();
    }
    else if(num.test(this.numero)==false){
      this.presentAlert3();
    }
    else if(!recontra.test(this.clave1)){
      this.presentAlert4();
    }
    else if(!repass.test(this.clave1)){
      this.presentAlert4();
    }
    else if(this.numero.length!=8){
      this.presentAlert3();
    }
    else{
      this.presentToast();
      this.router.navigate(['/main-menu'], navigationExtras);
    }
  }
}