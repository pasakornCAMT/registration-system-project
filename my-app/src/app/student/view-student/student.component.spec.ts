import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import {Student} from "../student";
import {Course} from "../../course/course";
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";
import {STUDENTS} from "../../mocks";

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  const router = jasmine.createSpyObj('Router',['navigate']);
  const service = jasmine.createSpyObj('DataService',['getService']);
  let studentEmail: string;
  let student: Student;
  let course: Course;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        Student,StudentComponent,
        {provide: DataService, useValue: service},
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(StudentComponent);
    student= TestBed.get(Student);
  });

  //findStudentByEmail()---------------------------------------------------------------------------------------
  it('findStudentByEmail(): should return first student object by student email', () => {
    studentEmail = 'student1@cmuSTU.ac.th';
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[0]);
  });

  it('findStudentByEmail(): should return second student object by student email', () => {
    studentEmail = 'student2@cmuSTU.ac.th';
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[1]);
  });

  it('findStudentByEmail(): should return third student object by student email', () => {
    studentEmail = 'student3@cmuSTU.ac.th';
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[2]);
  });

  //generateCourseData()------------------------------------------------------------------------------------------------
  it('generateCourseData(): should show enrolled-courses list of first student by student email',()=>{
    studentEmail = 'student1@cmuSTU.ac.th';
    component.student=component.findStudentByEmail(studentEmail);
    component.generateCourseData();

    //Assert
    expect(component.student.enrolled_course).toEqual(STUDENTS[0].enrolled_course);
  });

  it('generateCourseData(): should show enrolled-courses list of second student by student email',()=>{
    studentEmail = 'student2@cmuSTU.ac.th';
    component.student=component.findStudentByEmail(studentEmail);
    component.generateCourseData();

    //Assert
    expect(component.student.enrolled_course).toEqual(STUDENTS[1].enrolled_course);
  });

  it('generateCourseData(): should show enrolled-courses list of third student by student email',()=>{
    studentEmail = 'student3@cmuSTU.ac.th';
    component.student=component.findStudentByEmail(studentEmail);
    component.generateCourseData();

    //Assert
    expect(component.student.enrolled_course).toEqual(STUDENTS[2].enrolled_course);
  });


});
