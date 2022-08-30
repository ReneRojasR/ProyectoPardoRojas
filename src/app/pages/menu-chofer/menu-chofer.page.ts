import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-chofer',
  templateUrl: './menu-chofer.page.html',
  styleUrls: ['./menu-chofer.page.scss'],
})
export class MenuChoferPage implements OnInit {

  constructor(private router: Router) {
    this.router.navigate(['home/perfil']);
  }

  segmentChanged($event){
    let direccion = $event.detail.value;
    //console.log(direccion);
    this.router.navigate(['perfil/' + direccion]);
  }

  ngOnInit() {
  }

}
