import * as actionTypes from "../../const/OpActionTypes.js";

function AddWeChat(item,idx) {
    return {
        type: actionTypes.ADD_WE_CHAT,
        item,
        idx
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