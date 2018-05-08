import {Component, OnInit} from '@angular/core';
import {Course} from '../../course/course';
import {COURSES, STUDENTS} from '../../mocks';
import {Router} from '@angular/router';
import {DataService} from '../../service/data.service';
import {Student} from '../student';
import {AuthenticationService} from '../../service/authentication.service';
import {Teacher} from '../../teacher/teacher';
import {CourseDataFirestoreService} from '../../service/course-data-firestore.service';
import {StudentDataFirestoreService} from '../../service/student-data-firestore.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  courses: Course[]=[];
  totalCredit:number;
  totalFee:number;
  student:Student;
  data:string;
  constructor(private router:Router,
              public dataService:DataService,
              public authService: AuthenticationService,
              public courseDataService: CourseDataFirestoreService,
              public studentDataService: StudentDataFirestoreService) {

  }

  ngOnInit() {
    this.student = this.authService.student;
    console.log(this.student);
    this.generateCourseData();
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
      this.courses.splice(index,1);
      this.student.enrolledCourse.splice(index,1);
      this.studentDataService.updateCourse(this.student);
      this.router.navigate(['view-student']);
    }


  }
  showDetail(id:string){
    //this.dataService.courseDetail = id;
    this.router.navigate(['view-course',id])
  }
  generateCourseData(){
    let course: Course;
    for(let i = 0 ; i < this.student.enrolledCourse.length ; i++){
      this.courseDataService.getCourse(this.student.enrolledCourse[i])
        .subscribe(c=>{
          course = c;
          this.courses.push(course);
        });
    }
    this.calculateCredit();
  }
}
