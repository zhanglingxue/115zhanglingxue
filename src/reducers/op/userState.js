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
    },
    studentInfo:{
        data:[{
            enter_time:'',
            hurl:'',
            mid:'',
            learning_lessons:[],
            nick:'',
            teachers:'',
            start_time:'',
        }]
    },
};

export default function todoList(state = initState, action) {
    const a = `${actionTypes.FETCH_USER}_SUC`;
    const b = `${actionTypes.FETCH_STUDENT_LIST}_SUC`;
    const c = actionTypes.FETCH_CHANCE_STUDENT_LIST;
    switch (action.type) {
        case a:   
            const newState = {...state};
            newState.data = action.response.data;
            return newState;
        case b:
            const newState1 = {...state};
            newState1.studentInfo = action.response;
            return newState1;
        case c:
            const ChanceState = {...state};
            const temp = ChanceState.studentInfo.data.slice();
            const mid = parseFloat(action.mid);
            let newArr = []
            for(let i in temp){
                if(temp[i].mid === mid){
                    newArr.push(temp[i])
                }
            }
            ChanceState.studentInfo.data = newArr;
            return ChanceState;
        default:
            return state;
    }
}