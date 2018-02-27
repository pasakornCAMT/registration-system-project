import { Component, OnInit } from '@angular/core';
import {Course} from "../course";
import {Teacher} from "../../teacher/teacher";
import {COURSES, TEACHERS} from "../../mocks";

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  courses:Course[];
  teachers:Teacher[];
  constructor() { }

  ngOnInit() {
    this.courses=COURSES;
    this.teachers=TEACHERS;
  }

}
