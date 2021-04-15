import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myDate: Date = new Date();

  ngOnInit() {
    this.clock();
  }
  clock() {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }
}
