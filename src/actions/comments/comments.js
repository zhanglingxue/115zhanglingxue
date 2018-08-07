import * as actionTypes from "../../const/commentSctionType";
import { normalize } from 'normalizr';
import * as schemes from '../../schema/comments'

function fetchHomeWorkInfo(token,isReviewed) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_HOME_WORK,
      endpoint: '/getHomeWork',
      params: {
        token,
        isReviewed
      },
      normailzerFun:response => normalize(response.data, schemes.POSTDATA),
    }
  }
}

function fetchMyComment(token,isReviewed) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_HOME_WORK_COMMENT,
      endpoint: '/getHomeWork',
      params: {
        token,
        isReviewed
      },
      normailzerFun:response => normalize(response.data, schemes.MYCOMMENT),
    }
  }
}

function fetchAllnoComment(token,isReviewed) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_ALL_NO_COMMENT,
      endpoint: '/getHomeWork',
      params: {
        token,
        isReviewed
      },
      normailzerFun:response => normalize(response.data, schemes.NOCOMMENT),
    }
  }
}

function fetchAllComment(token,isReviewed) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_ALL_COMMENT,
      endpoint: '/getHomeWork',
      params: {
        token,
        isReviewed
      },
      normailzerFun:response => normalize(response.data, schemes.ALLCOMMENT),
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
  fentchComments,
  fetchMyComment,
  fetchAllnoComment,
  fetchAllComment
}