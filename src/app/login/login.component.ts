import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = 'Get Current Url Route Demo';
  currentRoute: string='';

  constructor(private router: Router) { 
    console.log(router.url);
    
    
  }

  ngOnInit(): void {
    
  }

}
