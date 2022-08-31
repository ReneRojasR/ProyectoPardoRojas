import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.page.html',
  styleUrls: ['./edit-perfil.page.scss'],
})
export class EditPerfilPage implements OnInit {
  item: any ={
    pic: "assets/profile.png"
  }
  correo: string;
  sede: string;
  numero: string;
  vehiculo: string;


  constructor(public toastController: ToastController, private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cambio exitoso!',
      duration: 2000
    });
    toast.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Usuario invalido',
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
  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Numero incorrecto',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });
    await alert.present();
  }
  validar(){
    let navigationExtras: NavigationExtras = {
      state: {
        mail:this.correo,
        num:this.numero,
        sede1:this.sede,
        vehiculo:this.vehiculo
      }
    }
    let re = /@duocuc.cl/;
    let num = /^[0-9]*$/
 
    if(re.test(this.correo)==false){
      this.presentAlert();
    }
    else if(this.correo.length<14){
      this.presentAlert();
    }
    else if (!this.sede){
      this.presentAlert1();
    }
    else if(num.test(this.numero)==false){
      this.presentAlert3();
    }
    else if(this.numero.length!=8){
      this.presentAlert3();
    }
    else{
      this.presentToast();
      this.router.navigate(['/info'], navigationExtras);
    }
  }
}
