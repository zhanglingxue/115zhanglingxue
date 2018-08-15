import { normalize } from 'normalizr';
import * as actionTypes from '../../const/OpActionTypes';
import * as schemes from '../../schema';

function fentchPostComment(item) {
  const token = item.token;
  const isReviewed = item.isReviewed;
  let type;
  if (token === 1 && isReviewed === 0) {
    type = actionTypes.FETCH_UNREVIEWED;
  } else if (token === 1 && isReviewed === 1) {
    type = actionTypes.FETCH_REVIEWED;
  } else if (token === 0 && isReviewed === 0) {
    type = actionTypes.FETCH_ALL_UNREVIEWED;
  } else if (token === 0 && isReviewed === 1) {
    type = actionTypes.FETCH_ALL_REVIEWED;
  }
  return {
    SERVER_API: {
      type,
      endpoint: '/getHomeWork',
      params: {
        token,
        isReviewed
      },
      normailzerFun: response => normalize(response.data, schemes.POSTDATA)
    }
  };
}

function returnComment(idx, item) {
  return {
    type: actionTypes.RETURN_COMMENT,
    idx,
    item
  };
}

function submitComment(json, item, id) {
  return {
    type: actionTypes.SUBMIT_COMMENT,
    json,
    item,
    id
  };
}

function fetchChanceSwitch(id) {
  return {
    type: actionTypes.CHANCE_SWITCH,
    id
  };
}

export {
  fentchPostComment,
  returnComment,
  submitComment,
  fetchChanceSwitch
};
