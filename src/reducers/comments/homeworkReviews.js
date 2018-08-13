import * as actionTypes from "../../const/OpActionTypes";
const init_state = {
    data:{
        level:{
            1001:{
                id:1001,
                name:'爱启迪集团',
                secondLevel:[100101,100102],
            },
            1002:{
                id:1002,
                name:'小年糕',
                secondLevel:[100201],
            }
        },
        secondLevel:{
            100101:{
                id:100101,
                name:'广州分公司',
                threeLevel:[10010101,10010102,10010103],
            },
            100102:{
                id:100102,
                name:'北京分公司',
                threeLevel:[],
            },
            100201:{
                id:100201,
                name:'河北分公司',
                threeLevel:[],
            }
        },
        threeLevel:{
            10010101:{
                id:10010101,
                name:'总经办',
                group:[],
                user:[2018003,2018002]
            },
            10010102:{
                id:10010102,
                name:'财务部',
                group:[],
                user:[2018003,2018005,2018001,2018002]
            },
            10010103:{
                id:10010103,
                name:'产品研发部',
                group:[1001010301,1001010302,1001010303],
                user:[]
            }
        },
        group:{
            1001010301:{
                id:1001010301,
                name:'开发一组',
                user:[2018001,2018002,2018003],
            },
            1001010302:{
                id:1001010302,
                name:'开发二组',
                user:[2018004,2018005,2018002],
            },
            1001010303:{
                id:1001010303,
                name:'测试组',
                user:[2018003,2018005,2018001,2018002]
            }
        },
        user:{
            2018001:{
                mid:2018001,
                name:'小猫',
                isSeleted:false,
            },
            2018002:{
                mid:2018002,
                name:'大狗',
                isSeleted:false,
            },
            2018003:{
                mid:2018003,
                name:'大猫',
                isSeleted:false,
            },
            2018004:{
                mid:2018004,
                name:'大狗',
                isSeleted:false,
            },
            2018005:{
                mid:2018005,
                name:'兔兔',
                isSeleted:false,
            },
        }
        
    },
    level:[1001,1002],
    user:[2018001,2018002,2018003,2018004,2018005],
    array:[],
}

export default function todoList(state = init_state, action) {
    switch (action.type) {
        case actionTypes.USER_CHANCE:{
            const newState = {...state};
            let array = action.key[0].split(',');
            let newUser = state.user.slice();
            newUser = array;
            newState.user = newUser;
            return newState;
        }
        case actionTypes.SUBMIT_USER_NAME:{
            
            return {
                ...state,
                array:action.item,
            }
        }
        case actionTypes.DELETE_ARR_USER:{
            return {
                ...state,
                array:[]
            }
        }
        case actionTypes.SEARCH_NAME:{
            const newState = {...state};
            let array = [];
            for(let i in newState.user){
                if(newState.data.user[newState.user[i]].name === action.value){
                    array.push(newState.user[i]);
                }
            }
            return{
                ...state,
                user:array,
            }
        }
        case actionTypes.SEARCH_DELETE_USER:{
            const newState = {...state};
            let array = [];
            if(newState.array.length === 0){
                return {
                    ...state,
                    array:[]
                }
            }else{
                for(let i in newState.array){
                    if(newState.data.user[newState.array[i]].name === action.value){
                        array.push(newState.array[i]);
                    }
                }
                return{
                    ...state,
                    array:array,
                }
            }
            
        }
        case actionTypes.CHANCE_CLASS_NAME:{
            const newState = {...state};
            let newUser = {...state.data.user}
            newUser[action.idx].isSeleted = !newUser[action.idx].isSeleted;
            newState.data.user = newUser;
            return {
                ...newState,
            }
        }
        default:
            return state;
    }
}