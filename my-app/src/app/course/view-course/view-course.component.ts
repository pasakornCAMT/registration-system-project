import { Component, OnInit } from '@angular/core';
import {Course} from "../course";
import {Teacher} from "../../teacher/teacher";
import {COURSES, TEACHERS} from "../../mocks";
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  course:Course;
  teachers:Teacher[]=[];
  data:string;

  constructor(public dataService:DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.courseDetail;
    this.course = this.findCourseById(this.data);
    this.generateTeacherData();
  }

  findCourseById(id:string){
    let course;
    course = COURSES.find(x => x.courseId == id);
    return course
  }
  generateTeacherData(){
    for(let i = 0 ; i < this.course.teaching_course.length ; i++){
      this.teachers.push(TEACHERS.find(x => x.teacherId == this.course.teaching_course[i]));
    }
  }
}
