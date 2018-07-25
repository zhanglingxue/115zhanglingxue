import { ADD_TODO, MORE_CHANCE, ADD_MESSAGE, DELETE_MESSAGE,TOP_MESSAGE } from "../const/ActionTypes";

export function AddTodoCreator(text) {
    return {
        type: ADD_TODO,
        text
    }
}
export function moreChance(idx, multipleChoice) {
    return {
        type: MORE_CHANCE,
        idx,
        multipleChoice
    }
}
export function addMess(item) {
    return {
        type: ADD_MESSAGE,
        item
    }
}
export function deleteMessage(idx, multipleChoice) {
    return {
        type: DELETE_MESSAGE,
        idx,
        multipleChoice
    }
}
export function topMessages(idx,isTop,multipleChoice) {
    return {
        type:TOP_MESSAGE,
        idx,
        isTop,
        multipleChoice
    }
}