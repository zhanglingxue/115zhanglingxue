import React, { Component } from 'react'
import { Button, Input } from 'antd'
import TreeView from './treeView'
import './homeReview.css'


export default class homeReviews extends Component {

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
    deleteArrUser = () => {
        const { todoActions } = this.props;
        todoActions.deleteArrUser(this.state.deleteArr);
        this.setState({
            deleteArr:[],
        })

    }
    classChance = () => {
        const { isActive } = this.props;
        if (!isActive) {
            return "review_content"
        } else return "review_content show_review_cont"
    }

    checkDelete = (idx) =>{
        let deleArr = this.state.deleteArr;
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

    chanceClassName = (idx) =>{
        if (this.state.array.indexOf(idx) !== -1){
            return "inner_box active"
        }else{
            return "inner_box"
        }
    }

    chanceDeleteClassName = (idx) =>{
        if (this.state.deleteArr.indexOf(idx) !== -1) {
            return "inner_box active"
        }else{
            return "inner_box"
        }
    }
    render() {
        const { title, state, todoActions } = this.props;
        const level = state.homeworkReviews;
        const user = state.homeworkReviews.user;
        const Search = Input.Search;
        return (
            <div className={this.classChance()}>
                <div className='contentName'>{title}</div>
                <div className='review_management'>
                    <span className='manageUser'>
                        <div className='search_and_delete'>
                            <Button onClick={this.deleteArrUser}>删除</Button>
                            <Search
                                placeholder="名字"
                                onSearch={value => {
                                    const { todoActions,state } = this.props;
                                    const temp = state.homeworkReviews.user;
                                    let arr = [];
                                    temp.map(idx =>{
                                        if(state.user[idx].name === value){
                                            arr.push(idx);
                                        }
                                    })
                                    if(arr.length !==0 ){
                                        todoActions.searchDeleteUser(arr);
                                    }
                                }}
                                style={{ width: 300 }}
                            />
                        </div>
                        <div className='chanceUser'>
                            {
                                level.array.map(idx =>{
                                    return (
                                        <div className='userMidCont'>
                                            <div className={this.chanceDeleteClassName(idx)} key={idx} onClick={this.checkDelete.bind(this, idx)}>
                                                {state.user[idx].name}
                                                mid:{state.user[idx].mid}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </span>
                    <span className='directory'>
                        <TreeView state={state} todoActions={todoActions} />
                    </span>
                    <span className='all_manageUser'>
                        
                        <div className='allSrearch'>
                            <Search
                                placeholder="名字"
                                onSearch={value => {
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
                                }}
                                className='searchAllUserName'
                            />
                        </div>
                        <div className='allUserName'>
                        {
                            user.map(idx => {
                                return(
                                    <div className='userMidCont'>
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
                </div>
            </div>
        )
    }
}
