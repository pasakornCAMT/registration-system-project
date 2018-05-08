import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Student} from '../student/student';


@Injectable()
export class StudentDataFirestoreService {
  studentDoc: AngularFirestoreDocument<Student>;
  student: Observable<Student>;
  studentsCollection: AngularFirestoreCollection<Student>;
  students: Observable<Student[]>;

  constructor(public afs: AngularFirestore) {
  }

  getStudents() {
    this.students = this.studentsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Student;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.students;
  }

  getStudent(id: string) {
    this.studentDoc = this.afs.doc<Student>('students/' + id);
    this.student = this.studentDoc.valueChanges();
    return this.student;
  }

  getStudentByEmail(email: string) {
    this.students = this.afs.collection<Student>('students', ref => ref.where('email', '==', email)).valueChanges();
    return this.students;
  }

  updateCourse(student: Student) {
    //this.studentsCollection.doc(student.studentId).update(student);
    console.log(student.enrolledCourse);
    this.studentDoc = this.afs.doc<Student>('students/' + student.studentId);
    this.studentDoc.update(student);
  }
}


