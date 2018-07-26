import {
    ADD_TODO,
    MORE_CHANCE,
    ADD_MESSAGE,
    DELETE_MESSAGE,
    TOP_MESSAGE
} from "../const/ActionTypes";

function AddTodoCreator(text) {
    return {
        type: ADD_TODO,
        text
    }
}
function moreChance(idx, multipleChoice) {
    return {
        type: MORE_CHANCE,
        idx,
        multipleChoice
    }
}
function addMess(item) {
    return {
        type: ADD_MESSAGE,
        item
    }
}
function deleteMessage(idx, multipleChoice) {
    return {
        type: DELETE_MESSAGE,
        idx,
        multipleChoice
    }
}
function topMessages(idx, isTop, multipleChoice) {
    return {
        type: TOP_MESSAGE,
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