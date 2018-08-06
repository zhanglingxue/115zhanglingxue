import '../../components/op/op.css'
import * as actionTypes from "../../const/OpActionTypes.js";

const initState = {
    dataSource: [], 
};

export default function todoList(state = initState, action) {
    const a = `${actionTypes.FETCH_CLASS}_SUC`;
    switch (action.type) {
        case a:
            return action.response.history;
        default:
            return state;
    }
}