import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from './view-teacher/teacher.component';

const teacherRoute: Routes = [
  {path: 'view-teacher', component: TeacherComponent},
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
