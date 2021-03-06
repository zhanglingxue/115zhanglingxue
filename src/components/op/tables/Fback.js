import React, { Component } from 'react';
import { Table,Icon,Popover } from 'antd'
import './Tables.css';

export default class Fback extends Component {
    constructor() {
        super();
        this.state = {
            columns:[
                {
                    title: '课程',
                    dataIndex: 'class_info.name',
                    key: 'class_info',
                    align:'center',
                },{
                    title: '教程',
                    dataIndex: 'course_name',
                    key: 'course_name',
                    align:'center',
                },{
                    title: '开课时间',
                    dataIndex: 'time',
                    key: 'time',
                    align:'center',
                    
                },{
                    title: '老师',
                    dataIndex: 'teacher_info.nick',
                    key: 'teacher_info',
                    align:'center',
                    render:(text,record,index) => {
                        const temp = record.teacher_info;
                        const content = (
                            <div>
                              <p>老师账号：{temp.nick}/ID：{temp.id}/微信：{temp.wx_code}</p>
                              <p>真实姓名：{temp.real_name}/MID：{temp.mid}</p>
                            </div>
                        );
                        return <div>
                            <Popover content={content}  trigger="click">   
                                <Icon type="star" />{text}
                            </Popover>
                        </div>
                    }
                },{
                    title: '满意度评分',
                    dataIndex: 'satisfied_score',
                    key: 'satisfied_score',
                    align:'center',
                    
                },{
                    title: '具体反馈',
                    dataIndex: 'satisfied_detail',
                    key: 'satisfied_detail',
                    align:'center',
                    
                },{
                    title: '操作',
                    dataIndex: 'reply_status',
                    key: 'reply_status',
                    align:'center', 
                    render:(text,record,index) =>{
                        if(text === 0){
                            return <div onClick={this.handerClick.bind(this,record)}>
                                        待回复<Icon type="printer" />
                                    </div>
                        }else{
                            return <div>已回复<Icon type="printer" /></div>
                        }    
                    }
                }
            ]
        }
    }

    handerClick = (record) =>{
        const { todoActions } = this.props;
        todoActions.fetChangeStatus(record.time);
    }

    render() {
        const { state } = this.props;
        const list = state.onTimeClass.list;
        let newList;
        if(list.result){
            newList = list.result.map(t => {
                const satisfiled = state.entities.satisfiled[t];
                return {
                    ...satisfiled,
                    class_info: state.entities.classes[satisfiled.class_info],
                    teacher_info: state.entities.teachers[satisfiled.teacher_info]
                  }
            })
        }
        return (
            <div>
                <Table dataSource={newList} 
                columns={this.state.columns} bordered />
            </div>
        )
    }
} 