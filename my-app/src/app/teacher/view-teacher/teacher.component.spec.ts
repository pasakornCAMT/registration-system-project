import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { TeacherComponent } from './teacher.component';
import {DataService} from "../../service/data.service";
import {Student} from "../../student/student";
import {Teacher} from "../teacher";
import {Course} from "../../course/course";
import {Router} from "@angular/router";
import {TEACHERS} from "../../mocks";
import {RouterTestingModule} from "@angular/router/testing";



describe('TeacherComponent', () => {
  let component: TeacherComponent;
  const router = jasmine.createSpyObj('Router',['navigate']);
  let service = jasmine.createSpyObj('DataService',['getService']);
  let teacherEmail: string;
  let courseID: string;
  let course: Course;
  let student: Student;
  let teacher: Teacher;
  let courseIndex: number;
  let pathName:string;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        Student,Teacher,Course,TeacherComponent,
        {provide: DataService, useValue: service},
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(TeacherComponent);
    student= TestBed.get(Student);
    service= TestBed.get(DataService);
    course=TestBed.get(Course);
    teacher=TestBed.get(Teacher);

  });

  //findTeacherByEmail(email:string)---------------------------------------------------------------------------------------
  it('findTeacherByEmail(email:string): should return first teacher object by teacher email', () => {
    //Arrange
    teacherEmail = 'teacher1@cmuTEA.ac.th';
    //Act
    teacher = component.findTeacherByEmail(teacherEmail);
    //Assert
    expect(teacher).toEqual(TEACHERS[0]);
  });

  it('findTeacherByEmail(email:string): should return second teacher object by teacher email', () => {
    //Arrange
    teacherEmail = 'teacher2@cmuTEA.ac.th';
    //Act
    teacher = component.findTeacherByEmail(teacherEmail);
    //Assert
    expect(teacher).toEqual(TEACHERS[1]);
  });


  //generateCourseData()------------------------------------------------------------------------------------------------
  it('generateCourseData(): should show teaching-courses list of first teacher by teacher email',()=>{
    //Arrange
    teacherEmail = 'teacher1@cmuTEA.ac.th';
    component.teacher=component.findTeacherByEmail(teacherEmail);
    //Act
    component.generateCourseData();

    //Assert
    expect(component.teacher.teaching_course).toEqual(TEACHERS[0].teaching_course);
  });

  it('generateCourseData(): should show teaching-courses list of second teacher by teacher email',()=>{
    //Arrange
    teacherEmail = 'teacher2@cmuTEA.ac.th';
    component.teacher=component.findTeacherByEmail(teacherEmail);
    //Act
    component.generateCourseData();

    //Assert
    expect(component.teacher.teaching_course).toEqual(TEACHERS[1].teaching_course);
  });


  //showDetail(id:string)---------------------------------------------------------------------------------------------------------
  it('showDetail(id:string): should show details of first course by course ID',()=>{
    //Arrange
    courseID='1';
    //Act
    component.showDetail(courseID);
    //Assert
    expect(service.courseDetail).toEqual(courseID);
  });

  it('showDetail(id:string): should show details of second course by course ID',()=>{
    //Arrange
    courseID='2';
    //Act
    component.showDetail(courseID);
    //Assert
    expect(service.courseDetail).toEqual(courseID);
  });

  it('showDetail(id:string): should show details of third course by course ID',()=>{
    //Arrange
    courseID='3';
    //Act
    component.showDetail(courseID);
    //Assert
    expect(service.courseDetail).toEqual(courseID);
  });

  //showGrading()--------------------------------------------------------------------------------------------------------
  it('showGrading(): should show grading page',()=>{
    //Arrange
    pathName='/grading';
    router.navigate([pathName]);
    //Act
    component.showGrading();
    //Assert
    expect(pathName).toBe('/grading');
  });

});
