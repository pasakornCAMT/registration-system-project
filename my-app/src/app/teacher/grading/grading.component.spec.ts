import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingComponent } from './grading.component';
import {Student} from "../../student/student";
import {Teacher} from "../teacher";
import {Course} from "../../course/course";
import {TeacherComponent} from "../view-teacher/teacher.component";
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";
import {TargetLocator} from "selenium-webdriver";

describe('GradingComponent', () => {
  let component: GradingComponent;
  const router = jasmine.createSpyObj('Router',['navigate']);
  let service = jasmine.createSpyObj('DataService',['getService']);
  // let gradeA: number;
  // let gradeB: number;
  // let gradeC: number;
  // let gradeD: number;
  // let gradeF: number;
  // let gpaOfCourse: number;
  // let numOfGradedStudent: number;
  // let previousGrade01: string;
  // let previousGrade02: string;
  // let previousGrade03: string;
  let course: Course;
  let student: Student;
  let teacher: Teacher;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        Student,Teacher,Course,GradingComponent,
        {provide: DataService, useValue: service},
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(GradingComponent);
    student= TestBed.get(Student);
    service= TestBed.get(DataService);
    course=TestBed.get(Course);
    teacher=TestBed.get(Teacher);
  });

  //onClickGrade01(event: Event)----------------------------------------------------------------------------------------
  // it('onClickGrade01(event: Event): should show summary number of grades and GPA of course by click on first student',()=>{
  //   //Arrange
  //   component.ngOnInit();
  //   (event.target as HTMLSelectElement).value= 'A';
  //   //Act
  //     component.onClickGrade01(event);
  //   //Assert
  //   expect(component.gradeA).toEqual(1);
  //   expect(component.gpaOfCourse).toEqual(4);
  // });

  //onClickGrade02(event: Event)----------------------------------------------------------------------------------------
  // it('onClickGrade02(event: Event): should show summary number of grades and GPA of course by click on second student',()=>{
  //   //Arrange
  //   component.ngOnInit();
  //   (event.target as HTMLSelectElement).value= 'B';
  //   //Act
  //   component.onClickGrade02(event);
  //   //Assert
  //   expect(component.gradeB).toEqual(1);
  //   expect(component.gpaOfCourse).toEqual(3);
  // });

  //onClickGrade03(event: Event)----------------------------------------------------------------------------------------
  // it('onClickGrade03(event: Event): should show summary number of grades and GPA of course by click on third student',()=>{
  //   //Arrange
  //   component.ngOnInit();
  //   (event.target as HTMLSelectElement).value= 'C';
  //   //Act
  //   component.onClickGrade03(event);
  //   //Assert
  //   expect(component.gradeC).toEqual(1);
  //   expect(component.gpaOfCourse).toEqual(2);
  // });

  //onClickGradeXX(event: Event)---------------------------------------------------------------------------------------------
  // it('onClickGradeXX(event: Event): Combine 3 selected choices together by all of choices are selected.',()=>{
  //   component.ngOnInit();
  //
  //   (event.target as HTMLSelectElement).value= 'A';
  //   component.onClickGrade01(event);
  //   (event.target as HTMLSelectElement).value= 'A';
  //   component.onClickGrade02(event);
  //   (event.target as HTMLSelectElement).value= 'B';
  //   component.onClickGrade03(event);
  //   expect(component.gradeA).toEqual(2);
  //   expect(component.gradeB).toEqual(1);
  //   expect(component.gpaOfCourse).toEqual(3.6666666666666665);
  //
  // });

  // it('onClickGradeXX(event: Event): Combine 3 selected choices together by if values of some choices are changed.',()=>{
  //   component.ngOnInit();
  //   (event.target as HTMLSelectElement).value= 'A';
  //   component.onClickGrade01(event);
  //   (event.target as HTMLSelectElement).value= 'A';
  //   component.onClickGrade02(event);
  //   expect(component.gradeA).toEqual(2);
  //   expect(component.gpaOfCourse).toEqual(4);
  //
  //   (event.target as HTMLSelectElement).value= 'B';
  //   component.onClickGrade02(event);
  //   expect(component.gradeA).toEqual(1);
  //   expect(component.gradeB).toEqual(1);
  //   expect(component.gpaOfCourse).toEqual(3.5);
  //
  // });

});
