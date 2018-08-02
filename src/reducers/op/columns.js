import React from 'react'
import { Avatar,Icon } from 'antd'
import '../../components/op/op.css'

const init_state = {
    
    columnsClass:[{
        title: '课程内容',
        dataIndex: 'course_name',
        key: 'course_name',
        align:'center',
    }, {
        title: '上课时间',
        dataIndex: 'time',
        key: 'time',
        align:'center',
    }, {
        title: '上课情况',
        dataIndex: 'clockin_status',
        key: 'clockin_status',
        align:'center',
        render:text => {
            if(text === 0){
                return <div><Icon type="close" className='error_color'/></div>
            }else{
                return <div><Icon type="check" /></div>
            }
        }
    },{
        title: '作业提交情况',
        dataIndex: 'homework_status',
        key: 'homework_status',
        align:'center',
        render:text => {
            if(text === 0){
                return <div><Icon type="close" className='error_color'/></div>
            }else{
                return <div><Icon type="check" /></div>
            }
        }
    },{
        title: '被点评情况',
        dataIndex: 'review_status',
        key: 'review_status',
        align:'center',
        render:text => {
            if(text === 0){
                return <div><Icon type="close" className='error_color'/></div>
            }else if(text === 1){
                return <div><Icon type="check" /></div>
            }else{
                return <div><Icon type="minus" /></div>
            }
        }
    },{
        title: '打卡情况',
        dataIndex: 'enter_status',
        key: 'enter_status',
        align:'center',
        render:text => {
            if(text === 0){
                return <div><Icon type="close" className='error_color'/></div>
            }else{
                return <div><Icon type="check" /></div>
            }
        }
    },{
        title: '满意度评分',
        dataIndex: 'satisfied_score',
        key: 'satisfied_score',
        align:'center',
        render:text =>{
            if(text !== 5){
                return <div>{text}</div>
            }else{
                return <div className='color_font'>{text}</div>
            }
        }
    }],
}

export default function stuList (state=init_state,action){
    return state;
}