import * as actionTypes from "../../const/OpActionTypes.js";

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
      }
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
      }
    }
  }
}
export {
    fetchUserInfo,
    fetchLessonInfo,
    fetchStudentList,
    fetchClassInfo
}