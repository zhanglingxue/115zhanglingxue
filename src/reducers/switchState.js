import * as actionTypes from "../const/ActionTypes";

const initState = {
    multipleChoice: false,
    idx: null,
    isChecked:false,
    deleteArray:[],
};

export default function todoList(state = initState, action) {
    switch (action.type) {
        case actionTypes.MORE_CHANCE: { //更多按钮弹出选择框
            const newState = { ...state };
            newState.idx = action.idx;
            newState.multipleChoice = action.multipleChoice;
            return newState;
        }
        case actionTypes.DELETE_MESSAGE: { //删除某一行元素后更改弹框状态
            const copeState = { ...state };
            const { multipleChoice } = action;
            copeState.multipleChoice = multipleChoice;
            return copeState;
        }
        case actionTypes.TOP_MESSAGE: { //置顶后更改弹框状态
            const _state = { ...state };
            _state.multipleChoice = action.multipleChoice
            return _state;
        }
        case actionTypes.DELETE_MORE_MESSAGES: { //点击多选删除更改弹框状态及显示勾框状态
            const newState = {...state};
            newState.idx = action.idx;
            newState.multipleChoice = action.multipleChoice;
            newState.isChecked = action.checked;
            return newState;
        }
        case actionTypes.OVER_DELETE: { //取消点击后更改勾框状态
            const newState = {...state};
            newState.isChecked = action.item
            return newState;
        }
        case actionTypes.ADD_DELETE_ARRAY: { //点击勾框将index值加入删除数组
            const newState = {...state};
            newState.deleteArray = action.item;
            return newState;
        }
        case actionTypes.DELETE_ITEM: { //批量删除后更改勾框状态
            const newState = {...state};
            newState.isChecked = action.isChecked;
            return newState;
        }
        default:
            return state;
    }
}

