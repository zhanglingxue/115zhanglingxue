import React, { Component } from 'react'
import { Input,Button,Icon,message } from 'antd'
import '../comments.css'

export default class Reply extends Component {
    constructor(){
        super();
        this.state = {
            inputValue:''
        }
    }
    inputComment = (e) =>{
        this.setState({
            inputValue:e.target.value
        })
    }

    commentSubmit = () =>{
        if(!this.state.inputValue){
            message.error('请输入文字');
        }else{
            const { state,item,todoActions } = this.props;
            const idList = item.comments.map(idx =>{
                return idx.id;
            })
            const max = Math.max.apply(null, idList)
            const json = {
                commentator:{
                    nick:"大白老师",
                    role:"带课老师"
                },
                id:max+1,
                content:this.state.inputValue,
                from:"teacher",
                nick:"小雪老师",
                reason:"",
                status:"unrevised",
                time:new Date().toLocaleTimeString(),
            }
            todoActions.submitComment(json,item,max+1)
            this.setState({
                inputValue:''
            })
        }
        
    }
    render() {
        return (
            <div classNmae='submitDiv'>
                <div className='submitInput'>
                    <Input placeholder="" onChange={this.inputComment} onPressEnter={this.commentSubmit}/>
                </div>
                <Button className='' onClick={this.commentSubmit}>提交</Button>
            </div>   
        )
    }
}