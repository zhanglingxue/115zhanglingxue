import React, { Component } from 'react'
import { Avatar,Switch } from 'antd'

import '../comments.css'

export default class ReviewCont extends Component {
    
    render() {
        const { item,state } = this.props;
        const temp = state.entities.postData[item];

        return (
            <div className='imgsAllShow'>
                <div className='authorContent'>
                    <span>No.{temp.id}</span>
                </div>
                <div className='authorContent'>
                    <Avatar size={64} icon="user" />
                </div>
                <div className='authorContent'>
                    <span>作业:{temp.description}</span>
                    <div className='homeworkContent'>
                        <span>
                            {state.entities.author[temp.author].nick}mid:{state.entities.author[temp.author].mid}
                        </span>
                        <span>
                            {state.entities.classes[temp.classInfo].name}|
                            {state.entities.teachers[temp.teacherInfo].nick} 
                        </span>
                        <span>
                            点评人:{temp.commentator}
                        </span>
                        <span>
                            提交时间:{temp.time}
                        </span>
                    </div>
                </div>
                <div className='authorContent'>
                    <span>佳作</span>
                    <Switch defaultChecked onChange={this.onChange} />
                </div>
            </div>   
        )
    }
}