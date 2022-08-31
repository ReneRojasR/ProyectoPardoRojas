import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  sede: string;
  destino: string;

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

  validar(){
    let navigationExtras: NavigationExtras = {
      state: {
        sede:this.sede,
        destiny:this.destino,
      }
    }

    if(!this.sede || !this.destino){
      this.presentAlert();
    }
    else{
      this.router.navigate(['/resultados'], navigationExtras);
    }
  }

  ngOnInit() {
  }
}
