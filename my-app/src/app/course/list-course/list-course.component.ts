import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Course} from "../course";
import {COURSES, STUDENTS, TEACHERS} from "../../mocks";
import {DataService} from '../../service/data.service';
import {Student} from '../../student/student';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private router:Router, public dataService:DataService) { }
  courses:Course[];
  student:Student;
  course:any = {};
  ngOnInit() {
      this.courses=COURSES;
      this.student = this.findStudentByEmail(this.dataService.email);
  }

  showDetail(id:string){
    this.dataService.courseDetail = id;
    this.router.navigate(['/view-course']);
  }

  enrollCourse(course:Course){
    this.student.enrolled_course.push(course.courseId);
    this.router.navigate(['view-student'])
  }

  findStudentByEmail(email:string){
    let student;
    student = STUDENTS.find(x => x.email == email);
    return student
  }
}
