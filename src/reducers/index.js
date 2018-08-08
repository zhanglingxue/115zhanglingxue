import { combineReducers } from 'redux';
import historyNum from './op/historyNum';
import onTimeClass from './op/onTimeClass';
import userState from './op/userState';
import entities from './op/entities';
import imgReducer from './comments/imgReducer'
import myReducer from './comments/myReducer'
import noCommentReducer from './comments/noCommentReducer'
import allComment from './comments/allComment'


export default combineReducers({
    // historyNum,
    // onTimeClass,
    // userState,
    entities,
    noCommentReducer,
});