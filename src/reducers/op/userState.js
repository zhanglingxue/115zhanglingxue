import * as actionTypes from '../../const/OpActionTypes';

const initState = {
  data: {
    hurl: '',
    nick: '',
    peopleNum: '',
    history_pay: '',
    tel: '',
    learningLesson: [],
    totalLearningDays: '',
    weiChatCode: '',
    enterDate: '',
    lastLoginDate: '',
    remark: ''
  },
  list: {
    result: []
  }
};
export default function todoList(state = initState, action) {
  const a = `${actionTypes.FETCH_USER}_SUC`;
  const b = `${actionTypes.FETCH_STUDENT_LIST}_SUC`;
  const c = actionTypes.FETCH_CHANCE_STUDENT_LIST;
  switch (action.type) {
    case a: {
      const newState = { ...state };
      newState.data = action.response.data;
      return newState;
    }
    case b: {
      const newState1 = { ...state };
      newState1.list.result = action.response.result;
      return newState1;
    }
    case c: {
      const ChanceState = { ...state };
      const temp = ChanceState.list.result.slice();
      const mid = parseFloat(action.mid);
      const newArr = [];
      for (const i in temp) {
        if (temp[i] === mid) {
          newArr.push(temp[i]);
        }
      }
      ChanceState.list.result = newArr;
      return ChanceState;
    }
    default:
      return state;
  }
}
