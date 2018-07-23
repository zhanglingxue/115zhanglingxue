import React, { Component } from 'react';
import AddTode from './AddTode';
import './todo.css';

const closeImg = require('../../img/close.png')

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {
                    img: require('../../img/1414.jpg'),
                    title: '打火机与公主裙',
                    description: '[小程序]到保定的火车票太难抢啦，需要你助我一臂之力',
                    time: '下午2:31',
                },
                {
                    img: require('../../img/1413.jpg'),
                    title: '小年糕前端集训营',
                    description: '[链接]',
                    time: '早上9:06',
                },
                {
                    img: require('../../img/people.jpg'),
                    title: '淑芬',
                    description: '淑芬淑芬淑芬',
                    time: '昨天12:06',
                }
            ],
            key: null,
            showDialog: false,
            multipleChoice: false,
            deleteArr: [],
        }
    }

    renderDialog = (idx) => {
        this.setState({
            multipleChoice: !this.state.multipleChoice,
            key: idx,
        })
    }

    closeDiv = () => {
        this.setState({
            multipleChoice: !this.state.multipleChoice,
        })
    }

    chanceDiv = (event) => {
        const copeMessage = this.state.messages.slice()
        if (event.target.innerHTML === "置顶") {
            const temp = copeMessage[this.state.key];
            delete copeMessage[this.state.key]
            copeMessage.unshift(temp)
            this.setState({
                messages: copeMessage,
                multipleChoice: !this.state.multipleChoice,
            })
        } else if (event.target.innerHTML === "删除") {
            delete copeMessage[this.state.key]
            this.setState({
                messages: copeMessage,
                multipleChoice: !this.state.multipleChoice,
            })
        } else if (event.target.innerHTML === "多选删除") {
            this.setState({
                messages: copeMessage,
                multipleChoice: !this.state.multipleChoice,
            })
        }
    }
    renderChance = (idx, event) => {
        return this.state.multipleChoice ? (
            <div className="app-dialog">
                <img src={closeImg} alt='' onClick={this.closeDiv} />
                <ul className="content_1" onClick={this.chanceDiv}>
                    <li className="item">置顶</li>
                    <li className="item">删除</li>
                    <li className="item">多选删除</li>
                </ul>
            </div>
        ) : null;
    }
    renderMessages = () => {
        return this.state.messages.map((item, index) => {
            return (
                <li className="eve_content">
                    <img src={item.img} alt='' />
                    <div className="textContent">
                        <p className="chatName">{item.title}</p>
                        <p className="chatCont">{item.description}</p>
                    </div>
                    <div className="timeRight">
                        <p className="chatTime">{item.time}</p>
                        <button className="button" onClick={this.renderDialog.bind(this, index)}>更多</button>
                    </div>
                    {this.renderChance()}
                </li>
            )
        })
    }
    addMessage = () => {
        return <AddTode submit={this.addSubmit} />
    }
    addSubmit = (item) => {
        const newMessage = this.state.messages.slice()
        newMessage.unshift({
            ...item
        })
        this.setState({
            messages: newMessage,
        })
    }
    render() {
        return (
            <div className="container">
                <div className="content" >
                    <ul id="content">
                        {
                            this.renderMessages()
                        }
                        {
                            this.addMessage()
                        }
                    </ul>
                </div>
            </div>
        )
    }
} 