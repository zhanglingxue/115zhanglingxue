import React, { Component } from 'react';
import { Table,Avatar } from 'antd'
import { browserHistory } from 'react-router'
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
        const list = state.userState.list;
        let newList;
        if(list){
            newList = list.result.map(t =>{
                const studentList = state.entities.student[t];
                return {
                    ...studentList,
                }
            })
        }
        return (
            <div className='button_setting'>
                <Table dataSource={newList}
                    columns={this.state.columns}
                    bordered pagination={false}
                    rowKey={record=>record.mid}
                    onRow={(record,index) => {      
                        return {
                            onClick: () => {
                                browserHistory.push(`op/${record.mid}`)
                            },     
                        }}} />    
            </div>   
        )
    }
} 