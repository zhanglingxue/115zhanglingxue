import React, { Component } from 'react';
import './todo.css'

const closeImg = require('../../img/close.png')

export default class Dialog extends Component {
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
    render() {
        const { item } = this.props;
        return item.multipleChoice ? (
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
}