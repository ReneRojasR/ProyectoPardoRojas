import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss'],
})
export class ViajeComponent implements OnInit {

  sede: string;
  destino: string;
  precio: string; 

  constructor(private router: Router, private alertController: AlertController) { }


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
        price:this.precio
      }
    }
    let prec = /[QWERTYUIOPASDFGHJKLÑZXCVBNM]/
    let prec2 = /[qwertyuiopasdfghjklñzxcvbnm]/

    if(!this.sede || !this.destino){
      this.presentAlert();
    }
    else if(prec2.test(this.precio)){
       this.presentAlert1();
    }
    else if(prec.test(this.precio)){
      this.presentAlert1();
   }
    else{
      this.router.navigate(['/resultados'], navigationExtras);
    }
  }
  
  ngOnInit() {}

}
