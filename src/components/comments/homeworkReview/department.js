import React, { Component } from 'react'
import { Button, Input } from 'antd'
import TreeView from './treeView'
import './homeReview.css'


export default class department extends Component {
    constructor() {
        super();
        this.state = {
            selectedKeys: '',
            selected: false,
            array: [],
            deleteArr:[],
        }
    }
    checkUser = (idx) => {
        let arr = this.state.array;
        let index = arr.indexOf(idx);
        if(index === -1){
            arr.push(idx);
        }else{
            arr.splice(index,1);
        }
        this.setState({
            array: arr,
        })
    }
    submitUserName = () => {
        const { todoActions } = this.props;
        const arr = this.state.array.slice();
        if (arr.length !== 0) {
            todoActions.submitUserName(arr);
        }
        this.setState({
            array:[],
        })
    }
    chanceClassName = (idx) =>{
        if (this.state.array.indexOf(idx) !== -1){
            return "inner_box active"
        }else{
            return "inner_box"
        }
    }
    onSearchName = (value) =>{
        const { todoActions,state } = this.props;
        const temp = state.homeworkReviews.user;
        let arr = [];
        temp.map(idx =>{
            if(state.user[idx].name === value){
                arr.push(idx);
            }
        })
        if(arr.length !==0 ){
            todoActions.searchName(arr);
        }
    }
    
    render() {
        const { state, todoActions } = this.props;
        const user = state.homeworkReviews.user;
        const Search = Input.Search;
        return (
            <span className='all_manageUser'>   
                <div className='allSrearch'>
                    <Search
                        placeholder="名字"
                        onSearch={value => {this.onSearchName(value)}}
                        className='searchAllUserName'
                    />
                </div>
                <div className='allUserName'>
                {
                    user.map(idx => {
                        return(
                            <div className='userMidCont' key={idx}>
                                <div className={this.chanceClassName(idx)} key={idx} onClick={this.checkUser.bind(this, idx)}>
                                    {state.user[idx].name}
                                    mid:{state.user[idx].mid}
                                </div>
                            </div>
                        )                          
                    })
                }
                </div>
                <div className='sureToSubmit'><Button onClick={this.submitUserName}>确定</Button></div>
            </span>
        )
    }
}
