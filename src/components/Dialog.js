import React, { Component } from "react";
import './Dialog.css';

const closeImg = require('../img/close.png')

export default class Dialog extends Component {

    chanceDiv = (event) => {
        const { mess,upDateMessages } = this.props;
        const copeMessage = mess.messages.slice()
        if (event.target.innerHTML === "置顶") {
            const temp = copeMessage[mess.key];
            delete copeMessage[mess.key]
            copeMessage.unshift(temp)
            upDateMessages({
                messages: copeMessage,
            })
        } else if (event.target.innerHTML === "删除") {
            delete copeMessage[mess.key]
            upDateMessages({
                messages: copeMessage,
            })
        } else if (event.target.innerHTML === "多选删除") {
            upDateMessages({
                messages: copeMessage,
                multipleChoice: !mess.multipleChoice,
            })
        }
    }

    render() {
        return (
            <div className="app-dialog">
                <img src={closeImg} alt='' onClick={this.props.close} />
                <ul className="content_1" onClick={this.chanceDiv}>
                    <li className="item">置顶</li>
                    <li className="item">删除</li>
                    <li className="item">多选删除</li>
                </ul>
            </div>
        )
    }
}