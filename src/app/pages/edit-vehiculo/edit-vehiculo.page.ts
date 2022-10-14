import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AppbdService } from '../../services/appbd.service';

@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.page.html',
  styleUrls: ['./edit-vehiculo.page.scss'],
})
export class EditVehiculoPage implements OnInit {
  item: any = {
    pic: "assets/maquin.jpg"
  }

  vehi: string;
  asientos: string;
  correo: string;
  numero: string;
  sede: string;
  patente: string;
  marca = '';

  arreglo: any = [
    {
      id_marca: '',
      nombre_marca: ''
    }
  ]
  constructor(private servicioBD: AppbdService, public toastController: ToastController, private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) {}
  //******************BD******************//
  async ngOnInit() {
    this.servicioBD.dbState().subscribe(res => {
      if (res) {
        this.servicioBD.fetchMarca().subscribe(res => {
          this.arreglo = res;
        })
      }
    })
  }
  //******************BD******************//

  //************************************************************************/
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
      subHeader: 'Ningun campo puede quedar vacio',
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
  validar() {
    let navigationExtras: NavigationExtras = {
      state: {
        vehiculo: this.vehi,
      }
    }
    let pat = /[QWERTYUIOPASDFGHJKLÑZXCVBNM]/
    let pat2 = /[1234567890]/
    let pat3 = /[qwertyuiopasdfghjklñzxcvbnm]/
    if (!this.vehi || !this.patente) {
      this.presentAlert();
    }
    else if (!pat.test(this.patente)) {
      this.presentAlert1();
    }
    else if (!pat2.test(this.patente)) {
      this.presentAlert1();
    }
    else if (pat3.test(this.patente)) {
      this.presentAlert1();
    }
    else if (this.patente.length != 6) {
      this.presentAlert1();
    }
    else if (!this.marca || !this.asientos) {
      this.presentAlert();
    }
    else {
      this.presentToast();
      this.router.navigate(['/main-menu'], navigationExtras);
    }
  }
}