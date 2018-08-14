import { combineReducers } from 'redux'
import * as actionTypes from "../../const/OpActionTypes.js";

function classes (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_SATISFILED_LIST}_SUC`: {
            const entities =  action.response.entities;
            return {
                ...state,
                ...entities.classes
            };
        }
        case `${actionTypes.FETCH_CLASS}_SUC`:{
            const currentEntities = action.response.current.entities;
            const historyEntities = action.response.history.entities;
            return {
                ...state,
                ...currentEntities.classes,
                ...historyEntities.classes
            }
        }
        case `${actionTypes.FETCH_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_REVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_REVIEWED}_SUC`:{
            const entities =  action.response.entities;
            return {
                ...state,
                ...entities.classes
            };
        }
        default:
            return state;
    }
}

function teachers (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_SATISFILED_LIST}_SUC`: {
            const entities =  action.response.entities;
            return {
                ...state,
                ...entities.teachers
            };
        }
        case `${actionTypes.FETCH_CLASS}_SUC`:{
            const currentEntities = action.response.current.entities;
            const historyEntities = action.response.history.entities;
            return {
                ...state,
                ...currentEntities.teachers,
                ...historyEntities.teachers
            }
        }
        case `${actionTypes.FETCH_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_REVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_REVIEWED}_SUC`: {
            const entities =  action.response.entities;
            return {
                ...state,
                ...entities.teachers
            };
        }
        default:
            return state;
    }
}

function author (state={},action) {
    switch(action.type){
        case `${actionTypes.FETCH_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_REVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_REVIEWED}_SUC`: {
            const entities =  action.response.entities;
            return {
                ...state,
                ...entities.authors
            };
        }
        default:
            return state;
    }
}

function comments (state={},action) {
    switch(action.type){
        case `${actionTypes.FETCH_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_REVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_REVIEWED}_SUC`: {
            const entities =  action.response.entities;
            return {
                ...state,
                ...entities.comments
            };
        }

        case actionTypes.SUBMIT_COMMENT:{
            let newState = {...state};        
            let mid = action.id;
            newState[mid] = action.json;
            return {
                ...newState,
            }
        }
        default:
            return state;
    }
}

function student (state={},action) {
    switch(action.type){
        case `${actionTypes.FETCH_STUDENT_LIST}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.studentList
            };
        }
        default:
            return state;
    }
}

function lesson (state={},action) {
    switch(action.type){
        case `${actionTypes.FETCH_CLASS_INFO}_SUC`: {
            const entities =  action.response.list.entities
            return {
                ...state,
                ...entities.basicInfo
            };
        }
        default:
            return state;
    }
}

function satisfiled (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_SATISFILED_LIST}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.satisfiled
            };
        }
        case actionTypes.FETCH_CHANGE_STATUS: {
            const newState2 = {...state};
            newState2[action.time].reply_status = 1;
            return newState2;
        }
        default:
            return state;
    }
}

function classInfo (state={},action) {
    switch(action.type){
        case `${actionTypes.FETCH_CLASS}_SUC`:{
            const currentEntities = action.response.current.entities;
            const historyEntities = action.response.history.entities;
            return {
                ...state,
                ...currentEntities.classInfo,
                ...historyEntities.classInfo
            }
        }
        default:
            return state;
    }
}

function postData (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_REVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_UNREVIEWED}_SUC`:
        case `${actionTypes.FETCH_ALL_REVIEWED}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.postData
            };
        }
        case actionTypes.SUBMIT_COMMENT:{
            let array = state[action.item.id].comments;
            array.push(action.id)
            state[action.item.id].comments = array;
            return {
                ...state,
            }
        }
        case actionTypes.CHANCE_SWITCH:{
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    isExcellent: !state[action.id].isExcellent
                }
            }
        }
        default:
            return state;
    }
}


function department (state={
    101:{id:101,name:'所有部门',child:[1001,1002],},
    1001:{id:1001,name:'爱启迪集团',child:[100101,100102],},
    1002:{id:1002,name:'小年糕',child:[100201],},
    100101:{id:100101,name:'广州分公司',child:[10010101,10010102,10010103],},
    100102:{id:100102,name:'北京分公司',child:[],},
    100201:{id:100201,name:'河北分公司',child:[],},
    10010101:{id:10010101,name:'总经办',child:[],user:[2018003,2018002]},
    10010102:{id:10010102,name:'财务部',child:[],user:[2018003,2018005,2018001,2018002]},
    10010103:{id:10010103,name:'产品研发部',child:[1001010301,1001010302,1001010303]},
    1001010301:{id:1001010301,name:'开发一组',user:[2018001,2018002,2018003]},
    1001010302:{id:1001010302,name:'开发二组',user:[2018004,2018005,2018002]},
    1001010303:{id:1001010303,name:'测试组',user:[2018003,2018005,2018001,2018002]},
},action) {
    switch(action.type){ 
        default:
            return state;
    }
}

function user (state={
    2018001:{mid:2018001,name:'小猫',isSeleted:false,},
    2018002:{mid:2018002,name:'大狗',isSeleted:false,},
    2018003:{mid:2018003,name:'大猫',isSeleted:false,},
    2018004:{mid:2018004,name:'大狗',isSeleted:false,},
    2018005:{mid:2018005,name:'兔兔',isSeleted:false,},
},action) {
    switch(action.type){ 
        default:
            return state;
    }
}

export default combineReducers({
  classes,
  teachers,
  satisfiled,
  student,
  classInfo,
  lesson,
  comments,
  author,
  postData,

  department,
  user
});