import React, { Component } from 'react'
import { List, Avatar } from 'antd';
import '../comments.css'

export default class AllNoReview extends Component {
   
    handerShowComment = () =>{
        const { item } = this.props;
        return item.comments.map(idx =>{
            if(idx.mid){
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
                        <span>(点评老师:{idx.nick})</span>
                        <span className='commTime'>{idx.time}</span>
                        <p>{idx.content}</p>
                        <p className='message_back'>(消息被退回,退回原因:{idx.reason})</p>
                    </div>
                )
            }else if(idx.status === 'unrevised') {
                return (
                    <div className='commmentcontent'>
                        <span>(点评老师:{idx.nick})</span>
                        <span className='commTime'>{idx.time}</span>
                        <p>{idx.content}</p>
                    </div>
                )
            }
            
        })
    }

    render() {
        return (
            <div>
                {
                    this.handerShowComment()
                }
            </div>   
        )
    }
}