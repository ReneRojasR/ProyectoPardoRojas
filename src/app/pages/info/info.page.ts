import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  
  p: string = "";
  d: string = "";
  s: string = "";
  h: string= "";
  am:string= "";
  a:string="";

  item: any ={
    pic: "assets/profile.png"
  }

  constructor(private router: Router, private activedRouter: ActivatedRoute) { 
    this.activedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.a = this.router.getCurrentNavigation().extras.state.asiento;
        this.am = this.router.getCurrentNavigation().extras.state.am;
        this.s = this.router.getCurrentNavigation().extras.state.sede;
        this.d = this.router.getCurrentNavigation().extras.state.destiny;
        this.p = this.router.getCurrentNavigation().extras.state.price;
        this.h = this.router.getCurrentNavigation().extras.state.hour;
      }
    })
  }

  ngOnInit() {
  }

}
