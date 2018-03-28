import {Component, OnInit} from '@angular/core';
import {Course} from '../../course/course';
import {COURSES, STUDENTS} from '../../mocks';
import {Router} from '@angular/router';
import {DataService} from '../../service/data.service';
import {Student} from '../student';

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
  constructor(private router:Router,public dataService:DataService) {

  }

  ngOnInit() {
    this.data = this.dataService.email;
    this.student = this.findStudentByEmail(this.data)
    this.generateCourseData();
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
      this.courses.splice(index,1);
    }

  }
  showDetail(id:string){
    this.dataService.courseDetail = id;
    this.router.navigate(['view-course'])
  }
  findStudentByEmail(email:string){
    let student;
    student = STUDENTS.find(x => x.email == email);
    return student
  }
  generateCourseData(){
    for(let i = 0 ; i < this.student.enrolled_course.length ; i++){
      this.courses.push(COURSES.find(x => x.courseId == this.student.enrolled_course[i]));
    }
  }
}
