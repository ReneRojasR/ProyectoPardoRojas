import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enable',
  templateUrl: './enable.page.html',
  styleUrls: ['./enable.page.scss'],
})
export class EnablePage implements OnInit {
  item: any ={
    pic: "assets/profile.png",
    pic2: "assets/vidal.png",
    pic3: "assets/car1.jpg"
  }
  constructor() { }

  ngOnInit() {
  }

}
