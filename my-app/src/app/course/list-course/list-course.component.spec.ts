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
  let service = jasmine.createSpyObj('DataService',['getService']);
  let fixture: ComponentFixture<ListCourseComponent>;
  let studentEmail: string;
  let student: Student;
  let course: Course;
  let courseId: string;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        ListCourseComponent,
        Student,
        Course,
        {provide: DataService, useValue: service},
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(ListCourseComponent);
    student = TestBed.get(Student);
    course = TestBed.get(Course);
	  service = TestBed.get(DataService);

  });

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

  it('ngOnInit(): should display courses as same as COURSES in mock.ts',()=>{
    //Arrange

    //Act
    component.ngOnInit();
    //Assert
    expect(component.courses).toEqual(COURSES);
  });

  it('enrollCourse(course:Course): should push course object into student when click enrolled course',()=>{
    //Arrange
    component.student = STUDENTS[0];
    course = COURSES[0];
    //Act
    component.enrollCourse(course);
    //Assert
    expect(component.student.enrolled_course).toContain(course.courseId);
  });
  it('showDetail(id:string): should inject course to courseDetail in DataService',()=>{
    //Arrange
    courseId = '953332';
    //Act
    component.showDetail(courseId);
    //Assert
    expect(service.courseDetail).toBe(courseId);
  });


});
