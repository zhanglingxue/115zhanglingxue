import React, { Component } from 'react';
import { moreChance, deleteMessage,topMessages } from '../../actions'
import './todo.css';

const closeImg = require('../../img/close.png')

export default class TodoList extends Component {

    renderDialog = (idx) => {
        const { dispatch, state } = this.props;
        dispatch(moreChance(
            idx,
            !state.multipleChoice
        ))
    }
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
                state.idx,
                true,
                !state.multipleChoice
            ))
        } else if (event.target.innerHTML === "删除") {
            dispatch(deleteMessage(
                state.idx,
                !state.multipleChoice
            ))
        } else if (event.target.innerHTML === "多选删除") {

        }
    }
    renderChance = () => {
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
    // checkBox = (idx) => {
    //     if (this.state.check)
    //         return (
    //             <div className="checkBox">
    //                 <input type="checkbox" onChange={this.handleMoreDelete.bind(this, idx)} />
    //             </div>
    //         )
    // }
    // handleMoreDelete = (idx, event) => {
    //     if (event.target.checked) {
    //         this.state.deleteArr.push(idx)
    //     } else {
    //         for (let i in this.state.deleteArr) {
    //             if (this.state.deleteArr[i] === idx)
    //                 this.state.deleteArr.splice(i, 1)
    //         }
    //     }
    //     this.setState({
    //         deleteArr: this.state.deleteArr
    //     })
    // }
    // deleteMore = () => {
    //     if (this.state.check)
    //         return (
    //             <div className="chanceDelete">
    //                 <button onClick={this.moreDelete}>批量删除</button>
    //                 <button onClick={this.overDelete}>取消</button>
    //             </div>
    //         )
    // }
    // moreDelete = () => {
    //     const { Arrays } = this.props;
    //     this.setState({
    //         check: false
    //     })
    //     Arrays({
    //         deleteArray: this.state.deleteArr
    //     })
    // }
    // overDelete = () => {
    //     this.setState({
    //         check: false
    //     })
    // }
    render() {
        const { state   } = this.props;
        let active = 'active';
        return (
            <div className="container">
                <div className="content" >
                    <ul id="content">
                        {
                            state.messages.map((item, index) => {
                                if(item.isTop){
                                    return (
                                        <li className={'eve_content '+active } key={index} >
                                            {/* {this.checkBox(index)} */}
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
                                }else{
                                    return (
                                        <li className="eve_content" key={index}>
                                            {/* {this.checkBox(index)} */}
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
                                }
                                
                            })
                        }
                    </ul>
                    {/* {
                        this.deleteMore()
                    } */}
                </div>
            </div>
        )
    }
}

