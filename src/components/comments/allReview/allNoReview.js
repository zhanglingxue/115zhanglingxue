import React, { Component } from 'react'
import { Button } from 'antd';
import '../comments.css'

export default class AllNoReview extends Component {
    handerShowComment = () =>{
        const { item,state } = this.props;
        const array = state.backArr;
        if(array.length !== 0){
            if(item.id === array[1]){
                item.comments.map(id => {
                    if(id.id === array[0]){
                        id.status = 'reject';
                        id.reason = '太简单';
                    }
                })
            }
            
        }
        return item.comments.map(idx =>{
            if(idx.from === 'author'){
                return (
                    <div className='commmentcontent'>
                        <span>{idx.nick}mid:{idx.mid}</span>
                        <span className='commTime'>{idx.time}</span>
                        <p>{idx.content}</p>
                    </div>  
                )
            }else if(idx.status === 'reject'){
                return (
                    <div className='commmentcontent'>
                        <span>{idx.nick}({idx.commentator.role}:{idx.commentator.nick})</span>
                        <span className='commTime'>{idx.time}</span>
                        <p>{idx.content}</p>
                        <p className='message_back'>(消息被退回,退回原因:{idx.reason})</p>
                    </div>
                )
            }else if(idx.status === 'unrevised') {
                return (
                    <div className='commmentcontent'>
                        <span>{idx.nick}({idx.commentator.role}:{idx.commentator.nick})</span>
                        <span className='commTime'>{idx.time}</span>
                        <p className='comment_content'>{idx.content}</p>
                        <Button className='button_back' onClick={this.commentBack.bind(this,idx)}>退回</Button>
                    </div>
                )
            }
        })
    }

    commentBack = (idx) =>{
        const { item,todoActions } = this.props;
        todoActions.returnComment(idx.id,item.id);
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