import React, { Component } from 'react'
import { Input,Button,Icon } from 'antd'
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
        const { state,item,todoActions } = this.props;
        const array = state.entities.postData[item].comments;
        const max = Math.max.apply(null, array)
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
        if(this.state.inputValue){
            todoActions.submitComment(json,item,max+1)
        }
        
    }
    render() {
        return (
            <div classNmae='submitDiv'>
                <div className='submitInput'>
                    <Input placeholder="" onChange={this.inputComment} />
                </div>
                <Button className='' onClick={this.commentSubmit}>提交</Button>
            </div>   
        )
    }
}