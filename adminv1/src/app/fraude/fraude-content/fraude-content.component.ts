import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-fraude-content',
  templateUrl: './fraude-content.component.html',
  styleUrls: ['./fraude-content.component.css']
})
export class FraudeContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
