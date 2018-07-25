
import { MORE_CHANCE, ADD_MESSAGE, DELETE_MESSAGE,TOP_MESSAGE } from "../const/ActionTypes";
import {initState} from "../store";

export default function todoList(state = initState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = state.messages.slice();
            const newList = { ...state };
            let temp = null;
            for(let index in newMessage){
                if(!newMessage[index].isTop){
                    temp = index;
                    break;
                }
            }
            const topArray = newMessage.splice(0,temp);
            topArray.push({
                ...action.item,
            })
            const newMess = topArray.concat(newMessage);
            newList.messages = newMess;
            return newList;
        }
        case MORE_CHANCE: {
            const newState = { ...state };
            const { idx, multipleChoice } = action;
            newState.idx = idx;
            newState.multipleChoice = multipleChoice;
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
            const { idx, isTop,multipleChoice } = action;
            const _state = {...state};
            const _message = state.messages.slice();
            _message[idx].isTop = isTop;
            const temp = _message[idx];
            _message.splice(idx,1);
            _message.unshift(temp);
            _state.messages = _message;
            _state.multipleChoice = multipleChoice
            return _state;
        }
        default:
            return state;
    }
}

