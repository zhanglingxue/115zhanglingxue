import React, { Component } from 'react';
import { Button, Input,Select,AutoComplete } from 'antd';
import TreeView from './treeView';
import './homeReview.css';


export default class rightOffier extends Component {
    constructor() {
        super();
        this.state = {
            selectedKeys: '',
            selected: false,
            array: [],
            deleteArr:[],
            option:'name'
        }
    }
    deleteArrUser = () => {
        const { todoActions } = this.props;
        todoActions.deleteArrUser(this.state.deleteArr);
        this.setState({
            deleteArr:[],
        })

    }
    checkDelete = (idx) =>{
        let deleArr = this.state.deleteArr.slice();
        let index = deleArr.indexOf(idx);
        if(index === -1){
            deleArr.push(idx);
        }else{
            deleArr.splice(index,1);
        }
        this.setState({
            deleteArr: deleArr,
        })
    }
    chanceDeleteClassName = (idx) =>{
        if (this.state.deleteArr.indexOf(idx) !== -1) {
            return "inner_box active"
        }else{
            return "inner_box"
        }
    }
    onSearchName = (value) =>{
        const { todoActions,state } = this.props;
        const temp = state.homeworkReviews.user.slice();
        let arr = [];
        if(this.state.option === 'name'){
            temp.map(idx =>{
                if(state.user[idx].name === value){
                    arr.push(idx);
                }
            })
        }else if(this.state.option === 'mid'){
            temp.map(idx =>{
                if(state.user[idx].mid === parseInt(value)){
                    arr.push(idx);
                }
            })
        }
        if(arr.length !==0 ){
            todoActions.searchDeleteUser(arr);
        }
    }
    onSelect = (value) =>{
        this.setState({
            option:value
        })
    }
    render() {
        const { state, todoActions } = this.props;
        const level = state.homeworkReviews;
        const Search = Input.Search;
        const InputGroup = Input.Group;
        const Option = Select.Option;
        return (       
            <span className='manageUser'>
                <div className='search_and_delete'>
                    <Button onClick={this.deleteArrUser} className='leftDelete'>删除</Button>
                    <div className='selectOption leftDelete'>
                        <InputGroup compact>
                            <Select defaultValue="name" onSelect={this.onSelect}>
                                <Option value="name">名字</Option>
                                <Option value="mid">mid</Option>
                            </Select>
                            <Search
                                placeholder={this.state.value}
                                onSearch={value => {this.onSearchName(value)}}
                                style={{ width: 250 }}
                            />
                        </InputGroup>
                    </div>
                </div>
                <div className='chanceUser'>
                {
                    level.array.map(idx =>{
                        return (
                            <div className='userMidCont'>
                                <Button className={this.chanceDeleteClassName(idx)} key={idx} onClick={this.checkDelete.bind(this, idx)}>
                                    {state.user[idx].name}
                                    mid:{state.user[idx].mid}
                                </Button>
                            </div>
                        )
                    })
                }
                </div>
            </span>
        )
    }
}
