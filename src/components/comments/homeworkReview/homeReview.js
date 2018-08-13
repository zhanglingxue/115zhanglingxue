import React, { Component } from 'react'
import { Button,Tree,Input   } from 'antd'
import './homeReview.css'


export default class homeReviews extends Component {

    constructor(){
        super();
        this.state = {
            selectedKeys:'',
            selected:false,
            array:[],
        }
    }
    checkUser = (idx,event) =>{
        const { todoActions } = this.props;
        let arr = this.state.array;
        let temp = false;
        for(let i in arr){
            if(arr[i] === idx) {
                arr.splice(i,1);
                todoActions.chanceClassName(idx);
                temp = true;
            } 
        }
        if(!temp){
            arr.push(idx);
            todoActions.chanceClassName(idx);
        }
        this.setState({
            array:arr,
        })
    }
    onSelect = (selectedKeys, info) => {
        const  { todoActions } = this.props;
        todoActions.fetchUserChance(selectedKeys,info.selected)
    }
    submitUserName = () =>{
        const  { todoActions } = this.props;
        const arr = this.state.array.slice();
        if(arr.length !== 0){
            todoActions.submitUserName(arr);
        }
    }
    deleteArrUser = () =>{
        const  { todoActions } = this.props;
        todoActions.deleteArrUser();
    }
    classChance = () =>{
        const { isActive } = this.props;
        if(!isActive){
            return "review_content"
        }else return "review_content show_review_cont"
    }
    render() {
        const { title,state } = this.props;
        const level = state.homeworkReviews;
        const secondLevel = level.data.secondLevel;
        const threeLevel = level.data.threeLevel;
        const user = state.homeworkReviews.user;
        const group = level.data.group;
        const TreeNode = Tree.TreeNode;
        const Search = Input.Search;
        return (
            <div className={this.classChance()}>
                <div className='contentName'>
                    {title}
                </div>
                <div className='review_management'>
                    <span className='manageUser'>
                        <div className='search_and_delete'>
                            <Button onClick={this.deleteArrUser}>删除</Button>
                            <Search
                                placeholder="名字"
                                onSearch={value =>{
                                    const { todoActions } = this.props;
                                    todoActions.searchDeleteUser(value);
                                }}
                                style={{ width: 300 }}
                            />
                        </div>
                        <div className='chanceUser'>
                            {
                                state.homeworkReviews.array.map(idx =>{
                                    return (
                                        <div className='userMidCont1'>
                                            <div className='inner_box'>
                                                {level.data.user[idx].name}
                                                mid:{level.data.user[idx].mid}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>      
                    </span>
                    <span className='directory'>
                        <Tree
                            showLine
                            defaultExpandedKeys={['1001']}
                            onSelect={this.onSelect}
                        >
                            <TreeNode title="所有部门" key="0-0">
                                {
                                    level.level.map(idx =>{
                                        return (
                                            <TreeNode selectable={false} title={level.data.level[idx].name} key={level.data.level[idx].id}>
                                                {
                                                    level.data.level[idx].secondLevel.map(item =>{
                                                        return (
                                                            <TreeNode selectable={false} title={secondLevel[item].name} key={secondLevel[item].id} >
                                                                {
                                                                    secondLevel[item].threeLevel.map(id =>{
                                                                        return (
                                                                            <TreeNode title={threeLevel[id].name} key={threeLevel[id].user} >
                                                                                {
                                                                                    threeLevel[id].group.map(index =>{
                                                                                        return (
                                                                                            <TreeNode title={group[index].name} key={group[index].user} />
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </TreeNode>
                                                                        )
                                                                        
                                                                    })
                                                                }
                                                            </TreeNode>
                                                        )
                                                    })
                                                }
                                            </TreeNode>
                                        )   
                                    })
                                }
                            </TreeNode>
                        </Tree>
                    </span>
                    <span className='all_manageUser'>
                        <div className='allSrearch'>
                            <Search
                                placeholder="名字"
                                onSearch={value => {
                                    const { todoActions } = this.props;
                                    todoActions.searchName(value);
                                }}
                                className='searchAllUserName'
                            />
                        </div>
                        <div className='allUserName'>
                                {
                                    user.map(idx =>{
                                        if(state.homeworkReviews.data.user[idx].isSeleted){
                                            return (
                                                <div className='userMidCont'>
                                                    <div className='inner_box active' key={idx} onClick={this.checkUser.bind(this,idx)}>
                                                        {state.homeworkReviews.data.user[idx].name}
                                                        mid:{state.homeworkReviews.data.user[idx].mid}
                                                    </div>
                                                </div>
                                            )
                                        }else{
                                            return (
                                                <div className='userMidCont'>
                                                    <div className='inner_box' key={idx} onClick={this.checkUser.bind(this,idx)}>
                                                        {state.homeworkReviews.data.user[idx].name}
                                                        mid:{state.homeworkReviews.data.user[idx].mid}
                                                    </div>
                                                </div>
                                            )
                                        }
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
