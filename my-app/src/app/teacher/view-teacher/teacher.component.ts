import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Course} from '../../course/course';
import {COURSES} from '../../mocks';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private router:Router, public dataService:DataService) { }
  courses:Course[];
  ngOnInit() {
    this.courses=COURSES;
  }
  showGrading(){
    this.router.navigate(['/grading']);
  }
  showDetail(id:string){
    this.dataService.dataFromService = id;
    this.router.navigate(['view-course'])
  }

}
