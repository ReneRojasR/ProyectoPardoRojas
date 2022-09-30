import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {


  constructor(private router: Router,public toastController: ToastController) { }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Correo enviado!',
      duration: 2000
    });
    toast.present();
  }

  enviar(){
    this.presentToast();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
