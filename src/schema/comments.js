import { schema } from 'normalizr';

const classes = new schema.Entity('classes', {}, {
    idAttribute: 'id'
});
const authors = new schema.Entity('authors',{},{
    idAttribute:'mid'
})
const teachers = new schema.Entity('teachers',{},{
    idAttribute:'id'
})

const postData = new schema.Entity('postData',{
    classInfo:classes,
    author:authors,
    teacherInfo:teachers,
},{
    idAttribute:'id'
})

const myComment = new schema.Entity('myComment',{
    classInfo:classes,
    author:authors,
    teacherInfo:teachers,
},{
    idAttribute:'id'
})

const noComment = new schema.Entity('noComment',{
    classInfo:classes,
    author:authors,
    teacherInfo:teachers,
},{
    idAttribute:'id'
})

const allComment = new schema.Entity('allComment',{
    classInfo:classes,
    author:authors,
    teacherInfo:teachers,
},{
    idAttribute:'id'
})


export const POSTDATA = [ postData ];
export const MYCOMMENT = [ myComment ];
export const NOCOMMENT = [ noComment ];
export const ALLCOMMENT = [ allComment ]
