import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  counter = 0;
  dropMulti = 0;
  dropPrice = 15;

  farmMulti =0;
  farmPrice = 100;
  farmMilkPerSec = 4;
  
  ngOnInit() {
    setInterval(() => this.calc(), 100);
  }

  onClick() {
    this.counter++;
  } 
  
  onFarmClick() {
    this.farmMulti++;
    this.counter = this.counter - this.farmPrice;
    this.farmPrice = Math.ceil(this.farmPrice * 1.15);
  }

  calc() {
    this.counter = this.counter + ((this.farmMulti * this.farmMilkPerSec)/10);
  }
}

