import {Component, OnInit} from '@angular/core';
import {Course} from '../../course/course';
import {COURSES} from '../../mocks';
import {Router} from '@angular/router';
import index from "@angular/cli/lib/cli";
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router,public dataService:DataService) {
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
  viewGPA(){
    this.router.navigate(['/view-student-gpa']);
  }

  removeCourse(index:number){
    let c = confirm("Are you sure to remove this course");
    if(c == true){
      COURSES.splice(index,1);
    }

  }
  showDetail(id:string){
    this.dataService.dataFromService = id;
    this.router.navigate(['view-course'])
  }
}
