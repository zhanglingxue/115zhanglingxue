import { combineReducers } from 'redux';
import historyNum from './op/historyNum';
import onTimeClass from './op/onTimeClass';
import userState from './op/userState';
import columns from './op/columns';

export default combineReducers({
    historyNum,
    onTimeClass,
    userState,
    columns
});