import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import {Student} from '../student/student';
import {Teacher} from '../teacher/teacher';
import {Admin} from '../admin/admin';

@Injectable()
export class AuthenticationService {
  authenticated:boolean;
  userType:string;
  student:Student;
  teacher:Teacher;
  admin:Admin;

  constructor(public af: AngularFireAuth,private router:Router) { }

  login(email:string, password:string){
    return this.af.auth.signInWithEmailAndPassword(email, password)
  }

}
