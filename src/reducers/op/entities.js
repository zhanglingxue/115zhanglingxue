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

function satisfiled (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_SATISFILED_LIST}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.satisfiled
            };
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

export default combineReducers({
  classes,
  teachers,
  satisfiled,
  student,
  classInfo
});