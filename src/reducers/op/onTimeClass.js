import * as actionTypes from "../../const/OpActionTypes.js";

const initState = {
    dataSource: [],
    classInfo:{
        basic_info:{
            id:'',
            name:'',
            real_teacher:{
                mid:'',
                name:'',
                wx_code:''
            },
            virtual_teacher:{
                id:'',
                nick:'',
                wx_code:''
            }
        },
        list:[],
    }
};

export default function todoList(state = initState, action) {
    const a = `${actionTypes.FETCH_CLASS}_SUC`;
    const b = `${actionTypes.FETCH_CLASS_INFO}_SUC`;
    switch (action.type) {
        case a:
            const newState = {...state}; 
            let newData = state.dataSource.slice();
            newData = action.response.data.currentLessonsList;
            newState.dataSource = newData;
            return newState;
        case b:
            const newState1 = {...state};
            newState1.classInfo = action.response.data;
            return newState1;
        default:
            return state;
    }
}
