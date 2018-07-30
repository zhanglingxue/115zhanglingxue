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
        case actionTypes.ADD_MESSAGE: { //检测只有置顶然后添加时的判断操作
            const newMessage = state.messages.slice();
            const newList = { ...state };
            let temp = null;
            let n = 0;
            for (n = 0;n < newMessage.length;n ++) {
                if (!newMessage[n].isTop) {
                    temp = n;
                    break;
                }
            }
            if(n === newMessage.length){  //判断当前所有元素全为置顶元素，添加item直接push
                newMessage.push(action.item)
                newList.messages = newMessage;
            }else{
                const topArray = newMessage.splice(0, temp); //分开置顶与未置顶元素
                topArray.push(action.item) //将添加item加入置顶数组末端
                const newMess = topArray.concat(newMessage); 
                newList.messages = newMess;
            }
            return newList;
        }
        case actionTypes.DELETE_MESSAGE: { //删除某一行元素
            const copeState = { ...state };
            const copeMessages = state.messages.slice();
            const { idx } = action;
            copeMessages.splice(idx, 1);
            copeState.messages = copeMessages;
            return copeState;
        }
        case actionTypes.TOP_MESSAGE: { //置顶某一行元素，将自带的isTop置为true
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
        case actionTypes.DELETE_ITEM: { //批量删除
            const newState = {...state};
            let newMessages = state.messages;
            newMessages = action.item;
            newState.messages = newMessages;
            return newState;
        }
        default:
            return state;
    }
}
