import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  item: any = {
    pic: "assets/vidal.png"
  }
  p: string;
  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.p = this.router.getCurrentNavigation().extras.state.price;
      }
    });
  }
  pasar(){
    let navigationExtras: NavigationExtras = {
      state: {
        precio:this.p,
      }
    }
    this.router.navigate(['/perfil-conductor'], navigationExtras);
  }
  ngOnInit() {
  }

}
