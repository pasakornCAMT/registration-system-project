import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;

  constructor(private router:Router,public dataService:DataService) {

  }

  ngOnInit() {
  }

  login(email:string){
    this.dataService.email = email;
    if(email.includes('@cmuTEA')){
      this.router.navigate(['view-teacher']);
      this.dataService.userType = 'teacher';
    }else if(email.includes('@cmuSTU')){
      this.dataService.userType = 'student';
      this.router.navigate(['view-student']);
    }else if(email.includes('@cmuAD')){
      this.dataService.userType = 'admin';
      this.router.navigate(['add-course']);
    }
    this.dataService.userStatus = 'login';
  }

}
