import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Course} from '../course/course';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseDataFirestoreService {
  //this.courses = this.afs.collection('courses').valueChanges();
  coursesCollection: AngularFirestoreCollection<Course>;
  courses: Observable<Course[]>;
  courseDoc: AngularFirestoreDocument<Course>;
  course: Observable<Course>;
  constructor(public afs: AngularFirestore) {
    this.coursesCollection = this.afs.collection('courses');
  }
  getCourses(){
    this.courses = this.coursesCollection.snapshotChanges().map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Course;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.courses;
  }

  getCourse(id:string){
    this.courseDoc = this.afs.doc<Course>('courses/'+id);
    this.course = this.courseDoc.valueChanges();
    return this.course
  }

  addCourse(course:Course){
    this.coursesCollection.doc(course.courseId).set(course);
  }


}
