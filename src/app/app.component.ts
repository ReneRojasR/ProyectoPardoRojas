import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(protected platform: Platform, protected navController: NavController, public localStorage: NativeStorage,
  private geolocation: Geolocation) 
  {
    this.platform.ready().then(async () => {
      await this.localStorage.getItem;
      this.getGeolocation();
    });
  }

  getGeolocation(){

    this.geolocation.getCurrentPosition().then((resp) => {
    
      console.log("resp", resp);

      this.GeolService.locations[0].geometry.coordinates =[
        resp.coords.latitude,
        resp.coords.longitude
    ];

    
    }).catch((error) => {
     console.log('Error getting location', error);
    });
     
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }
}


