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
  
}
