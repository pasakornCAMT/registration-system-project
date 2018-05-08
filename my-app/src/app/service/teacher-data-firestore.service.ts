import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Teacher} from '../teacher/teacher';
import {Student} from '../student/student';

@Injectable()
export class TeacherDataFirestoreService {
  teacherDoc: AngularFirestoreDocument<Teacher>;
  teacher: Observable<Teacher>;
  teachersCollection: AngularFirestoreCollection<Teacher>;
  teachers: Observable<Teacher[]>;
  constructor(public afs: AngularFirestore) {

  }
  getTeacher(id:string){
    this.teacherDoc = this.afs.doc<Teacher>('teachers/'+id);
    this.teacher = this.teacherDoc.valueChanges();
    return this.teacher;
  }
  getTeacherByEmail(email:string){
    this.teachers = this.afs.collection<Teacher>('teachers',ref=>ref.where('email','==',email)).valueChanges();
    return this.teachers;
  }

}
