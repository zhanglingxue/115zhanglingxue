import React, { Component } from 'react';
import { Tabs,Button } from 'antd'
import ButtonBox from '../buttonBox/ButtonBox'
import ButtonSat from '../buttonBox/ButtonSat'
import Tables from '../tables/Tables'
import Fback from '../tables/Fback'
import './TopBar.css';

export default class TopBar extends Component {

    render() {
        const TabPane = Tabs.TabPane;
        const { state,todoActions } = this.props;
        
        return (
            <Tabs defaultActiveKey="1" >
                <TabPane tab="课程信息" key="1">
                    <div className='connect_class'>
                        <ButtonBox state={state}/>
                        <Tables state={state} todoActions={todoActions}/>
                    </div>
                </TabPane>
                <TabPane tab="满意度反馈" key="2">
                    <div className='connect_class'>
                        <ButtonSat state={state}/>
                        <Fback state={state} todoActions={todoActions}/>
                    </div>
                </TabPane>
            </Tabs>
        )
    }
} 