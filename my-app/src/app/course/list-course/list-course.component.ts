import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showDetail(){
    this.router.navigate(['/view-course']);
  }
}
