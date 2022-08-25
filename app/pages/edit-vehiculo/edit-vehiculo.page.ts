import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.page.html',
  styleUrls: ['./edit-vehiculo.page.scss'],
})
export class EditVehiculoPage implements OnInit {
  item: any ={
    pic: "assets/maquin.jpg"
  }


  constructor() { }

  ngOnInit() {
  }

}
