import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(protected platform: Platform, protected navController: NavController, public localStorage: NativeStorage ) 
  {
    this.platform.ready().then(async () => {
      await this.localStorage.setItem;
    });
  }


  
}


