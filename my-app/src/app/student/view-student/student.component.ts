import {Component, OnInit} from '@angular/core';
import {Course} from '../../course/course';
import {COURSES} from '../../mocks';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() {
  }

  courses: Course[];
  totalCredit:number;
  totalFee:number;
  ngOnInit() {
    this.courses = COURSES;
    this.calculateCredit();
  }

  calculateCredit() {
    let result = 0;
    for(let i = 0 ; i < this.courses.length ; i++){
      result = result + this.courses[i].credit;
    }
    this.totalCredit = result;
    this.totalFee = result*20;

  }


}
