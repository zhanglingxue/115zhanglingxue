import React, { Component } from 'react';
import { Table,Avatar } from 'antd'
import { Link } from 'react-router'
import './student.css'

export default class StuTable extends Component {
    constructor() {
        super();
        this.state = {
            columns:[{
                title: '',
                dataIndex: 'hurl',
                key: 'hurl',
                align:'center',
                render:text => <div><Avatar shape="square" size="large" src={text} /></div>
            }, {
                title: '学员名',
                dataIndex: 'nick',
                key: 'nick',
                align:'center',
                render:text => <div><Link to='/op'>{text}</Link></div>
            }, {
                title: '学员编号MID',
                dataIndex: 'mid',
                key: 'mid',
                align:'center',
            },{
                title: '入学时间',
                dataIndex: 'enter_time',
                key: 'enter_time',
                align:'center',
                
            },{
                title: '开课时间',
                dataIndex: 'start_time',
                key: 'start_time',
                align:'center',
                
            },{
                title: '在学课程',
                dataIndex: 'learning_lessons',
                key: 'learning_lessons',
                align:'center',
                
            },{
                title: '负责老师',
                dataIndex: 'teachers',
                key: 'teachers',
                align:'center',
                
            }],
        }
    }
    render() {
        const { state } = this.props;
        return (
            <div className='button_setting'>
                <Table dataSource={state.userState.studentInfo.data}
                columns={this.state.columns}
                bordered pagination={false}/>    
            </div>   
        )
    }
} 