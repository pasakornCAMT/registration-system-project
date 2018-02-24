import { Component, OnInit } from '@angular/core';
import {Course} from '../../course/course';
import {COURSES} from '../../mocks';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  courses:Course[];
  ngOnInit() {
    this.courses=COURSES;
  }

}
