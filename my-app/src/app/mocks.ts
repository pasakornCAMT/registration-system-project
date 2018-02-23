import {Course} from "./course/course";
import {Teacher} from "./teacher/teacher";

export const COURSES: Course[]=[
  {
    'id':1,
    'courseId':'001',
    'credit':3,
    'name':'Course01',
    'semester':2,
    'year':'01/01/2011',
    'seat':30
  },
  {
    'id':2,
    'courseId':'002',
    'credit':3,
    'name':'Course02',
    'semester':2,
    'year':'01/01/2011',
    'seat':30
  },
  {
    'id':3,
    'courseId':'003',
    'credit':3,
    'name':'Course03',
    'semester':2,
    'year':'01/01/2011',
    'seat':30
  }
]

export const TEACHERS: Teacher[]=[
  {
    'id':1,
    'teacherId':'001',
    'teachername':'teacher001'
  },
  {
    'id':2,
    'teacherId':'002',
    'teachername':'teacher002'
  },
  {
    'id':3,
    'teacherId':'003',
    'teachername':'teacher003'
  }
]
