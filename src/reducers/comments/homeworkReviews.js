import * as actionTypes from "../../const/OpActionTypes";
const init_state = {
    level:101,
    user:[2018001,2018002,2018003,2018004,2018005],
    array:[],
}

export default function todoList(state = init_state, action) {
    switch (action.type) {
        case actionTypes.USER_CHANCE:{
            return {
                ...state,
                user:action.key
            }
        }
        case actionTypes.SUBMIT_USER_NAME:{
            let newArr = state.array.slice();
            for(let i in action.item){
                let index = newArr.indexOf(action.item[i]);
                if(index === -1){
                    newArr.push(action.item[i])
                }
            }
            return {
                ...state,
                array:newArr
            }
        }
        case actionTypes.DELETE_ARR_USER:{
            let newArr = state.array.slice();
            for(let i in action.item){
                let temp = newArr.indexOf(action.item[i]);
                if(temp > -1){
                    newArr.splice(temp,1)
                }
            }
            return {
                ...state,
                array:newArr
            }
        }
        case actionTypes.SEARCH_NAME:{
            return {
                ...state,
                user:action.value
            }
        }
        case actionTypes.SEARCH_DELETE_USER:{
            return {
                ...state,
                array:action.value
            }
        }
        default:
            return state;
    }
}