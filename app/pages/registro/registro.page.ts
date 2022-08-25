import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  correo: string;
  numero: string;
  sede: string;

  constructor(public toastController: ToastController, private router: Router) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro exitoso',
      duration: 2000
    });
    toast.present();
  }
  pasarDatos(){
    let navigationExtras: NavigationExtras = {
      state: {
        mail:this.correo,
        number:this.numero,
        sede1:this.sede
      }
    }
    this.presentToast();
    this.router.navigate(['/info'], navigationExtras);
  }
  ngOnInit() {
  }

}
