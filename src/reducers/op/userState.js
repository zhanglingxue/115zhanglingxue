import * as actionTypes from "../../const/OpActionTypes.js";

const initState = {
    data:{
        hurl:'',
        nick:'',
        peopleNum:'',
        history_pay:'',
        tel:'',
        learningLesson:[],
        totalLearningDays:'',
        weiChatCode:'',
        enterDate:'',
        lastLoginDate:'',
        remark:'',
    }
};

export default function todoList(state = initState, action) {
    const a = `${actionTypes.FETCH_USER}_SUC`;
    switch (action.type) {
        case a:
            const newState = action.data;
            return newState;
        default:
            return state;
    }
}
