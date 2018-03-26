import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../../course/course';
import {COURSES} from '../../mocks';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private router:Router) { }
  courses:Course[];
  ngOnInit() {
    this.courses=COURSES;
  }
  showGrading(){
    this.router.navigate(['/grading']);
  }
  showDetail(){
    this.router.navigate(['view-course'])
  }

}
