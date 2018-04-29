import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ListCourseComponent } from './list-course.component';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';
import {Student} from '../../student/student';
import {COURSES, STUDENTS} from '../../mocks';
import {Course} from '../course';


describe('ListCourseComponent', () => {
  let component;
  const router = jasmine.createSpyObj('Router',['navigate']);
  const service = jasmine.createSpyObj('DataService',['getService']);
  let fixture: ComponentFixture<ListCourseComponent>;
  let studentEmail: string;
  let student: Student;
  let course: Course;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        ListCourseComponent,
        {provide: DataService, useValue: service},
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(ListCourseComponent);

  });

  it('should return first student object by student email', () => {
    //Arrange
    studentEmail = 'student1@cmuSTU.ac.th';
    //Act
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[0]);
  });

  it('should return second student object by student email', () => {
    //Arrange
    studentEmail = 'student2@cmuSTU.ac.th';
    //Act
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[1]);
  });

  it('should return second student object by student email', () => {
    //Arrange
    studentEmail = 'student3@cmuSTU.ac.th';
    //Act
    student = component.findStudentByEmail(studentEmail);
    //Assert
    expect(student).toEqual(STUDENTS[2]);
  });

  it('should display courses as same as COURSES in mock.ts',()=>{
    //Arrange

    //Act
    component.ngOnInit();
    //Assert
    expect(component.courses).toEqual(COURSES);
  });

  it('should push course object into student when click enrolled course',()=>{
/*    //Arrange
    course = COURSES[0];
    //Act
    component.enrollCourse(course)
    //Assert
    expect(component.student.enrolled_course).toContain(course);*/
  });

});
