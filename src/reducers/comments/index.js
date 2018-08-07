import { combineReducers } from 'redux';
import imgReducer from '../comments/imgReducer'
import entities from '../comments/entities'

export default combineReducers({
    imgReducer,
    entities
});