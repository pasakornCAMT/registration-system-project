import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddCourseComponent} from './add-course/add-course.component';

const courseRoute: Routes =
  [
    {path: 'add-course', component: AddCourseComponent},
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(courseRoute)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class CourseRoutingModule {
}
