import React, { Component } from 'react'
import { Avatar,Switch } from 'antd'

import '../comments.css'

export default class ReviewCont extends Component {
    
    render() {
        const { item,state } = this.props;
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
                            {state.entities.author[item.author].nick}mid:{state.entities.author[item.author].mid}
                        </span>
                        <span>
                            {state.entities.classes[item.classInfo].name} 
                        </span>
                        <span>
                            {state.entities.teachers[item.teacherInfo].nick}
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
                    佳作:<Switch defaultChecked onChange={this.onChange} />
                </div>
            </div>   
        )
    }
}