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
    },
};

export default function todoList(state = initState, action) {
    const a = `${actionTypes.FETCH_CLASS}_SUC`;
    const b = `${actionTypes.FETCH_CLASS_INFO}_SUC`;
    const c = `${actionTypes.FETCH_SATISFILED_LIST}_SUC`
    switch (action.type) {
        case a: {
            const newState = {...state}; 
            let newData = state.dataSource.slice();
            newData = action.response.data.currentLessonsList;
            newState.dataSource = newData;
            return newState;
        }    
        case b:{
            const newState1 = {...state};
            newState1.classInfo = action.response.data;
            return newState1;
        }
        case c:{
            const newStateC = {...state};
            newStateC.list = action.response.data.list;
            return newStateC;
        }
        case actionTypes.FETCH_CHANGE_STATUS:{
            const newState2 = {...state};
            newState2.list[action.idx].reply_status = 1;
            return newState2;
        }

        default:
            return state;
    }
}