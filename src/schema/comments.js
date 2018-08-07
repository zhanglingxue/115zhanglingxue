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


export const POSTDATA = [ postData ];
