import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  
  item: any ={
    pic: "assets/profile.png"
  }

  constructor() { }

  ngOnInit() {
  }

}
