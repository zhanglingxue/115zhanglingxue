import React, { Component } from 'react';
import {
    moreChance,
    deleteMessage,
    topMessages
} from '../../actions'
import './todo.css'

const closeImg = require('../../img/close.png')

export default class Dialog extends Component {
    closeDiv = () => {
        const { dispatch, state } = this.props;
        dispatch(moreChance(
            null,
            !state.multipleChoice
        ))
    }
    chanceDiv = (event) => {
        const { state, dispatch } = this.props;
        if (event.target.innerHTML === "置顶") {
            dispatch(topMessages(
                state.idx.idx,
                true,
                !state.multipleChoice
            ))
        } else if (event.target.innerHTML === "删除") {
            dispatch(deleteMessage(
                state.idx.idx,
                !state.multipleChoice
            ))
        } else if (event.target.innerHTML === "多选删除") {

        }
    }
    render() {
        const { state } = this.props;
        return state.multipleChoice ? (
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