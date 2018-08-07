import { combineReducers } from 'redux';
import imgReducer from '../comments/imgReducer'
import myReducer from '../comments/myReducer'
import entities from '../comments/entities'
import allComment from '../comments/allComment'
import noCommentReducer from '../comments/noCommentReducer'

export default combineReducers({
    imgReducer,
    entities,
    myReducer,
    noCommentReducer,
    allComment
});