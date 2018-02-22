import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import {AppRoutingModule} from "./app-routing.module";
import {CourseRoutingModule} from "./course/course-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,CourseRoutingModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
