import {Component, OnInit} from '@angular/core';
import {TeacherDataFirestoreService} from '../../service/teacher-data-firestore.service';
import {StudentDataFirestoreService} from '../../service/student-data-firestore.service';
import {AuthenticationService} from '../../service/authentication.service';
import {Student} from '../../student/student';
import {Teacher} from '../teacher';
import {Course} from '../../course/course';
import {CourseDataFirestoreService} from '../../service/course-data-firestore.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {

  constructor(public teacherDataService: TeacherDataFirestoreService,
              public studentDataService: StudentDataFirestoreService,
              public authService: AuthenticationService,
              public courseDataService: CourseDataFirestoreService,
              public route: ActivatedRoute,
              private router:Router) {
  }

  gradeA: number;
  gradeB: number;
  gradeC: number;
  gradeD: number;
  gradeF: number;
  gpaOfCourse: number;
  numOfGradedStudent: number;

  previousGrade01: String;
  previousGrade02: String;
  previousGrade03: String;

  teacher: Teacher;
  students: Student[]=[];
  course: Course;
  indexOfCourse: number;


  ngOnInit() {
    this.gradeA = 0;
    this.gradeB = 0;
    this.gradeC = 0;
    this.gradeD = 0;
    this.gradeF = 0;
    this.gpaOfCourse = 0.00;

    this.previousGrade01 = null;
    this.previousGrade02 = null;
    this.previousGrade03 = null;

    this.teacher = this.authService.teacher;
    this.route.params
      .switchMap((params:Params)=> this.courseDataService.getCourse(params['id']))
      .subscribe(course=>{
        this.course = course;
        this.generateStudentData();
      });

  }

  // onClickGrade(event: Event) {
  //   console.log((event.target as HTMLSelectElement).value);
  //   if ((event.target as HTMLSelectElement).value == 'A') {
  //     this.gradeA++
  //   } else if ((event.target as HTMLSelectElement).value == 'B') {
  //     this.gradeB++
  //   } else if ((event.target as HTMLSelectElement).value == 'C') {
  //     this.gradeC++
  //   } else if ((event.target as HTMLSelectElement).value == 'D') {
  //     this.gradeD++
  //   } else if ((event.target as HTMLSelectElement).value == 'F') {
  //     this.gradeF++
  //   }
  //   this.numOfGradedStudent = this.gradeA + this.gradeB + this.gradeC + this.gradeD + this.gradeF;
  //
  //   this.gpaOfCourse = ((4 * this.gradeA) + (3 * this.gradeB) + (2 * this.gradeC) + (this.gradeD)) / this.numOfGradedStudent;
  // }


  onClickGrade01(event: Event) {
    if (this.previousGrade01!==null) {
      if (this.previousGrade01 !== (event.target as HTMLSelectElement).value) {
        if ((event.target as HTMLSelectElement).value == 'A') {
          this.gradeA++
        } else if ((event.target as HTMLSelectElement).value == 'B') {
          this.gradeB++
        } else if ((event.target as HTMLSelectElement).value == 'C') {
          this.gradeC++
        } else if ((event.target as HTMLSelectElement).value == 'D') {
          this.gradeD++
        } else if ((event.target as HTMLSelectElement).value == 'F') {
          this.gradeF++
        }
        if (this.previousGrade01 == 'A') {
          this.gradeA--
        } else if (this.previousGrade01 == 'B') {
          this.gradeB--
        } else if (this.previousGrade01 == 'C') {
          this.gradeC--
        } else if (this.previousGrade01 == 'D') {
          this.gradeD--
        } else if (this.previousGrade01 == 'F') {
          this.gradeF--
        }
      }
    }else{
      if ((event.target as HTMLSelectElement).value == 'A') {
        this.gradeA++
      } else if ((event.target as HTMLSelectElement).value == 'B') {
        this.gradeB++
      } else if ((event.target as HTMLSelectElement).value == 'C') {
        this.gradeC++
      } else if ((event.target as HTMLSelectElement).value == 'D') {
        this.gradeD++
      } else if ((event.target as HTMLSelectElement).value == 'F') {
        this.gradeF++
      }
    }
    this.previousGrade01=(event.target as HTMLSelectElement).value;

      this.numOfGradedStudent = this.gradeA + this.gradeB + this.gradeC + this.gradeD + this.gradeF;
      this.gpaOfCourse = ((4 * this.gradeA) + (3 * this.gradeB) + (2 * this.gradeC) + (this.gradeD)) / this.numOfGradedStudent;
  }

  onClickGrade02(event: Event) {
    if (this.previousGrade02!==null) {
      if (this.previousGrade02 !== (event.target as HTMLSelectElement).value) {
        if ((event.target as HTMLSelectElement).value == 'A') {
          this.gradeA++
        } else if ((event.target as HTMLSelectElement).value == 'B') {
          this.gradeB++
        } else if ((event.target as HTMLSelectElement).value == 'C') {
          this.gradeC++
        } else if ((event.target as HTMLSelectElement).value == 'D') {
          this.gradeD++
        } else if ((event.target as HTMLSelectElement).value == 'F') {
          this.gradeF++
        }
        if (this.previousGrade02 == 'A') {
          this.gradeA--
        } else if (this.previousGrade02 == 'B') {
          this.gradeB--
        } else if (this.previousGrade02 == 'C') {
          this.gradeC--
        } else if (this.previousGrade02 == 'D') {
          this.gradeD--
        } else if (this.previousGrade02 == 'F') {
          this.gradeF--
        }
      }
    }else{
      if ((event.target as HTMLSelectElement).value == 'A') {
        this.gradeA++
      } else if ((event.target as HTMLSelectElement).value == 'B') {
        this.gradeB++
      } else if ((event.target as HTMLSelectElement).value == 'C') {
        this.gradeC++
      } else if ((event.target as HTMLSelectElement).value == 'D') {
        this.gradeD++
      } else if ((event.target as HTMLSelectElement).value == 'F') {
        this.gradeF++
      }
    }
    this.previousGrade02=(event.target as HTMLSelectElement).value;

    this.numOfGradedStudent = this.gradeA + this.gradeB + this.gradeC + this.gradeD + this.gradeF;
    this.gpaOfCourse = ((4 * this.gradeA) + (3 * this.gradeB) + (2 * this.gradeC) + (this.gradeD)) / this.numOfGradedStudent;
  }

  onClickGrade03(event: Event) {
    if (this.previousGrade03!==null) {
      if (this.previousGrade03 !== (event.target as HTMLSelectElement).value) {
        if ((event.target as HTMLSelectElement).value == 'A') {
          this.gradeA++
        } else if ((event.target as HTMLSelectElement).value == 'B') {
          this.gradeB++
        } else if ((event.target as HTMLSelectElement).value == 'C') {
          this.gradeC++
        } else if ((event.target as HTMLSelectElement).value == 'D') {
          this.gradeD++
        } else if ((event.target as HTMLSelectElement).value == 'F') {
          this.gradeF++
        }
        if (this.previousGrade03 == 'A') {
          this.gradeA--
        } else if (this.previousGrade03 == 'B') {
          this.gradeB--
        } else if (this.previousGrade03 == 'C') {
          this.gradeC--
        } else if (this.previousGrade03 == 'D') {
          this.gradeD--
        } else if (this.previousGrade03 == 'F') {
          this.gradeF--
        }
      }
    }else{
      if ((event.target as HTMLSelectElement).value == 'A') {
        this.gradeA++
      } else if ((event.target as HTMLSelectElement).value == 'B') {
        this.gradeB++
      } else if ((event.target as HTMLSelectElement).value == 'C') {
        this.gradeC++
      } else if ((event.target as HTMLSelectElement).value == 'D') {
        this.gradeD++
      } else if ((event.target as HTMLSelectElement).value == 'F') {
        this.gradeF++
      }
    }
    this.previousGrade03=(event.target as HTMLSelectElement).value;

    this.numOfGradedStudent = this.gradeA + this.gradeB + this.gradeC + this.gradeD + this.gradeF;
    this.gpaOfCourse = ((4 * this.gradeA) + (3 * this.gradeB) + (2 * this.gradeC) + (this.gradeD)) / this.numOfGradedStudent;
  }

  private generateStudentData() {
    let student: Student;
    for(let i = 0 ; i < this.course.students.length ; i++){
      this.studentDataService.getStudent(this.course.students[i])
        .subscribe(s=>{
          student = s;
          this.students.push(student);
        });
    }
  }

  gradeChanged(event: Event,gradeIndex: number, student:Student){
    student.grade[gradeIndex] = (event.target as HTMLSelectElement).value;
    this.studentDataService.updateCourse(student);
    this.students.splice(this.students.indexOf(student),1);
  }
}
