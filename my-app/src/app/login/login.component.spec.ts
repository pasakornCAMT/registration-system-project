import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {Router} from '@angular/router';
import {Course} from '../course/course';
import {DataService} from '../service/data.service';
import {Student} from '../student/student';
import {Teacher} from '../teacher/teacher';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component;
  const router = jasmine.createSpyObj('Router',['navigate']);
  let service = jasmine.createSpyObj('DataService',['getService']);
  let student: Student;
  let teacher: Teacher;
  let email: string;
  let password: string;


  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        LoginComponent,
        Student,
        Course,
        Teacher,
        {provide: DataService, useValue: service},
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(LoginComponent);
    student = TestBed.get(Student);
    teacher = TestBed.get(Teacher);
    service = TestBed.get(DataService);
  });

  it('verifyTeacherLogin(email:string, password:string) should return true if first teacher account is correct',()=>{
    //Arrange
    email = 'teacher1@cmuTEA.ac.th';
    password = '1';
    let result;
    //Act
    result = component.verifyTeacherLogin(email,password);
    //Assert
    expect(result).toBe(true);
  });

  it('verifyTeacherLogin(email:string, password:string) should return true if second teacher account is correct',()=>{
    //Arrange
    email = 'teacher2@cmuTEA.ac.th';
    password = '2';
    let result;
    //Act
    result = component.verifyTeacherLogin(email,password);
    //Assert
    expect(result).toBe(true);
  });
});
