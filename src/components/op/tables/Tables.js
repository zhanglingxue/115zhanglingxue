import React, { Component } from 'react';
import { Table } from 'antd'
import './Tables.css';

export default class Tables extends Component {

    render() {
        const { state } = this.props;

        return (
            <div>
                <div className='title_table'>
                    <h2>在学课程</h2>
                </div>
                <Table dataSource={state.onTimeClass.dataSource}
                    columns={state.historyNum.columns} bordered />
                <div className='title_table'>
                    <h2>历史数据</h2>
                </div>
                <Table dataSource={state.historyNum.dataSource}
                    columns={state.historyNum.columns} bordered />
            </div>
        )
    }
} 