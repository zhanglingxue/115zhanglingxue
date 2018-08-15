import * as actionTypes from '../../const/OpActionTypes.js';

const initState = {
  dataSource: [],
  classInfo: {
    basic_info: {
      id: '',
      name: '',
      real_teacher: {
        mid: '',
        name: '',
        wx_code: ''
      },
      virtual_teacher: {
        id: '',
        nick: '',
        wx_code: ''
      }
    },
    list: []
  },
  list: {
    result: []
  }
};
export default function todoList(state = initState, action) {
  const a = `${actionTypes.FETCH_CLASS}_SUC`;
  const b = `${actionTypes.FETCH_CLASS_INFO}_SUC`;
  const c = `${actionTypes.FETCH_SATISFILED_LIST}_SUC`;
  switch (action.type) {
    case a: {
      const newState = { ...state };
      newState.dataSource = action.response.current.result;
      return newState;
    }
    case b: {
      const newState1 = { ...state };
      newState1.classInfo.basic_info = action.response.basic_info;
      newState1.classInfo.list = action.response.list.result;
      return newState1;
    }
    case c: {
      const newStateC = { ...state };
      newStateC.list.result = action.response.result;
      return newStateC;
    }
    default:
      return state;
  }
}
