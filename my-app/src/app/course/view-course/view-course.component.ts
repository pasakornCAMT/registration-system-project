import { Component, OnInit } from '@angular/core';
import {Course} from "../course";
import {Teacher} from "../../teacher/teacher";
import {COURSES, TEACHERS} from "../../mocks";
import {DataService} from '../../service/data.service';
import {CourseDataFirestoreService} from '../../service/course-data-firestore.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {TeacherDataFirestoreService} from '../../service/teacher-data-firestore.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  course:Course;
  teachers:Teacher[]=[];
  data:string;

  constructor(public dataService:DataService,
              public courseDataService: CourseDataFirestoreService,
              public route: ActivatedRoute,
              public teacherDataService: TeacherDataFirestoreService) {
  }

  ngOnInit() {
/*    this.data = this.dataService.courseDetail;
    this.course = this.findCourseById(this.data);
    this.generateTeacherData();*/
    this.route.params
      .switchMap((params:Params)=> this.courseDataService.getCourse(params['id']))
      .subscribe(course=>{
        this.course = course;
        this.generateTeacherData();
      });

  }

  findCourseById(id:string){
    let course;
    course = COURSES.find(x => x.courseId == id);
    return course
  }
  generateTeacherData(){
    /*for(let i = 0 ; i < this.course.teaching_course.length ; i++){
      this.teachers.push(TEACHERS.find(x => x.teacherId == this.course.teaching_course[i]));
    }*/
    let teacher: Teacher;
    for(let i = 0 ; i < this.course.teachers.length ; i++){
      this.teacherDataService.getTeacher(this.course.teachers[i])
        .subscribe(t=>{
          teacher = t;
          this.teachers.push(teacher);
        });
    }
  }
}
