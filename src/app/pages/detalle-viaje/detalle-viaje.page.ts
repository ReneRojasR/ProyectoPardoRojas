import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ViajebdService } from '../../services/viajebd.service';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {
  arreglo: any = [
    {
      idViaje: '',
      destino: '',
      horaSalida: '',
      asientosDisponible: '',
      montoViaje: '',
    }
  ]
  constructor(private servicioBD: ViajebdService, public toastController: ToastController, private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) { }
  
  async ngOnInit() {
    this.servicioBD.dbState().subscribe(res => {
      if (res) {
        this.servicioBD.fetchViaje().subscribe(res => {
          this.arreglo = res;
        })
      }
    })
  }
}
