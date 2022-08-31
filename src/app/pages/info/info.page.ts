import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  
  m: string = "enrique.mallea@duocuc.cl";
  n: string = "9 7640 1965";
  s: string = "Plaza Norte";
  v: string = "---";  

  item: any ={
    pic: "assets/profile.png"
  }

  constructor(private router: Router, private activedRouter: ActivatedRoute) { 
    this.activedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.m = this.router.getCurrentNavigation().extras.state.mail;
        this.n = this.router.getCurrentNavigation().extras.state.num;
        this.s = this.router.getCurrentNavigation().extras.state.sede1;
        this.v = this.router.getCurrentNavigation().extras.state.vehiculo;
      }
    })
  }

  ngOnInit() {
  }

}
