import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage implements OnInit {

  item: any ={
    pic: "assets/vidal.png",
    pic2: "assets/car1.jpg"
  }
  p: string;

  constructor(public toastController: ToastController,private router: Router,private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.p = this.router.getCurrentNavigation().extras.state.precio;
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Asiento reservado!',
      duration: 2000
    });
    toast.present();
  }
  alerta(){
    this.presentToast();
  }
  ngOnInit() {
  }

}
