import * as actionTypes from "../../const/OpActionTypes";
import { normalize } from 'normalizr';
import * as schemes from '../../schema'

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

function deleteArrUser(item){
  return {
    type:actionTypes.DELETE_ARR_USER,
    item
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

function chanceClassName(idx){
  return{
    type:actionTypes.CHANCE_CLASS_NAME,
    idx
  }
}

export {
  fetchUserChance,
  submitUserName,
  deleteArrUser,
  searchName,
  searchDeleteUser,
  chanceClassName
}