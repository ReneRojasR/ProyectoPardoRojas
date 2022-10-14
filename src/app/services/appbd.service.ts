import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comuna } from './comuna';
import { DetalleViaje } from './detalle-viaje';
import { Marca } from './marca';
import { ViajeComuna } from './viaje-comuna';
@Injectable({
  providedIn: 'root'
})
export class AppbdService {
  public database: SQLiteObject;
  //*****************************MARCA*****************************//
  marca: string = "CREATE TABLE IF NOT EXISTS marca(marca_id INTEGER PRIMARY KEY autoincrement , marca_nombre VARCHAR2(40) NOT NULL);";
  registroMarca: string = "INSERT or IGNORE INTO marca(marca_id,marca_nombre) VALUES (1,'TOYOTA');";
  registroMarca2: string = "INSERT or IGNORE INTO marca(marca_id,marca_nombre) VALUES (2,'PUEGOT');";
  registroMarca3: string = "INSERT or IGNORE INTO marca(marca_id,marca_nombre) VALUES (3,'SUZUKI');";
  registroMarca4: string = "INSERT or IGNORE INTO marca(marca_id,marca_nombre) VALUES (4,'VOLVO');";
  registroMarca5: string = "INSERT or IGNORE INTO marca(marca_id,marca_nombre) VALUES (5,'HYUNDAI');";

  listaMarca = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController,private alertController: AlertController) {
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
  fetchMarca(): Observable<Marca[]> {
    return this.listaMarca.asObservable();
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
      await this.database.executeSql(this.marca, []);
      await this.database.executeSql(this.registroMarca, []);
      await this.database.executeSql(this.registroMarca2, []);
      await this.database.executeSql(this.registroMarca3, []);
      await this.database.executeSql(this.registroMarca4, []);
      await this.database.executeSql(this.registroMarca5, []);

      this.buscarMarcas();
      this.isDBReady.next(true);
      this.presentToast("tabla final");
    } catch (e) {
      this.presentToast("Error Tablas: " + e); 
    }
  }
  buscarMarcas() {
    return this.database.executeSql('SELECT * FROM marca', []).then(res => {
      let items: Marca[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_marca: res.rows.item(i).marca_id,
            nombre_marca: res.rows.item(i).marca_nombre,
          })
        }
      }
      this.listaMarca.next(items);
    })
  }
}