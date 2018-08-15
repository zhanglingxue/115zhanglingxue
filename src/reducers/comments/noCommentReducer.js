import * as actionTypes from '../../const/OpActionTypes';

const init_state = {
  unReviewed: [],
  reviewed: [],
  allUnReviewed: [],
  allReviewed: [],
  backArr: []
};

export default function todoList(state = init_state, action) {
  switch (action.type) {
    case `${actionTypes.FETCH_ALL_UNREVIEWED}_SUC`: {
      return {
        ...state,
        allUnReviewed: action.response.result
      };
    }
    case `${actionTypes.FETCH_ALL_REVIEWED}_SUC`: {
      return {
        ...state,
        allReviewed: action.response.result
      };
    }
    case `${actionTypes.FETCH_REVIEWED}_SUC`: {
      return {
        ...state,
        reviewed: action.response.result
      };
    }
    case `${actionTypes.FETCH_UNREVIEWED}_SUC`: {
      return {
        ...state,
        unReviewed: action.response.result
      };
    }
    case actionTypes.RETURN_COMMENT: {
      const backnewArr = [];
      backnewArr.push(action.idx);
      backnewArr.push(action.item);
      return {
        ...state,
        backArr: backnewArr
      };
    }
    default:
      return state;
  }
}
