import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Marca } from './marca';
import { Usuariobd } from './usuariobd';

@Injectable({
  providedIn: 'root'
})
export class AppbdService {
  public database: SQLiteObject;
  //***MARCA***
  tablaMarca: string = "CREATE TABLE IF NOT EXISTS marca(id_marca INTEGER PRIMARY KEY , nombre_marca VARCHAR(40) NOT NULL);";
  registrandoMarca: string = "INSERT or IGNORE INTO marca(nombre_marca) VALUES (TOYOTA);";
  registrandoMarca2: string = "INSERT or IGNORE INTO marca(nombre_marca) VALUES (PUEGOT);";
  registrandoMarca3: string = "INSERT or IGNORE INTO marca(nombre_marca) VALUES (SUZUKI);";
  registrandoMarca4: string = "INSERT or IGNORE INTO marca(nombre_marca) VALUES (VOLVO);";
  registrandoMarca5: string = "INSERT or IGNORE INTO marca(nombre_marca) VALUES (HYUNDAI);";
  //CADA SELECT LLEVA FETCH
  listaMarca = new BehaviorSubject([]);

  //***ROL***
  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY , nombre_rol VARCHAR(20) NOT NULL);";
  //REGISTRO
  registrandoRol: string = "INSERT or IGNORE INTO rol(nombre_rol) VALUES (Administrador);";
  registrandoRol2: string = "INSERT or IGNORE INTO rol(nombre_rol) VALUES (Usuario);";
  //CADA SELECT LLEVA FETCH
  listaRol = new BehaviorSubject([]);

  //***COMUNA***
  tablaComuna: string = "CREATE TABLE IF NOT EXISTS comuna(id_comuna INTEGER PRIMARY KEY , nombre_comuna VARCHAR(50) NOT NULL);";
  registrandoComuna: string = "INSERT or IGNORE INTO comuna(nombre_comuna) VALUES (Quilicura);";
  registrandoComuna2: string = "INSERT or IGNORE INTO comuna(nombre_comuna) VALUES (Conchalí);";
  registrandoComuna3: string = "INSERT or IGNORE INTO comuna(nombre_comuna) VALUES (Maipu);";
  registrandoComuna4: string = "INSERT or IGNORE INTO comuna(nombre_comuna) VALUES (Santiago Centro);";
  registrandoComuna5: string = "INSERT or IGNORE INTO comuna(nombre_comuna) VALUES (El Bosque);";
  listaComuna = new BehaviorSubject([]);

  //***USUARIO***
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY , rut VARCHAR(10) NOT NULL, nombre VARCHAR(50) NOT NULL, apellidos VARCHAR(50) NOT NULL, correo VARCHAR(100) NOT NULL, clave VARCHAR(25) NOT NULL, CONSTRAINT ROL_id_rol FOREIGN KEY (id_rol) REFERENCES rol(id_rol) );";
  registrandoUsuario: string = "INSERT or IGNORE INTO usuario(rut,nombre,apellidos,correo,clave,ROL_id_rol) VALUES (19707987-8,René,Rojas Robles,rene@admin.cl,rene111,1);"
  listaUsuario = new BehaviorSubject([]);
 
  //***AUTO***
  tablaAuto: string = "CREATE TABLE IF NOT EXISTS auto(patente_auto INTEGER PRIMARY KEY , marca VARCHAR(40) NOT NULL, modelo VARCHAR(40) NOT NULL, anio INTEGER NOT NULL, CONSTRAINT USUARIO_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario), CONSTRAINT MARCA_id_marca FOREIGN KEY (id_marca) REFERENCES marca(id_marca) );";
  listaAuto = new BehaviorSubject([]);
  
  //***VIAJE***
  tablaViaje:  "CREATE TABLE IF NOT EXISTS viaje(id_viaje INTEGER PRIMARY KEY , fecha_viaje DATE NOT NULL, hora_salida DATE_TIME NOT NULL, asientos_dispo INTEGER NOT NULL,  monto INTEGER NOT NULL,  CONSTRAINT AUTO_patente FOREIGN KEY (patente_auto) REFERENCES auto(patente_auto) );";
  listaViaje = new BehaviorSubject([]);

  //***VIAJE_COMUNA***
  tablaViajeComuna:"CREATE TABLE IF NOT EXISTS viaje_comuna(id_vc INTEGER PRIMARY KEY, CONSTRAINT VIAJE_id_viaje FOREIGN KEY (id_viaje) REFERENCES viaje(id_viaje), CONSTRAINT COMUNA_id_comuna FOREIGN KEY (id_comuna) REFERENCES comuna(id_comuna) );";
  listaViajeComuna = new BehaviorSubject([]);

  //***DETALLE_VIAJE*** 
  tablaDetalleViaje:"CREATE TABLE IF NOT EXISTS detalle_viaje(id_detalle INTEGER PRIMARY KEY, status BOOLEAN NOT NULL, CONSTRAINT VIAJE_id_viaje FOREIGN KEY (id_viaje) REFERENCES viaje(id_viaje), CONSTRAINT USUARIO_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) );";
  listaDetalleViaje = new BehaviorSubject([]);


  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController) { 
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

  fetchMarca(): Observable<Usuariobd[]> {
    return this.listaMarca.asObservable();
  }

  fetchComuna(): Observable<Usuariobd[]> {
    return this.listaComuna.asObservable();
  }

  fetchUsuario(): Observable<Usuariobd[]> {
    return this.listaUsuario.asObservable();
  }

  fetchAuto(): Observable<Usuariobd[]> {
    return this.listaAuto.asObservable();
  }

  fetchViajeComuna(): Observable<Usuariobd[]> {
    return this.listaViajeComuna.asObservable();
  }

  fetchDetalleViaje(): Observable<Usuariobd[]> {
    return this.  listaDetalleViaje
    .asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'bdviajes.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //this.crearTablas(); // Crear la funcion de abajo para crear las tablas. 
      }).catch(e => {
        this.presentToast("Error BD:" + e);
      })
    })
  }

  async crearTablas() {
   try {
      //marca
      await this.database.executeSql(this.tablaMarca, []);
      await this.database.executeSql(this.registrandoMarca, []);
      await this.database.executeSql(this.registrandoMarca2, []);
      await this.database.executeSql(this.registrandoMarca3, []);
      await this.database.executeSql(this.registrandoMarca4, []);
      await this.database.executeSql(this.registrandoMarca5, []);
      
      //rol
      await this.database.executeSql(this.tablaRol, []);
      await this.database.executeSql(this.registrandoRol, []);
      await this.database.executeSql(this.registrandoRol2, []);
     
      //comuna
      await this.database.executeSql(this.tablaComuna, []);
      await this.database.executeSql(this.registrandoComuna, []);
      await this.database.executeSql(this.registrandoComuna2, []);
      await this.database.executeSql(this.registrandoComuna3, []);
      await this.database.executeSql(this.registrandoComuna4, []);
      await this.database.executeSql(this.registrandoComuna5, []);
     
      //usuario
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.registrandoUsuario, []);

      //auto
      await this.database.executeSql(this.tablaAuto, []);
      
      //viaje
      await this.database.executeSql(this.tablaViaje, []);
     
      //viaje-comuna
      await this.database.executeSql(this.tablaViajeComuna, []);

      //detalle-viaje
      await this.database.executeSql(this.tablaDetalleViaje, []);     
     
      //this.funcionTabla();
      this.isDBReady.next(true);
    } catch (e) {
      this.presentToast("Error Tablas: " + e);
    }

  }
  //AQUI SE CREA LA TABLA, CREAR LOS DATOS CON VARABLES


  //FUNCIONES
    //***MARCAS***
  buscarMarcas() {
    return this.database.executeSql('SELECT idMarca FROM marca', []).then(res => {
      let items: Marca[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idMarca: res.rows.item(i).id_marca,
            nombreMarca: res.rows.item(i).nombre_marca
          })
        }
      }
      this.listaMarca.next(items);
    })
  }
  insertarMarcas(nombre_marcas){
    let datacar = [nombre_marcas];
    return this.database.executeSql('INSERT INTO auto(nombre_marcas) VALUES (?)',datacar).then(res=>{
      this.buscarMarcas();
    });
  }
  //Cambiar la sentencia SQL para cambiar la funcionque realiza, tambien cambiar el nombre.


}