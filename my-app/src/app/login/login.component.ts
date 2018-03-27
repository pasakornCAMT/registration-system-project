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
    this.dataService.dataFromService = email;
    if(email.includes('@cmuTEA')){
      this.router.navigate(['view-teacher'])
    }else if(email.includes('@cmuSTU')){
      this.router.navigate(['view-student'])
    }

  }
}
