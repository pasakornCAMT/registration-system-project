import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import {Student} from "../student";
import {Course} from "../../course/course";
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";
import {COURSES, STUDENTS} from "../../mocks";

describe('StudentComponent', () => {
  let component: StudentComponent;
  const router = jasmine.createSpyObj('Router',['navigate']);
  let service = jasmine.createSpyObj('DataService',['getService']);
  let studentEmail: string;
  let courseID: string;
  let student: Student;
  let course: Course;
  let courseIndex: number;

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
    service= TestBed.get(DataService);
  });

  //findStudentByEmail()---------------------------------------------------------------------------------------
  it('findStudentByEmail(): should return first student object by student email', () => {
    //Arrange
    studentEmail = 'student1@cmuSTU.ac.th';
    //Act
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[0]);
  });

  it('findStudentByEmail(): should return second student object by student email', () => {
    //Arrange
    studentEmail = 'student2@cmuSTU.ac.th';
    //Act
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[1]);
  });

  it('findStudentByEmail(): should return third student object by student email', () => {
    //Arrange
    studentEmail = 'student3@cmuSTU.ac.th';
    //Act
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[2]);
  });

  //generateCourseData()------------------------------------------------------------------------------------------------
  it('generateCourseData(): should show enrolled-courses list of first student by student email',()=>{
    //Arrange
    studentEmail = 'student1@cmuSTU.ac.th';
    component.student=component.findStudentByEmail(studentEmail);
    //Act
    component.generateCourseData();

    //Assert
    expect(component.student.enrolled_course).toEqual(STUDENTS[0].enrolled_course);
  });

  it('generateCourseData(): should show enrolled-courses list of second student by student email',()=>{
    //Arrange
    studentEmail = 'student2@cmuSTU.ac.th';
    component.student=component.findStudentByEmail(studentEmail);
    //Act
    component.generateCourseData();

    //Assert
    expect(component.student.enrolled_course).toEqual(STUDENTS[1].enrolled_course);
  });

  it('generateCourseData(): should show enrolled-courses list of third student by student email',()=>{
    //Arrange
    studentEmail = 'student3@cmuSTU.ac.th';
    component.student=component.findStudentByEmail(studentEmail);
    //Act
    component.generateCourseData();

    //Assert
    expect(component.student.enrolled_course).toEqual(STUDENTS[2].enrolled_course);
  });

  //showDetail()---------------------------------------------------------------------------------------------------------
  it('showDetail(): should show details of first course by course ID',()=>{
    //Arrange
    courseID='1';
    //Act
    component.showDetail(courseID);
    //Assert
    expect(service.courseDetail).toEqual(courseID);
  });

  it('showDetail(): should show details of second course by course ID',()=>{
    //Arrange
    courseID='2';
    //Act
    component.showDetail(courseID);
    //Assert
    expect(service.courseDetail).toEqual(courseID);
  });

  it('showDetail(): should show details of third course by course ID',()=>{
    //Arrange
    courseID='3';
    //Act
    component.showDetail(courseID);
    //Assert
    expect(service.courseDetail).toEqual(courseID);
  });

  //removeCourse()----------------------------------------------------------------------------------------------------------
  it('removeCourse(): should remove first course from the enrolled-course list by course id',()=>{
    //Arrange
    courseIndex=0;
    //Act
    component.removeCourse(courseIndex);
    //Assert
    expect(component.courses.length).toBeLessThan(3);
  });

  it('removeCourse(): should remove second course from the enrolled-course list by course id',()=>{
    //Arrange
    courseIndex=1;
    //Act
    component.removeCourse(courseIndex);
    //Assert
    expect(component.courses.length).toBeLessThan(3);
  });

  it('removeCourse(): should remove third course from the enrolled-course list by course id',()=>{
    //Arrange
    courseIndex=2;
    //Act
    component.removeCourse(courseIndex);
    //Assert
    expect(component.courses.length).toBeLessThan(3);
  });

});
