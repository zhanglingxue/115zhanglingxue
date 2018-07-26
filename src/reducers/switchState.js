import * as actionTypes from "../const/ActionTypes";

const initState = {
    multipleChoice: false,
    idx: null,
    deleteArray:[],
};

export default function todoList(state = initState, action) {
    switch (action.type) {
        case actionTypes.MORE_CHANCE: {
            const newState = { ...state };
            newState.idx = action.idx;
            newState.multipleChoice = action.multipleChoice;
            return newState;
        }
        case actionTypes.DELETE_MESSAGE: {
            const copeState = { ...state };
            const { multipleChoice } = action;
            copeState.multipleChoice = multipleChoice;
            return copeState;
        }
        case actionTypes.TOP_MESSAGE: {
            const _state = { ...state };
            _state.multipleChoice = action.multipleChoice
            return _state;
        }
        default:
            return state;
    }
}

