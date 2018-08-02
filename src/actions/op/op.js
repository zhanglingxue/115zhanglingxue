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

function fetchSatisfiledList(mid) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_SATISFILED_LIST,
      endpoint: '/getSatisfiledList',
      params: {
        mid
      }
    }
  }
}

function fetchChanceStudentList(mid) {
  return {
    type: actionTypes.FETCH_CHANCE_STUDENT_LIST,
    mid
  }
}

function fetChangeStatus(idx) {
  return {
    type: actionTypes.FETCH_CHANGE_STATUS,
    idx
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