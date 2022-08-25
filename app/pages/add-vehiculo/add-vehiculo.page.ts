import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.page.html',
  styleUrls: ['./add-vehiculo.page.scss'],
})
export class AddVehiculoPage implements OnInit {

  item: any ={
    pic: "assets/maquin.jpg"
  }

  constructor() { }

  ngOnInit() {
  }

}
