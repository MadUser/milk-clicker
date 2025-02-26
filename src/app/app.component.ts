import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  milk = 0;
  gameOver = false;
  
  clickCow() {
    this.milk++;
  }

  ngOnInit() {
    setInterval(() => {
      this.milk -= 10;
      if(this.milk < 0) {
        this.gameOver = true;
      }
    }, 10000);
  }
}
