import * as actionTypes from "../../const/commentSctionType";
import { normalize } from 'normalizr';
import * as schemes from '../../schema/comments'

function fetchHomeWorkInfo(mid) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_HOME_WORK,
      endpoint: '/getHomeWork',
      params: {
        mid
      },
      normailzerFun:response => normalize(response.data, schemes.POSTDATA),
    }
  }
}

function fentchComments(idx) {
  return {
    type:actionTypes.FETCH_COMMENT,
    idx
  }
}
  
export {
  fetchHomeWorkInfo,
  fentchComments
}