import {Course} from "./course/course";
import {Teacher} from "./teacher/teacher";

export const COURSES: Course[]=[
  {
    'id':1,
    'courseId':'021251',
    'name':'Mathematics',
    'seat':30,
    'credit':3,
    'teaching_course':[
      '001','002'
    ]
  },
  {
    'id':2,
    'courseId':'953322',
    'name':'Software construct',
    'seat':50,
    'credit':3,
    'teaching_course':[
      '001'
    ]
  },
  {
    'id':3,
    'courseId':'954441',
    'name':'Android Application',
    'seat':30,
    'credit':3,
    'teaching_course':[
      '002'
    ]
  }
];

export const TEACHERS: Teacher[]=[
  {
    'id':1,
    'teacherId':'001',
    'name':'Yingluck',
    'surname':'Chinnawat',
  },
  {
    'id':2,
    'teacherId':'002',
    'name':'Mark',
    'surname':'Apisit'
  }
];
