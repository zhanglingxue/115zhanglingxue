import {
    MORE_CHANCE,
    ADD_MESSAGE,
    DELETE_MESSAGE,
    TOP_MESSAGE
} from "../const/ActionTypes";
import { initState } from "../store";

export default function todoList(state = initState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = state.messages.slice();
            const newList = { ...state };
            let temp = null;
            for (let index in newMessage) {
                if (!newMessage[index].isTop) {
                    temp = index;
                    break;
                }
            }
            const topArray = newMessage.splice(0, temp);
            topArray.push({
                ...action.item,
            })
            const newMess = topArray.concat(newMessage);
            newList.messages = newMess;
            return newList;
        }
        case MORE_CHANCE: {
            const newState = { ...state };
            newState.idx = action.idx;
            newState.multipleChoice = action.multipleChoice;
            return newState;
        }
        case DELETE_MESSAGE: {
            const copeState = { ...state };
            const copeMessages = state.messages.slice();
            const { idx, multipleChoice } = action;
            copeMessages.splice(idx, 1);
            copeState.messages = copeMessages;
            copeState.multipleChoice = multipleChoice;
            return copeState;
        }
        case TOP_MESSAGE: {
            const idx = action.idx;
            const _state = { ...state };
            const _message = state.messages.slice();
            _message[idx].isTop = action.isTop;
            const temp = _message[idx];
            _message.splice(idx, 1);
            _message.unshift(temp);
            _state.messages = _message;
            _state.multipleChoice = action.multipleChoice
            return _state;
        }
        default:
            return state;
    }
}

