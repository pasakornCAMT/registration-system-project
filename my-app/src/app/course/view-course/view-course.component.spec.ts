import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseComponent } from './view-course.component';
import {DataService} from '../../service/data.service';
import {Course} from '../course';
import {Student} from '../../student/student';
import {COURSES, TEACHERS} from '../../mocks';
import {Teacher} from '../../teacher/teacher';

describe('ViewCourseComponent', () => {
  let component: ViewCourseComponent;
  let fixture: ComponentFixture<ViewCourseComponent>;
  let service = jasmine.createSpyObj('DataService',['getService']);
  let courseId: string;
  let course: Course;
  let teachers: Teacher[];
  
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        ViewCourseComponent,
        Student,
        Course,
        Teacher,
        {provide: DataService, useValue: service},
      ]
    });
    // Inject
    component = TestBed.get(ViewCourseComponent);
    service = TestBed.get(DataService);
    course = TestBed.get(Course);
    teachers = TestBed.get(Teacher);

  });

  it('findCourseById(id:string): should return first course object by course ID',()=>{
    //Arrange
    courseId = '021251';
    //Act
    course = component.findCourseById(courseId);
    //Arrange
    expect(course).toEqual(COURSES[0]);
  });

  it('findCourseById(id:string): should return second course object by course ID',()=>{
    //Arrange
    courseId = '953322';
    //Act
    course = component.findCourseById(courseId);
    //Arrange
    expect(course).toEqual(COURSES[1]);
  });

  it('findCourseById(id:string): should return third course object by course ID',()=>{
    //Arrange
    courseId = '954441';
    //Act
    course = component.findCourseById(courseId);
    //Arrange
    expect(course).toEqual(COURSES[2]);
  });

  it('generateTeacherData(): should generate teachers data of this course',()=>{
    //Arrange
    teachers = [
      TEACHERS[0],TEACHERS[1]
    ];
    component.course = COURSES[0];
    //Act
    component.generateTeacherData();
    //Assert
    expect(teachers).toEqual(component.teachers);
  });
});

