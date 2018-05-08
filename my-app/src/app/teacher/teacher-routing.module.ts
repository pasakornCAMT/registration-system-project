import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from './view-teacher/teacher.component';
import {GradingComponent} from './grading/grading.component';

const teacherRoute: Routes = [
  {path: 'view-teacher', component: TeacherComponent},
  {path: 'grading/:id', component: GradingComponent},
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(teacherRoute)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class TeacherRoutingModule { }
