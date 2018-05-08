import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';
import {ADMINS, STUDENTS, TEACHERS} from '../mocks';
import {AuthenticationService} from '../service/authentication.service';
//import * as firebase from 'firebase';
import {StudentDataFirestoreService} from '../service/student-data-firestore.service';
import {TeacherDataFirestoreService} from '../service/teacher-data-firestore.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(private router:Router,
              public dataService:DataService,
              public authService: AuthenticationService,
              public studentDataService:StudentDataFirestoreService,
              public teacherDataService:TeacherDataFirestoreService) {

  }

  ngOnInit() {
  }
/*
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
  }*/

  login(emailInput:string,passwordInput:string){
    let email = firebase.auth().currentUser.email;
    console.log(email);
      //'student1@cmuSTU.ac.th';
    this.authService.login(emailInput, passwordInput).then((data)=>{
      console.log(data);
      this.router.navigate(['course-list']);
      this.authService.authenticated = true;
      if(email.includes("@cmustu")){
        this.studentDataService.getStudentByEmail(email).subscribe(data=>{
         this.authService.student = data[0]; // Use the first student founded
        });
        this.authService.userType = 'student';
      }else if(email.includes("@cmutea")){
        this.teacherDataService.getTeacherByEmail(email).subscribe(data=>{
          this.authService.teacher = data[0]; // Use the first teacher founded
        });
        this.authService.userType = 'teacher';
      }else{
        this.authService.userType = 'admin';
      }
    }).catch((err)=>{
      console.log('error: ',err);
      alert('e-mail or Password does not exist');
      this.authService.authenticated = false;
    })
  }
}
