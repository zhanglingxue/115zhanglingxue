import React, { Component } from 'react'
import { List, Avatar, Button } from 'antd';
import '../comments.css'

export default class AllNoReview extends Component {
    handerShowComment = () =>{
        const { item,state } = this.props;
        const postData = state.entities.postData;
        const comments = state.entities.comments;
        const array = state.noCommentReducer.backArr;
        if(state.noCommentReducer.backArr.length !== 0){
            comments[array[0]].status = 'reject';
            comments[array[0]].reason = '太简单';
        }
        return postData[item].comments.map(idx =>{
            if(comments[idx].from === 'author'){
                return (
                    <div className='commmentcontent'>
                        <span>{comments[idx].nick}mid:{comments[idx].mid}</span>
                        <span className='commTime'>{comments[idx].time}</span>
                        <p>{comments[idx].content}</p>
                    </div>  
                )
            }else if(comments[idx].status === 'reject'){
                return (
                    <div className='commmentcontent'>
                        <span>{comments[idx].nick}({comments[idx].commentator.role}:{comments[idx].commentator.nick})</span>
                        <span className='commTime'>{comments[idx].time}</span>
                        <p>{comments[idx].content}</p>
                        <p className='message_back'>(消息被退回,退回原因:{comments[idx].reason})</p>
                    </div>
                )
            }else if(comments[idx].status === 'unrevised') {
                return (
                    <div className='commmentcontent'>
                        <span>{comments[idx].nick}({comments[idx].commentator.role}:{comments[idx].commentator.nick})</span>
                        <span className='commTime'>{comments[idx].time}</span>
                        <p className='comment_content'>{comments[idx].content}</p>
                        <Button className='button_back' onClick={this.commentBack.bind(this,idx,item)}>退回</Button>
                    </div>
                )
            }
        })
    }

    commentBack = (idx,item) =>{
        const { todoActions } = this.props;
        todoActions.returnComment(idx,item);
    }

    render() {
        return (
            <div>
                <div className='comments_list'>评论列表</div>
                {
                    this.handerShowComment()
                }
            </div>   
        )
    }
}