import React, { Component}  from 'react';
import {Icon} from 'antd'
import '../../components/op/op.css'

const initState = {
    dataSource: [{
        key: '1',
        class: '高级班',
        course: '已结束',
        openTime: '2017-04-30',
        groupPeople:'小白老师',
        classRate:'21/21',
        subRate:'85.31%',
        commentSit:'100.00%',
        punchRate:'35.00%',
        satDegree:'90.00%',
    }], 
    columns:[{
        title: '班级',
        dataIndex: 'class',
        key: 'class',
        render: text => <div><Icon type="info-circle" />{text}</div>
    }, {
        title: '课程状态',
        dataIndex: 'course',
        key: 'course',
    }, {
        title: '开课时间',
        dataIndex: 'openTime',
        key: 'openTime',
    },{
        title: '教学组负责人',
        dataIndex: 'groupPeople',
        key: 'groupPeople',
        render: text => <div><Icon type="smile" />{text}</div>
    },{
        title: '上课率',
        dataIndex: 'classRate',
        key: 'classRate',
        render: text => {
            const left = text.split('/')[0];
            const right = text.split('/')[1]
            if((left/right).toFixed(2) <= 0.80){
                return (
                    <div className='color_font'>{text}</div>
                )
            }else if((left/right).toFixed(2) > 0.95){
                return (
                    <div className='color_font_1'>{text}</div>
                )
            }else{
                return (
                    <div>{text}</div>
                )
            }
        }
    },{
        title: '作业提交率',
        dataIndex: 'subRate',
        key: 'subRate',
        render: text => {
            if(text.split('.')[0] < 80){
                return (
                    <div className='color_font'>{text}</div>
                )
            }else if(text.split('.')[0] >= 95){
                return (
                    <div className='color_font_1'>{text}</div>
                )
            }else{
                return (
                    <div>{text}</div>
                )
            }
        }
    },{
        title: '被点评情况',
        dataIndex: 'commentSit',
        key: 'commentSit',
        render: text => {
            if(text.split('.')[0] < 80){
                return (
                    <div className='color_font'>{text}</div>
                )
            }else if(text.split('.')[0] >= 95){
                return (
                    <div className='color_font_1'>{text}</div>
                )
            }else{
                return (
                    <div>{text}</div>
                )
            }
        }
    },{
        title: '打卡率',
        dataIndex: 'punchRate',
        key: 'punchRate',
        render: text => {
            if(text.split('.')[0] < 80){
                return (
                    <div className='color_font'>{text}</div>
                )
            }else if(text.split('.')[0] >= 95){
                return (
                    <div className='color_font_1'>{text}</div>
                )
            }else{
                return (
                    <div>{text}</div>
                )
            }
        }
    },{
        title: '满意度',
        dataIndex: 'satDegree',
        key: 'satDegree',
        render: text => {
            if(text.split('.')[0] < 80){
                return (
                    <div className='color_font'>{text}</div>
                )
            }else if(text.split('.')[0] >= 95){
                return (
                    <div className='color_font_1'>{text}</div>
                )
            }else{
                return (
                    <div>{text}</div>
                )
            }
        }
    }],
      
};

export default function todoList(state = initState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
