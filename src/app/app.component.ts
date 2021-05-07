import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { CommonDataService } from "./common/common-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  myDate: Date = new Date();
  router: string="";
  
  constructor(private _router: Router,private _commonService:CommonDataService) {
    this.router = _router.url; 
    
  }


  ngOnInit() {
    console.log(this.router);
    // this.clock();
  }
  clock() {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }
}
