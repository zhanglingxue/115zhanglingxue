import React from 'react';
import { Icon } from 'antd'
import '../../components/op/op.css'
import * as actionTypes from "../../const/OpActionTypes.js";

const initState = {
    dataSource: [], 
    columns:[{
        title: '班级',
        dataIndex: 'classInfo.name',
        key: 'classInfo.id',
        align:'center',
        render:text => <div><Icon type="exclamation" />{text}</div>
    }, {
        title: '课程状态',
        dataIndex: 'status',
        key: 'status',
        align:'center',
        render:text => {
            if(text === 0){
                return <div>进行中</div>
            }else{
                return <div>已结束</div>
            }
        }
    }, {
        title: '开课时间',
        dataIndex: 'startTime',
        key: 'startTime',
        align:'center',
    },{
        title: '教学组负责人',
        dataIndex: 'teacherInfo.nick',
        key: 'teacherInfo.id',
        align:'center',
        render:text => <div><Icon type="link" />{text}</div>
    },{
        title: '上课率',
        dataIndex: 'enterRate',
        key: 'enterRate',
        align:'center',
        render: text => {
            const num1 = text.split('/')[0];
            const num2 = text.split('/')[1];
            const temp = (num1/num2).toFixed(3);
            if(temp < 0.80){
                return <div className='color_font'>{text}</div>
            }else if(0.80 < temp < 0.95){
                return <div className='color_font_1'>{text}</div>  
            }else{
                return <div>{text}</div>
            }
        }  
    },{
        title: '作业提交率',
        dataIndex: 'homeworkSubmitRate',
        key: 'homeworkSubmitRate',
        align:'center',
        render: text => {
            const temp = (parseFloat(text)*100).toFixed(2);
            if(text < 0.80){
                return <div className='color_font'>{`${temp}%`}</div>    
            }else if(0.80 < text < 0.95){
                return <div className='color_font_1'>{`${temp}%`}}</div>
            }else{
                return <div>{`${temp}%`}</div>               
            }
        }
    },{
        title: '被点评情况',
        dataIndex: 'beCommenttedRate',
        key: 'beCommenttedRate',
        align:'center',
        render: text => {
            const temp = (parseFloat(text)*100).toFixed(2);
            if(text < 0.80){
                return <div className='color_font'>{`${temp}%`}</div>
            }else if(0.80 < text < 0.95){
                return <div className='color_font_1'>{`${temp}%`}}</div>
            }else{
                return <div>{`${temp}%`}</div>
            }
        }
    },{
        title: '打卡率',
        dataIndex: 'signRate',
        key: 'signRate',
        align:'center',
        render: text => {
            const num1 = text.split('/')[0];
            const num2 = text.split('/')[1];
            const temp = (num1/num2).toFixed(3);
            if(temp < 0.80){
                return <div className='color_font'>{text}</div>
            }else if(0.80 < temp < 0.95){
                return <div className='color_font_1'>{text}</div>
            }else{
                return <div>{text}</div>
            }
        }
    },{
        title: '满意度',
        dataIndex: 'satisfyRate',
        key: 'satisfyRate',
        align:'center',
        render: text => {
            const temp = (parseFloat(text)*100).toFixed(2);
            if(text < 0.80){
                return <div className='color_font'>{`${temp}%`}</div>
            }else if( text > 0.95){
                return <div className='color_font_1'>{`${temp}%`}</div>       
            }else{
                return <div>{`${temp}%`}</div>
            }
        }
    }],
      
};

export default function todoList(state = initState, action) {
    const a = `${actionTypes.FETCH_CLASS}_SUC`;
    switch (action.type) {
        case a:
            const newState = {...state}; 
            let newData = state.dataSource.slice();
            newData = action.response.data.historyLessonsList;
            newState.dataSource = newData;
            return newState;
        default:
            return state;
    }
}
