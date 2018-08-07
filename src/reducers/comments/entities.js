import { combineReducers } from 'redux'
import * as actionTypes from "../../const/commentSctionType";

function classes (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_HOME_WORK}_SUC`: {
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
        case `${actionTypes.FETCH_HOME_WORK}_SUC`: {
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
        case `${actionTypes.FETCH_HOME_WORK}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.authors
            };
        }
        default:
            return state;
    }
}

function postData (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_HOME_WORK}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.postData
            };
        }
        default:
            return state;
    }
}

function myComment (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_HOME_WORK_COMMENT}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.myComment
            };
        }
        default:
            return state;
    }
}

function noComment (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_ALL_NO_COMMENT}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.noComment
            };
        }
        default:
            return state;
    }
}

function allComment (state = {},action){
    switch(action.type){
        case `${actionTypes.FETCH_ALL_COMMENT}_SUC`: {
            const entities =  action.response.entities
            return {
                ...state,
                ...entities.allComment
            };
        }
        default:
            return state;
    }
}

export default combineReducers({
  classes,
  teachers,
  author,
  postData,
  myComment,
  noComment,
  allComment
});