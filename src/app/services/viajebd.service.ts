import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Viaje } from './viaje';
@Injectable({
  providedIn: 'root'
})
export class ViajebdService {
  public database: SQLiteObject;
  //***VIAJE***
  viaje: "CREATE TABLE IF NOT EXISTS viaje(id_viaje INTEGER PRIMARY KEY autoincrement , destino_viaje VARCHAR(50) NOT NULL, hora_salida INTEGER NOT NULL, asientos_dispo INTEGER NOT NULL,  monto INTEGER NOT NULL);";
  registroViaje: string = "INSERT or IGNORE INTO viaje(id_viaje,destino,hora_salida,asientos_dispo,monto) VALUES (1,'Mapocho',0100,2,1000);";
  //auto_patente VARCHAR(8) FOREIGN KEY (auto_patente) REFERENCES auto(patente_auto)
  listaViaje = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController) {
    this.crearBD();
  }
  dbState() {
    return this.isDBReady.asObservable();
  }
  fetchViaje(): Observable<Viaje[]> {
    return this.listaViaje.asObservable();
  }
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      icon: 'globe'
    });
    await toast.present();
  }
  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'test2.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      }).catch(e => {
        this.presentToast("Error BD:" + e);
      })
    })
  }
  async crearTablas() {
    try {
      await this.database.executeSql(this.viaje, []);
      await this.database.executeSql(this.registroViaje, []);

      this.buscarViaje();
      this.isDBReady.next(true);
      this.presentToast("tabla final");
    } catch (e) {
      this.presentToast("Error Tablas: " + e);
    }
  }
  buscarViaje() {
    return this.database.executeSql('SELECT * FROM viaje', []).then(res => {
      let items: Viaje[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idViaje: res.rows.item(i).id_viaje,
            destino: res.rows.item(i).destino_viaje,
            horaSalida: res.rows.item(i).hora_salida,
            asientosDisponible: res.rows.item(i).asientos_dispo,
            montoViaje: res.rows.item(i).monto,
          })
        }
      }
      this.listaViaje.next(items);
    })
  }
}