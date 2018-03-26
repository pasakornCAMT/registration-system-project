import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {

  constructor() { }
  gradeA:number;
  gradeB:number;
  gradeC:number;
  gradeD:number;
  gradeF:number;
  gpaOfCourse:number;
  numOfGradedStudent:number;

  ngOnInit() {
    this.gradeA = 0;
    this.gradeB = 0;
    this.gradeC = 0;
    this.gradeD = 0;
    this.gradeF = 0;
    this.gpaOfCourse = 0.00;
  }

  onClickGrade(event:Event){
    console.log((event.target as HTMLSelectElement).value);
    if((event.target as HTMLSelectElement).value == 'A'){
      this.gradeA++
    }else if((event.target as HTMLSelectElement).value == 'B'){
      this.gradeB++
    }else if((event.target as HTMLSelectElement).value == 'C'){
      this.gradeC++
    }else if((event.target as HTMLSelectElement).value == 'D'){
      this.gradeD++
    }else if((event.target as HTMLSelectElement).value == 'F'){
      this.gradeF++
    }
    this.numOfGradedStudent = this.gradeA+this.gradeB+this.gradeC+this.gradeD+this.gradeF;

    this.gpaOfCourse = ((4*this.gradeA)+(3*this.gradeB)+(2*this.gradeC)+(this.gradeD))/this.numOfGradedStudent;
  }
}
