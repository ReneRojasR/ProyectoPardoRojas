import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {

  u: string = "";
  c: string = "";
  m: string = "enrique.mallea@duocuc.cl";
  n: string = "76401965";
  s: string = "Plaza Norte";
  v: string = "---";  

  item: any ={
    pic: "assets/profile.png"
  }

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.u = this.router.getCurrentNavigation().extras.state.usu;
        this.c = this.router.getCurrentNavigation().extras.state.contra;
        this.v = this.router.getCurrentNavigation().extras.state.vehiculo;
        this.m = this.router.getCurrentNavigation().extras.state.mail;
        this.n = this.router.getCurrentNavigation().extras.state.num;
        this.s = this.router.getCurrentNavigation().extras.state.sede1;
      }
      let navigationExtras: NavigationExtras = {
        state: {
          vehiculo:this.v,
          mail:this.m,
          num:this.n,
          sede1:this.s
        }
      }
      this.router.navigate(['main-menu/misdatos'],navigationExtras);
    })
   }

   segmentChanged($event){
    let direccion = $event.detail.value;
    this.router.navigate(['main-menu/' + direccion]);
  }

  ngOnInit() {
  }

}
