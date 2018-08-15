import * as actionTypes from '../../const/OpActionTypes';

export default function todoList(state = [], action) {
  switch (action.type) {
    case `${actionTypes.FETCH_ALL_REVIEWED}_SUC`: {
      const newState = action.response.result;
      return newState;
    }
    default:
      return state;
  }
}
