import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/view-student/student.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import {AppRoutingModule} from "./app-routing.module";
import {CourseRoutingModule} from "./course/course-routing.module";
import { TeacherComponent } from './teacher/view-teacher/teacher.component';
import { ViewCourseComponent } from './course/view-course/view-course.component';
import { ListCourseComponent } from './course/list-course/list-course.component';
import {StudentRoutingModule} from './student/student-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    StudentComponent,
    AddCourseComponent,
    TeacherComponent,
    ViewCourseComponent,
    ListCourseComponent
  ],
  imports: [
    BrowserModule,CourseRoutingModule,StudentRoutingModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
