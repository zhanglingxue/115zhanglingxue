import * as actionTypes from "../../const/OpActionTypes.js";

function AddWeChat(text) {
    return {
        type: actionTypes.ADD_WE_CHAT,
        text
    }
}
function Note(idx, multipleChoice) {
    return {
        type: actionTypes.NOTE,
        idx,
        multipleChoice        
    }
}

export {
    AddWeChat,
    Note,
}