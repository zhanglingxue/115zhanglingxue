import { combineReducers } from 'redux';
import historyNum from './op/historyNum';
import onTimeClass from './op/onTimeClass';
import userState from './op/userState';
import entities from './op/entities';

export default combineReducers({
    historyNum,
    onTimeClass,
    userState,
    entities,
});