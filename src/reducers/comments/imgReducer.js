import * as actionTypes from '../../const/OpActionTypes';

export default function todoList(state = [], action) {
  switch (action.type) {
    case `${actionTypes.FETCH_UNREVIEWED}_SUC`: {
      const newState = action.response.result;
      return newState;
    }
    // case actionTypes.FETCH_COMMENT:{
    //     let newArr = [];
    //     if(action.idx) {
    //         for(let i in state){
    //             if(state[i] === action.idx) {
    //                 newArr.push(state[i])
    //             }
    //         }
    //         return newArr;
    //     }else return state;

    // }
    default:
      return state;
  }
}
