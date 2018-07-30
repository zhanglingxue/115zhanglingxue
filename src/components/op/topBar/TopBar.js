import React, { Component } from 'react';
import {Tabs} from 'antd'
import ButtonBox from '../buttonBox/ButtonBox'
import Tables from '../tables/Tables'
import './TopBar.css';

export default class TopBar extends Component {

    render() {
        const TabPane = Tabs.TabPane;
        const {state} = this.props;
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="课程信息" key="1">
                    <div className='connect_class'>
                        <ButtonBox/>
                        <Tables state={state}/>
                    </div>
                </TabPane>
                <TabPane tab="满意度反馈" key="2"></TabPane>
            </Tabs>
        )
    }
} 