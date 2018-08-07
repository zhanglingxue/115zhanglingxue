import * as actionTypes from "../../const/commentSctionType";

export default function todoList(state = [], action) {
    switch (action.type) {
        case `${actionTypes.FETCH_HOME_WORK_COMMENT}_SUC`:{
            const newState = action.response.result;
            return newState;
        }
        default:
            return state;
    }
}