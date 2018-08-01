import React, { Component } from 'react';
import { Table } from 'antd'
import './student.css'

export default class StuTable extends Component {

    render() {
        const { state } = this.props;
        return (
            <div className='button_setting'>
                <Table dataSource={state.userState.studentInfo.data}
                columns={state.columns.columns}
                bordered pagination={false}/>    
            </div>   
        )
    }
} 