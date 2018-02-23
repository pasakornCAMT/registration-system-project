import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Course} from "../course";
import {COURSES} from "../../mocks";

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private router:Router) { }
  courses:Course[];
  ngOnInit() {
      this.courses=COURSES;
  }

  showDetail(){
    this.router.navigate(['/view-course']);
  }
}
