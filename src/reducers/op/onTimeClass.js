import * as actionTypes from "../../const/OpActionTypes.js";

const initState = {
    dataSource: [{
        classInfo: {
            id:'',
            name:''
        },
        status: '',
        startTime: '',  //开始时间
        teacherInfo:{
            id:'',
            mid:'',
            nick:'',
            realName:'',
            wxCode:''
        },
        enterRate:'',  //
        signRate:'',  //上课率
        homeworkSubmitRate:'',  
        beCommenttedRate:'',
        satisfyRate:'',  //满意度
    }]
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
