import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  animationCounter = 1;
  animationItems = new Array(10).fill(false);
  ShopArray = [
    {title:"Clicker Plus", price:100, clickCount:1, desc:"1 milk per click", bought:0, maxAllowed:10}
  ]
  clickValue = 1;
  milk = 0;
  gameOver = false;
  
  clickCow() {
    this.milk+=this.clickValue;
    this.setAnimation();
  }

  ngOnInit() {
    setInterval(() => {
      this.milk -= 10;
      if(this.milk < 0) {
        this.gameOver = true;
      }
    }, 10000);
  }

  setAnimation() {
    this.animationItems[this.animationCounter] = true;
    this.animationCounter++;
    if(this.animationCounter > 9) {
      this.animationCounter = 0;
    }
  }
  
  buyItem(item: any) {
    if(item.clickCount) {
      this.clickValue += item.clickCount;
    }
    item.bought++;
    this.milk -= item.price;
  }

}
