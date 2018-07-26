import * as actionTypes from "../const/ActionTypes";

function AddTodoCreator(text) {
    return {
        type: actionTypes.ADD_TODO,
        text
    }
}
function moreChance(idx, multipleChoice) {
    return {
        type: actionTypes.MORE_CHANCE,
        idx,
        multipleChoice
    }
}
function addMess(item) {
    return {
        type: actionTypes.ADD_MESSAGE,
        item
    }
}
function deleteMessage(idx, multipleChoice) {
    return {
        type: actionTypes.DELETE_MESSAGE,
        idx,
        multipleChoice
    }
}
function topMessages(idx, isTop, multipleChoice) {
    return {
        type: actionTypes.TOP_MESSAGE,
        idx,
        isTop,
        multipleChoice
    }
}

export {
    AddTodoCreator,
    moreChance,
    addMess,
    deleteMessage,
    topMessages
}