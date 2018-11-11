import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;
declare var google: any;

@Component({
  selector: 'app-fraude-content',
  templateUrl: './fraude-content.component.html',
  styleUrls: ['./fraude-content.component.css']
})
export class FraudeContentComponent implements OnInit {

  //Maps point
  lat: number = 48.873837;
  lng: number = 2.294938;

  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
