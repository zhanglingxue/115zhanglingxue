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
        let newList,newList1,newList2,newList3 ;
        if(state.imgReducer) {
            newList = state.imgReducer.map(idx => {
                return state.entities.postData[idx];
            })
        }
        if(state.myReducer) {
            newList1 = state.myReducer.map(idx => {
                return state.entities.myComment[idx];
            })
        }
        if(state.noCommentReducer) {
            newList2 = state.noCommentReducer.map(idx => {
                return state.entities.noComment[idx];
            })
        }
        if(state.allComment) {
            newList3 = state.allComment.map(idx => {
                return state.entities.allComment[idx];
            })
        }
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
                <div className='chanceTab'>
                    <Tabs type="card">
                        <TabPane tab="我的未点评" key="1">
                            <ReviewCont state={state} newListAll={newList}/>
                        </TabPane>
                        <TabPane tab="我的点评历史" key="2">
                            <ReviewCont state={state} newListAll={newList1}/>
                        </TabPane>
                        <TabPane tab="全部未点评" key="3">
                            <ReviewCont state={state} newListAll={newList2}/>
                        </TabPane>
                        <TabPane tab="全部已点评" key="4">
                            <ReviewCont state={state} newListAll={newList3}/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>   
        )
    }
}