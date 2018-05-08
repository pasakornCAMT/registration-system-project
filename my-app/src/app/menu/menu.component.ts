import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router, public dataService:DataService, public authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  logout(){
    //this.dataService.userType = 'null';
    //this.dataService.userStatus = 'logout';
    this.router.navigate(['login'])
    this.authService.authenticated = false;
  }
  login(){
    this.router.navigate(['login'])
  }

}
