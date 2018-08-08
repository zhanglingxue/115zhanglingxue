import { schema } from 'normalizr';

const classes = new schema.Entity('classes', {}, {
    idAttribute: 'id'
});
const teachers = new schema.Entity('teachers',{},{
    idAttribute:'id'
})
const authors = new schema.Entity('authors',{},{
    idAttribute:'mid'
})
const comments = new schema.Entity('comments',{},{
    idAttribute:'id'
})
const commentSchema = [ comments ]

const satisfiled = new schema.Entity('satisfiled',{
    class_info:classes,
    teacher_info:teachers
},{
    idAttribute:'time'
})


const postData = new schema.Entity('postData',{
    classInfo:classes,
    author:authors,
    comments:commentSchema,
    teacherInfo:teachers,
},{
    idAttribute:'id'
})


const studentList = new schema.Entity('studentList',{},{
    idAttribute:'mid'
})
const basicInfo = new schema.Entity('basicInfo',{},{
    idAttribute:'time'
})
const classInfo = new schema.Entity('classInfo',{
    classInfo:classes,
    teacherInfo:teachers
},{
    idAttribute:'id'
})

export const SATISFILEDLIST = [ satisfiled ];
export const STUDENTLIST = [ studentList ];
export const BASICINFO = [ basicInfo ];
export const CLASSINFO = [ classInfo ];

export const POSTDATA = [ postData ];
