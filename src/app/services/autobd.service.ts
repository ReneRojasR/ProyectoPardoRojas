import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Autobd } from './autobd';

@Injectable({
  providedIn: 'root'
})
export class AutobdService {
  public database: SQLiteObject;
  //*****************************AUTO*****************************//
  autoTabla: string = "CREATE TABLE IF NOT EXISTS autobd(patente VARCHAR(10) PRIMARY KEY autoincrement , modelo VARCHAR(20) NOT NULL, year INTEGER NOT NULL );";
  registroAuto: string = "INSERT or IGNORE INTO autobd(patente,modelo,year) VALUES ('AS QW 12','F250',2077);";

  //usuario_id INTEGER,marca INTEGER, FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario), FOREIGN KEY (marca) REFERENCES marca(marca_nombre)

  listaAuto = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) {
    this.crearBD();
  }
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      icon: 'globe'
    });
    await toast.present();
  }
  dbState() {
    return this.isDBReady.asObservable();
  }
  fetchAuto(): Observable<Autobd[]> {
    return this.listaAuto.asObservable();
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
      await this.database.executeSql(this.autoTabla, []);
      await this.database.executeSql(this.registroAuto, []);

      this.buscarAuto();
      this.isDBReady.next(true);
      this.presentToast("tabla final");
    } catch (e) {
      this.presentToast("Error Tablas: " + e);
    }
  }

  buscarAuto() {
    return this.database.executeSql('SELECT * FROM autobd', []).then(res => {
      let items: Autobd[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            patenteAuto: res.rows.item(i).patente,
            modeloAuto: res.rows.item(i).modelo,
            yearAuto: res.rows.item(i).year
            //user_id: res.rows.item(i).usuario_id,
            //marca: res.rows.item(i).marca,
          })
        }
      }
      this.listaAuto.next(items);
    })
  }
}