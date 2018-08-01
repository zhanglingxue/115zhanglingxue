import * as actionTypes from "../../const/OpActionTypes.js";

const initState = {
    dataSource: []
};

export default function todoList(state = initState, action) {
    const a = `${actionTypes.FETCH_CLASS}_SUC`;
    switch (action.type) {
        case a:
            const newState = {...state}; 
            let newData = state.dataSource.slice();
            newData = action.data.data.currentLessonsList;
            newState.dataSource = newData;
            return newState;
        default:
            return state;
    }
}
