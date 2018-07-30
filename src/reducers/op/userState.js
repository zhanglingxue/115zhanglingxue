import * as actionTypes from "../../const/OpActionTypes.js";

const initState = {
    user:[{
        img:require('../../img/1413.jpg'),
        classNum:'三班人',
        peopleNum:'MID33092018115',
        historyMoney:'987',
        phone:'15230529628',
        onTimeClass:'摄影课 绘画课',
        didStudy:'876天',
        weChatNum:'',
        entTime:'2018-03-30',
        lastLogin:'2018-03-30',
        note:'',
    }],
    map:[{
        peopleNum:'学员编号',
        onTimeClass:'在学课程',
        phone:'手机号码',
        historyMoney:'历史付费额',
        didStudy:'累计学习天数',
        lastLogin:'最后登录时间',
        entTime:'入学时间',
        weChatNum:'微信号码',
        note:'备注',
    }]
};

export default function todoList(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD_WE_CHAT:
            const newState = {...state};
            const newUser = state.user.slice();
            newUser[0][action.item] = action.text;
            newState.user = newUser;
            return newState;
        default:
            return state;
    }
}
