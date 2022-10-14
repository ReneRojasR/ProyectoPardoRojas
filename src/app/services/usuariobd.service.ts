import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuariobd } from './usuariobd';

@Injectable({
  providedIn: 'root'
})
export class UsuariobdService {
  public database: SQLiteObject;
  //*****************************USUARIO*****************************//
  usuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement , nombre VARCHAR(50) NOT NULL, clave VARCHAR(25) NOT NULL,sede VARCHAR(25) NOT NULL,estado INTEGER NOT NULL );";
  registroUsuario: string = "INSERT or IGNORE INTO usuario(id_usuario,nombre,clave,sede,estado) VALUES (1,'Rene Rojas','rene111','Plaza Norte',1);";

  //, rol_id INTEGER FOREIGN KEY (rol_id) REFERENCES rol(id_rol)
  //Rol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement , nombre_rol VARCHAR(20) NOT NULL);";
  //registroRol: string = "INSERT or IGNORE INTO rol(id_rol,nombre_rol) VALUES (1,'admin');"
  //registroRol2: string = "INSERT or IGNORE INTO rol(id_rol,nombre_rol) VALUES (2,'user');"

  listaUsuario = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) {
    this.crearBD();
  }

  dbState() {
    return this.isDBReady.asObservable();
  }
  fetchUsuario(): Observable<Usuariobd[]> {
    return this.listaUsuario.asObservable();
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
      await this.database.executeSql(this.usuario, []);
      await this.database.executeSql(this.registroUsuario, []);

      this.buscarUsuario();
      this.isDBReady.next(true);
      this.presentToast("tabla final");
    } catch (e) {
      this.presentToast("Error Tablas: " + e);
    }
  }
  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuariobd[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idUsuario: res.rows.item(i).id_usuario,
            nombre_Usuario: res.rows.item(i).nombre,
            claveUsuario: res.rows.item(i).clave,
            sedeUsuario: res.rows.item(i).sede,
            state: res.rows.item(i).estado,
            //rolIdRol: res.rows.item(i).rol_id
          })
        }
      }
      this.listaUsuario.next(items);
    })
  }
}