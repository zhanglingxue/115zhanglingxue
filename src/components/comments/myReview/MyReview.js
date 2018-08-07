import React, { Component } from 'react'
import ReviewCont from '../reviewCont/ReviewCont'
import '../comments.css'
import { Button,Tabs,Input,Select,AutoComplete  } from 'antd';

export default class MyReview extends Component {
    constructor (){
        super();
        this.state={
            inputValue:'',
        }
    }
    handleChange = (e) =>{
        this.setState({
            inputValue:e,
        })
    }

    search = () =>{
        const {todoActions} = this.props;
        todoActions.fentchComments(this.state.inputValue)
        this.setState({
            inputValue:'',
        })
    }
    render() {
        const TabPane = Tabs.TabPane;
        const InputGroup = Input.Group;
        const Option = Select.Option;
        const { state } = this.props;
        return (
            <div>
                <div className='tabTop'>
                    <span >
                        <Button className='myBack'>我的被退回</Button>
                    </span>
                    <span >
                        <span className='selectInput'>
                            <InputGroup compact>
                                <Select defaultValue="mid">
                                    <Option value="mid">mid</Option>
                                </Select>
                                <AutoComplete
                                    style={{ width: 200 }}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder="MID/关键词"
                                />
                                <span className=''><Button onClick={this.search}>搜索</Button></span>
                            </InputGroup>
                            
                        </span>
                        
                    </span>
                </div>
                <div classNam='chanceTab'>
                    <Tabs type="card">
                        <TabPane tab="我的未点评" key="1">
                            <ReviewCont state={state}/>
                        </TabPane>
                        <TabPane tab="我的点评历史" key="2">
                            <ReviewCont state={state}/>
                        </TabPane>
                        <TabPane tab="全部未点评" key="3">
                            <ReviewCont state={state}/>
                        </TabPane>
                        <TabPane tab="全部已点评" key="4">
                            <ReviewCont state={state}/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>   
        )
    }
}