import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {

  u: string = "";
  c: string = "";

  item: any ={
    pic: "assets/profile.png"
  }

  constructor(public toastController: ToastController ,private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.u = this.router.getCurrentNavigation().extras.state.usu;
        this.c = this.router.getCurrentNavigation().extras.state.contra;
      }
    })
   }

  ngOnInit() {
  }
  pasarDatos(){
    let navigationExtras: NavigationExtras = {
      state: {
        usu:this.u,
        contra:this.c
      }
    }
    this.router.navigate(['/info'], navigationExtras);
  }

}
