import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Course} from "../course";
import {COURSES, STUDENTS, TEACHERS} from "../../mocks";
import {DataService} from '../../service/data.service';
import {Student} from '../../student/student';
import {CourseDataFirestoreService} from '../../service/course-data-firestore.service';
import {AuthenticationService} from '../../service/authentication.service';
import {StudentDataFirestoreService} from '../../service/student-data-firestore.service';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private router:Router,
              public dataService:DataService,
              public courseDataService:CourseDataFirestoreService,
              public authService: AuthenticationService,
              public studentDataService: StudentDataFirestoreService) { }
  courses:Course[];
  student:Student;
  course:any = {};
  ngOnInit() {
    this.courseDataService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  showDetail(course:Course){
    this.router.navigate(['/view-course',course.id]);
  }

  enrollCourse(course:Course){
    this.student = this.authService.student;
    if(!this.student.enrolledCourse.includes(course.courseId)){
      this.student.enrolledCourse.push(course.courseId);
      this.studentDataService.updateCourse(this.student);
      this.router.navigate(['view-student']);
    }else{
      alert('You cannot enrolled twice')
    }
  }

  findStudentByEmail(email:string){
    let student;
    student = STUDENTS.find(x => x.email == email);
    return student
  }
}
