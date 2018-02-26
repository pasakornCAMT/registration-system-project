import { Component, OnInit } from '@angular/core';
import {Course} from '../../course/course';
import {COURSES} from '../../mocks';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-student-gpa',
  templateUrl: './view-student-gpa.component.html',
  styleUrls: ['./view-student-gpa.component.css']
})
export class ViewStudentGpaComponent implements OnInit {

  constructor() { }
  courses: Course[];
  ngOnInit() {
    this.courses = COURSES;
  }
}
