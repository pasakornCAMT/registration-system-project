import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentComponent} from './view-student/student.component';
import {ViewStudentGpaComponent} from './view-student-gpa/view-student-gpa.component';

const studentRoute: Routes = [
  {path: 'view-student', component: StudentComponent},
  {path: 'view-student-gpa', component: ViewStudentGpaComponent},
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(studentRoute)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule{

}
