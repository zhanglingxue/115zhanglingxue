import React, { Component } from 'react'
import { Avatar,Switch } from 'antd'

import '../comments.css'

export default class ReviewCont extends Component {
    
    chanceOpen = (id,e) =>{
        const { todoActions } = this.props;
        todoActions.fetchChanceSwitch(id)
    }

    render() {
        const { item } = this.props;
        return (
            <div className='imgsAllShow'>
                <div className='authorContent'>
                    <span>No.{item.id}</span>
                </div>
                <div className='authorContent'>
                    <Avatar size={64} icon="user" />
                </div>
                <div className='authorContent'>
                    <span>作业:{item.description}</span>
                    <div className='homeworkContent'>
                        <span>
                            {item.author.nick}mid:{item.author.mid}
                        </span>
                        <span>
                            {item.classInfo.name}|
                            {item.teacherInfo.nick} 
                        </span>
                        <span>
                            点评人:{item.commentator}
                        </span>
                        <span>
                            提交时间:{item.time}
                        </span>
                    </div>
                </div>
                <div className='authorContent'>
                    <span>佳作</span>
                    <Switch checked={item.isExcellent} onChange={this.chanceOpen.bind(this,item.id)} />
                </div>
            </div>   
        )
    }
}