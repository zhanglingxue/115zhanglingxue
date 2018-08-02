import React, { Component } from 'react';
import { Table,Button,Icon } from 'antd'
import '../student/student.css'

export default class Klass extends Component {
    constructor() {
        super();
        this.state = {
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
    }
    go_back = () =>{
        const { state } = this.props;
        state.router.goBack()

    }

    render() {
        const { state} = this.props;
        const content = state.onTimeClass.classInfo.basic_info;
        return (
            <div className='student_cont'>
                <div>
                    <p className='title_style'>班级:{content.name}</p>
                    <p className='title_style'>班级ID:{content.id}</p>
                    <p className='title_style'>老师:{content.virtual_teacher.nick}
                    /ID:{content.virtual_teacher.id}/微信:{content.virtual_teacher.wx_code}</p>
                    <p className='title_style'>负责员工:{content.real_teacher.name}
                    /ID:{content.real_teacher.mid}/微信:{content.real_teacher.wx_code}</p>
                </div>
                <Table dataSource={state.onTimeClass.classInfo.list}
                    columns={this.state.columnsClass} bordered pagination={false}/> 
                <Button onClick={this.go_back}>返回</Button>
            </div>    
        )
    }
} 