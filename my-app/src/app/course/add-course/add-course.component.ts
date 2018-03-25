import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import {COURSES} from '../../mocks';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  constructor(private router:Router) {
  }
  course:any = {};
  ngOnInit() {
  }

  addCourse(course:Course){
    COURSES.push(course);
    this.router.navigate(['/course-list'])
  }

}
