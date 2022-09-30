import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  sede: string;
  destino: string;
  asientos: string;
  precio: string;
  hora: string;
  horaM: string;
  
  constructor(public toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Viaje guardado de forma exitosa!',
      duration: 2000
    });
    toast.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'No puede quedar ningun campo vacio',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Formato incorrecto',
      message: 'Intente de nuevo',
      buttons: ['OK'],
    });
    await alert.present();
  }
  validar(){
    let navigationExtras: NavigationExtras = {
      state: {
        sede:this.sede,
        destiny:this.destino,
        asiento:this.asientos,
        price:this.precio,
        hour:this.hora,
        am:this.horaM
      }
    }
    let num = /^[0-9]*$/

    if(!this.sede || !this.asientos){
      this.presentAlert();
    }
    else if(!this.destino || !this.precio){
      this.presentAlert();
    }
    else if(!num.test(this.precio)){
      this.presentAlert1();
    }
    else if(!this.horaM){
      this.presentAlert();
    }
    else if(!this.hora){
      this.presentAlert();
    }
    else{
      this.presentToast();
      this.router.navigate(['/info'], navigationExtras);
    }
  }
}
