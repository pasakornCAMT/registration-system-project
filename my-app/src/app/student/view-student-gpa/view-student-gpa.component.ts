import { Component, OnInit } from '@angular/core';
import {Course} from '../../course/course';
import {COURSES} from '../../mocks';
import {Router} from '@angular/router';
import {Student} from '../student';
import {CourseDataFirestoreService} from '../../service/course-data-firestore.service';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-view-student-gpa',
  templateUrl: './view-student-gpa.component.html',
  styleUrls: ['./view-student-gpa.component.css']
})
export class ViewStudentGpaComponent implements OnInit {

  constructor(public courseDataService: CourseDataFirestoreService,
              public authService: AuthenticationService
              ) { }
  courses: Course[]=[];
  student: Student;
  ngOnInit() {
    //this.courses = COURSES;
    this.student = this.authService.student;
    this.generateCourseData();
  }

  generateCourseData(){
    let course: Course;
    for(let i = 0 ; i < this.student.enrolledCourse.length ; i++){
      this.courseDataService.getCourse(this.student.enrolledCourse[i])
        .subscribe(c=>{
          course = c;
          this.courses.push(course);
        });
    }
  }
}
