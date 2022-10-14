import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comuna } from './comuna';

@Injectable({
  providedIn: 'root'
})
export class ComunabdService {
  public database: SQLiteObject;
  //***COMUNA***
  tablaComuna: string = "CREATE TABLE IF NOT EXISTS comuna(id_comuna INTEGER PRIMARY KEY autoincrement , nombre_comuna VARCHAR(50) NOT NULL);";
  registroComuna: string = "INSERT or IGNORE INTO comuna(id_comuna,nombre_comuna) VALUES (1,'Quilicura');";
  registroComuna2: string = "INSERT or IGNORE INTO comuna(id_comuna,nombre_comuna) VALUES (2,'Conchalí');";
  registroComuna3: string = "INSERT or IGNORE INTO comuna(id_comuna,nombre_comuna) VALUES (3,'Maipu');";
  registroComuna4: string = "INSERT or IGNORE INTO comuna(id_comuna,nombre_comuna) VALUES (4,'Santiago Centro');";
  registroComuna5: string = "INSERT or IGNORE INTO comuna(id_comuna,nombre_comuna) VALUES (5,'El Bosque');";

  listaComuna = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) {
    this.crearBD();
  }

  dbState() {
    return this.isDBReady.asObservable();
  }
  fetchComuna(): Observable<Comuna[]> {
    return this.listaComuna.asObservable();
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
      await this.database.executeSql(this.tablaComuna, []);
      await this.database.executeSql(this.registroComuna, []);
      await this.database.executeSql(this.registroComuna2, []);
      await this.database.executeSql(this.registroComuna3, []);
      await this.database.executeSql(this.registroComuna4, []);
      await this.database.executeSql(this.registroComuna5, []);

      this.buscarComuna();
      this.isDBReady.next(true);
      this.presentToast("tabla final");
    } catch (e) {
      this.presentToast("Error Tablas: " + e);
    }
  }
  buscarComuna() {
    return this.database.executeSql('SELECT * FROM comuna', []).then(res => {
      let items: Comuna[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idComuna: res.rows.item(i).id_comuna,
            nombreComuna: res.rows.item(i).nombre_comuna,
          })
        }
      }
      this.listaComuna.next(items);
    })
  }
}