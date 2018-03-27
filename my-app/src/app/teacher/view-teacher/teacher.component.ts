import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../../course/course';
import {COURSES, TEACHERS} from '../../mocks';
import {DataService} from '../../service/data.service';
import {Teacher} from '../teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  courses:Course[]=[];
  teacher:Teacher;
  data:string;

  constructor(private router:Router, public dataService:DataService) {
  }


  ngOnInit() {
    this.data = this.dataService.dataFromService;
    this.teacher = this.findTeacherByEmail(this.data);
    //this.courses=COURSES;
    this.generateCourseData();
  }
  showGrading(){
    this.router.navigate(['/grading']);
  }
  showDetail(id:string){
    this.dataService.dataFromService = id;
    this.router.navigate(['view-course'])
  }
  findTeacherByEmail(email:string){
    let teacher;
    teacher = TEACHERS.find(x => x.email == email);
    return teacher
  }
  generateCourseData(){
    for(let i = 0 ; i < this.teacher.teaching_course.length ; i++){
      this.courses.push(COURSES.find(x => x.courseId == this.teacher.teaching_course[i]));
    }
  }

}
