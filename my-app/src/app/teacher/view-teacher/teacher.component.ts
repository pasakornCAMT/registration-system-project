import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../../course/course';
import {COURSES, TEACHERS} from '../../mocks';
import {DataService} from '../../service/data.service';
import {Teacher} from '../teacher';
import {AuthenticationService} from '../../service/authentication.service';
import {CourseDataFirestoreService} from '../../service/course-data-firestore.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  courses:Course[]=[];
  teacher:Teacher;
  data:string;

  constructor(private router:Router,
              public dataService:DataService,
              public authService: AuthenticationService,
              public courseDataService: CourseDataFirestoreService) {
  }


  ngOnInit() {
    this.teacher = this.authService.teacher;
    this.generateCourseData();
  }
  showGrading(id:string){
    this.router.navigate(['/grading',id]);
  }
  showDetail(id:string){
    //this.dataService.courseDetail = id;
    this.router.navigate(['view-course',id])
  }
  generateCourseData(){
    let course: Course;
    for(let i = 0 ; i < this.teacher.teachingCourse.length ; i++){
      this.courseDataService.getCourse(this.teacher.teachingCourse[i])
        .subscribe(c=>{
          course = c;
          this.courses.push(course);
        });
    }
  }

}
