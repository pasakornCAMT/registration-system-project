import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';
import {ADMINS, STUDENTS, TEACHERS} from '../mocks';
import {Teacher} from '../teacher/teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(private router:Router,public dataService:DataService) {

  }

  ngOnInit() {
  }

  login(email:string, password:string){
    this.dataService.email = email;
    this.dataService.password = password;
    if(email.includes('@cmuTEA')){
      if(this.verifyTeacherLogin(email,password) == true){
        this.dataService.userStatus = 'login';
        this.dataService.userType = 'teacher';
        this.router.navigate(['course-list']);
      }else {
        alert("e-mail or Password does not exist")
      }
    }else if(email.includes('@cmuSTU')){
      if(this.verifyStudentLogin(email,password) == true){
        this.dataService.userStatus = 'login';
        this.dataService.userType = 'student';
        this.router.navigate(['course-list']);
      }else {
        alert("e-mail or Password does not exist")
      }
    }else if(email.includes('@cmuAD')){
      if(this.verifyAdminLogin(email,password) == true){
        this.dataService.userStatus = 'login';
        this.dataService.userType = 'admin';
        this.router.navigate(['course-list']);
      }else {
        alert("e-mail or Password does not exist")
      }
    }else {
      alert("e-mail or Password does not exist")
    }
  }

  verifyTeacherLogin(email:string, password:string){
    let result = false;
    for(let i = 0 ; i < TEACHERS.length ; i++){
      if(email == TEACHERS[i].email && password == TEACHERS[i].password){
        result = true;
        break;
      }
    }
    return result;
  }
  verifyStudentLogin(email:string, password:string){
    let result = false;
    for(let i = 0 ; i < STUDENTS.length ; i++){
      if(email == STUDENTS[i].email && password == STUDENTS[i].password){
        result = true;
        break;
      }
    }
    return result;
  }
  verifyAdminLogin(email:string, password:string){
    let result = false;
    for(let i = 0 ; i < ADMINS.length ; i++){
      if(email == ADMINS[i].email && password == ADMINS[i].password){
        result = true;
        break;
      }
    }
    return result;
  }

}
