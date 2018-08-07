import * as actionTypes from "../../const/OpActionTypes.js";
import { normalize } from 'normalizr';
import * as schemes from '../../schema'

function fetchUserInfo(mid) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_USER,
      endpoint: '/getUserInfo',
      params: {
        mid
      }
    }
  }
}
  
function fetchLessonInfo(mid) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_CLASS,
      endpoint: '/getLessonInfo',
      params: {
        mid
      },
      normailzerFun:response => {
        const current = normalize(response.data.currentLessonsList, schemes.CLASSINFO);
        const history = normalize(response.data.historyLessonsList, schemes.CLASSINFO);
        return {
          current,
          history
        }
      }
    }
  }
}

function fetchStudentList(mid) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_STUDENT_LIST,
      endpoint: '/getStudentList',
      params: {
        mid
      },
      normailzerFun:response => normalize(response.data, schemes.STUDENTLIST),
    }
  }
}

function fetchClassInfo(id) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_CLASS_INFO,
      endpoint: '/getClassInfo',
      params: {
        id
      },
      normailzerFun:response =>{ 
        const list = normalize(response.data.list, schemes.BASICINFO)
        const basic_info = response.data.basic_info
        console.log(response.data.basic_info)
        return {
          basic_info,
          list
        }
      } 
    }
  }
}

function fetchSatisfiledList(mid) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_SATISFILED_LIST,
      endpoint: '/getSatisfiledList',
      params: {
        mid
      },
      normailzerFun:response => normalize(response.data.list, schemes.SATISFILEDLIST),
    }
  }
}

function fetchChanceStudentList(mid) {
  return {
    type: actionTypes.FETCH_CHANCE_STUDENT_LIST,
    mid
  }
}

function fetChangeStatus(time) {
  return {
    type: actionTypes.FETCH_CHANGE_STATUS,
    time
  }
}


export {
    fetchUserInfo,
    fetchLessonInfo,
    fetchStudentList,
    fetchClassInfo,
    fetchChanceStudentList,
    fetchSatisfiledList,
    fetChangeStatus,
}