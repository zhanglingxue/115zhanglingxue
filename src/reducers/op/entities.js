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
            let array = state[action.item].comments;
            array.push(action.id)
            state[action.item].comments = array;
            return {
                ...state,
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
  classInfo,
  lesson,
  comments,
  author,
  postData,
});