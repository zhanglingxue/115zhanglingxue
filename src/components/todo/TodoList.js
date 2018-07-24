import React, { Component } from 'react';
import './todo.css';

const closeImg = require('../../img/close.png')

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multipleChoice: false,
            key: null,
            check: false,
            deleteArr: []
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
            multipleChoice: false,
        })
    }
    chanceDiv = (event) => {
        const { itemMessage, changeMess } = this.props;
        const copeMessage = itemMessage.slice()
        if (event.target.innerHTML === "置顶") {
            if (this.state.key === 0) {
                this.setState({
                    multipleChoice: false,
                    key: null,
                })
            } else {
                const temp = copeMessage[this.state.key];
                copeMessage.splice(this.state.key,1);
                copeMessage.unshift(temp)
                changeMess({
                    cope: copeMessage
                })
                this.setState({
                    multipleChoice: false,
                    key: null,
                })
            }
        } else if (event.target.innerHTML === "删除") {
            copeMessage.splice(this.state.key, 1)
            this.setState({
                multipleChoice: false,
                key: null,
            })
            changeMess({
                cope: copeMessage
            })
        } else if (event.target.innerHTML === "多选删除") {
            this.setState({
                check: true,
                multipleChoice: false,
            })
        }
    }
    renderChance = () => {
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
    checkBox = (idx) => {
        if (this.state.check)
            return (
                <div className="checkBox">
                    <input type="checkbox" onChange={this.handleMoreDelete.bind(this, idx)} />
                </div>
            )
    }
    handleMoreDelete = (idx, event) => {
        if (event.target.checked) {
            this.state.deleteArr.push(idx)
        } else {
            for (let i in this.state.deleteArr) {
                if (this.state.deleteArr[i] === idx)
                    this.state.deleteArr.splice(i, 1)
            }
        }
        this.setState({
            deleteArr: this.state.deleteArr
        })
    }
    deleteMore = () => {
        if (this.state.check)
            return (
                <div className="chanceDelete">
                    <button onClick={this.moreDelete}>批量删除</button>
                    <button onClick={this.overDelete}>取消</button>
                </div>
            )
    }
    moreDelete = () => {
        const { Arrays } = this.props;
        this.setState({
            check: false
        })
        Arrays({
            deleteArray: this.state.deleteArr
        })
    }
    overDelete = () => {
        this.setState({
            check: false
        })
    }
    renderMessages = () => {
        const { itemMessage } = this.props;
        return itemMessage.map((item, index) => {
            return (
                <li className="eve_content" key={index}>
                    {this.checkBox(index)}
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
                    {
                        this.deleteMore()
                    }
                </div>
            </div>
        )
    }
} 