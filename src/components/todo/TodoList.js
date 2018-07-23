import React, { Component } from 'react';
import AddTode from './AddTode';
import './todo.css';

const closeImg = require('../../img/close.png')

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            multipleChoice: false,
            key:null,
        }
    }
    renderDialog = (idx) => {
        const { items } = this.props;
        this.setState({
            multipleChoice: !this.state.multipleChoice,
            key: idx,
        })
    }
    closeDiv = () => {
        const { items } = this.props;
        this.setState({
            multipleChoice: !this.state.multipleChoice,
        })
    }
    chanceDiv = (event) => {
        const { items,changeMess } = this.props;
        const copeMessage = items.messages.slice()
        if (event.target.innerHTML === "置顶") {
            const temp = copeMessage[this.state.key];
            delete copeMessage[this.state.key]
            copeMessage.unshift(temp)
            this.setState({
                multipleChoice: !this.state.multipleChoice,
            })
            changeMess({
                cope:copeMessage,
            })
        } else if (event.target.innerHTML === "删除") {
            delete copeMessage[this.state.key]
            this.setState({
                multipleChoice: !this.state.multipleChoice,
            })
            changeMess({
                cope:copeMessage,
            })
        } else if (event.target.innerHTML === "多选删除") {
            this.setState({
                check:!items.check,
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
    checkBox = () =>{
        const { items } = this.props;
        if(items.check)
            return (
                <div className="checkBox">
                    <input type="checkbox"  />
                </div>
            ) 
    }
    renderMessages = () => {
        const { items } = this.props;
        return items.messages.map((item, index) => {
            return (
                <li className="eve_content">
                    {this.checkBox()}
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
    render() {
        return (
            <div className="container">
                <div className="content" >
                    <ul id="content">
                        {
                            this.renderMessages()
                        }
                    </ul>
                </div>
            </div>
        )
    }
} 