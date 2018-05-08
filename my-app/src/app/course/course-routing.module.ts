import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddCourseComponent} from './add-course/add-course.component';
import {ListCourseComponent} from "./list-course/list-course.component";
import {ViewCourseComponent} from "./view-course/view-course.component";

const courseRoute: Routes =
  [
    {path: 'add-course', component: AddCourseComponent},
    {path: 'course-list', component: ListCourseComponent},
    {path: 'view-course/:id', component: ViewCourseComponent},
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
