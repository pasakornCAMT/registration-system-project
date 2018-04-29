import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import {Router} from '@angular/router';
import {Course} from '../course';
import {COURSES} from '../../mocks';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;
  const router = jasmine.createSpyObj('Router',['navigate']);
  let course: Course;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        AddCourseComponent,
        Course,
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(AddCourseComponent);
    course = TestBed.get(Course);
  });

  it('addCourse(course:Course) add course to COURSE in mock.ts',()=>{
    //Arrange
    course.courseId = '953323';
    course.name = 'SW CONS';
    //Act
    component.addCourse(course);
    //Assert
    expect(COURSES).toContain(course);
  });

});
