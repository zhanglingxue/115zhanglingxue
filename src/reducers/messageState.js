import * as actionTypes from "../const/ActionTypes";

const initState = {
    messages: [
        {
            img: require('../img/1414.jpg'),
            title: '打火机与公主裙',
            description: '[小程序]到保定的火车票太难抢啦，需要你助我一臂之力',
            time: '下午2:31',
            isTop:false,
        },
        {
            img: require('../img/1413.jpg'),
            title: '小年糕前端集训营',
            description: '[链接]',
            time: '早上9:06',
            isTop:false,
        },
        {
            img: require('../img/people.jpg'),
            title: '淑芬',
            description: '淑芬淑芬淑芬',
            time: '昨天12:06',
            isTop:false,
        },
    ],
};

export default function todoList(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE: {
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
        case actionTypes.MORE_CHANCE: {
            const newState = { ...state };
            return newState;
        }
        case actionTypes.DELETE_MESSAGE: {
            const copeState = { ...state };
            const copeMessages = state.messages.slice();
            const { idx } = action;
            copeMessages.splice(idx, 1);
            copeState.messages = copeMessages;
            return copeState;
        }
        case actionTypes.TOP_MESSAGE: {
            const idx = action.idx;
            const _state = { ...state };
            const _message = state.messages.slice();
            _message[idx].isTop = action.isTop;
            const temp = _message[idx];
            _message.splice(idx, 1);
            _message.unshift(temp);
            _state.messages = _message;
            return _state;
        }
        default:
            return state;
    }
}
