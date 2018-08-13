import * as actionTypes from "../../const/OpActionTypes";
import { normalize } from 'normalizr';
import * as schemes from '../../schema'

function fentchPostComment(item) {
  const token = item.token;
  const isReviewed = item.isReviewed;
  let type;
  if(token === 1 && isReviewed === 0){
    type = actionTypes.FETCH_UNREVIEWED
  }else if(token === 1 && isReviewed === 1){
    type = actionTypes.FETCH_REVIEWED
  }else if(token === 0 && isReviewed === 0){
    type = actionTypes.FETCH_ALL_UNREVIEWED
  }else if(token === 0 && isReviewed === 1){
    type = actionTypes.FETCH_ALL_REVIEWED
  }
  return {
    SERVER_API: {
      type: type,
      endpoint: '/getHomeWork',
      params: {
        token,
        isReviewed
      },
      normailzerFun:response => normalize(response.data, schemes.POSTDATA),
    }
  }
}

function returnComment(idx,item){
  return {
    type:actionTypes.RETURN_COMMENT,
    idx,
    item
  }
}

function submitComment(json,item,id){
  return {
    type:actionTypes.SUBMIT_COMMENT,
    json,
    item,
    id
  }
}

function fetchChanceSwitch(id){
  return {
    type:actionTypes.CHANCE_SWITCH,
    id
  }
}

function fetchUserChance(key,selected){
  return {
    type:actionTypes.USER_CHANCE,
    key,
    selected
  }
}

function submitUserName(item){
  return {
    type:actionTypes.SUBMIT_USER_NAME,
    item
  }
}

function deleteArrUser(){
  return {
    type:actionTypes.DELETE_ARR_USER,
  }
}

function searchName(value){
  return {
    type:actionTypes.SEARCH_NAME,
    value
  }
}

function searchDeleteUser(value){
  return{
    type:actionTypes.SEARCH_DELETE_USER,
    value
  }
}

export {
  fentchPostComment,
  returnComment,
  submitComment,
  fetchChanceSwitch,

  fetchUserChance,
  submitUserName,
  deleteArrUser,
  searchName,
  searchDeleteUser
}