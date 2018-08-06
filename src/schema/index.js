import { schema } from 'normalizr';

const classes = new schema.Entity('classes', {}, {
    idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
    idAttribute:'id'
})
const satisfiled = new schema.Entity('satisfiled',{
    class_info:classes,
    teacher_info:teacher
},{
    idAttribute:'time'
})


const studentList = new schema.Entity('studentList',{},{
    idAttribute:'mid'
})
const basicInfo = new schema.Entity('basicInfo',{},{
    idAttribute:'time'
})
const classInfo = new schema.Entity('classInfo',{
    classInfo:classes,
    teacherInfo:teacher
},{
    idAttribute:'id'
})

export const SATISFILEDLIST = [ satisfiled ];
export const STUDENTLIST = [ studentList ];
export const BASICINFO = [ basicInfo ];
export const CLASSINFO = [ classInfo ]