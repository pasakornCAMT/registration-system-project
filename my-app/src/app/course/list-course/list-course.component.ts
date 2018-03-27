import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Course} from "../course";
import {COURSES, TEACHERS} from "../../mocks";
import {DataService} from '../../service/data.service';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private router:Router, public dataService:DataService) { }
  courses:Course[];
  course:any = {};
  ngOnInit() {
      this.courses=COURSES;
  }

  showDetail(id:string){
    this.dataService.dataFromService = id;
    this.router.navigate(['/view-course']);
  }

  enrollCourse(course:Course){
    COURSES.push(course);
    this.router.navigate(['view-student'])
  }
}
