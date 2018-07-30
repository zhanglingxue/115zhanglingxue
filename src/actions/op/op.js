import * as actionTypes from "../../const/OpActionTypes.js";

function AddWeChat(text,item) {
    return {
        type: actionTypes.ADD_WE_CHAT,
        text,
        item
    }
}
function Note() {
    return {
        type: actionTypes.NOTE,        
    }
}

export {
    AddWeChat,
    Note,
}