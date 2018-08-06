import * as actionTypes from "../../const/OpActionTypes.js";

const initState = {
    dataSource: {
        entities:{},
        result:[]
    },
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
            },
            list:{
                entities:{},
                result:[]
            }
        },
        
    },
    list:{
        entities:{},
        result:[]
    }
};

export default function todoList(state = initState, action) {
    const a = `${actionTypes.FETCH_CLASS}_SUC`;
    const b = `${actionTypes.FETCH_CLASS_INFO}_SUC`;
    const c = `${actionTypes.FETCH_SATISFILED_LIST}_SUC`
    switch (action.type) {
        case a: {
            const newState = {...state}; 
            newState.dataSource = action.response.current;
            return newState;
        }    
        case b:{
            const newState1 = {...state};
            newState1.classInfo.basic_info = action.response;
            return newState1;
        }
        case c:{
            const newStateC = {...state};
            newStateC.list = action.response;
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