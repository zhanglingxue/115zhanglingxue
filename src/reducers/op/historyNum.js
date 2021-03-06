import '../../components/op/op.css';
import * as actionTypes from '../../const/OpActionTypes';

const initState = {
  dataSource: []
};

export default function todoList(state = initState, action) {
  const a = `${actionTypes.FETCH_CLASS}_SUC`;
  switch (action.type) {
    case a: {
      const newState = { ...state };
      newState.dataSource = action.response.history.result;
      return newState;
    }
    default:
      return state;
  }
}
