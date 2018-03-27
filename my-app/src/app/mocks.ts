import {Course} from "./course/course";
import {Teacher} from "./teacher/teacher";
import {Student} from './student/student';

export const COURSES: Course[]=[
  {
    'id':1,
    'courseId':'021251',
    'name':'Mathematics',
    'seat':30,
    'credit':3,
    'semester':'1',
    'year':2018,
    'teaching_course':[
      '001','002'
    ],
    'student_course':[
      '582115040','582115999'
    ]
  },
  {
    'id':2,
    'courseId':'953322',
    'name':'Software construct',
    'seat':50,
    'credit':3,
    'semester':'summer',
    'year':2018,
    'teaching_course':[
      '001'
    ],
    'student_course':[
      '582115040','582115999','582115000'
    ]
  },
  {
    'id':3,
    'courseId':'954441',
    'name':'Android Application',
    'seat':30,
    'credit':3,
    'semester':'2',
    'year':2018,
    'teaching_course':[
      '002'
    ],
    'student_course':[
      '582115040'
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

export const STUDENT: Student[]=[
  {
    'id':1,
    'studentId':'582115040',
    'name':'Pasakorn',
    'surname':'Kunchai',
    'enrolled_course':[
      '021251','953322','954441'
    ]
  },
  {
    'id':2,
    'studentId':'582115999',
    'name':'John',
    'surname':'Smith',
    'enrolled_course':[
      '021251','953322'
    ]
  },
  {
    'id':3,
    'studentId':'582115000',
    'name':'Yoko',
    'surname':'Yamada',
    'enrolled_course':[
      '953322'
    ]
  }
];
