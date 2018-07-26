import React, { Component } from 'react';
import { moreChance } from '../../actions';
import TodoItem from './TodoItem';
import './todo.css';

export default class TodoList extends Component {

    /*---------多选渲染勾选框的函数(未写)-----------*/
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
    /*---------多选渲染勾选框的函数(未写)end-----------*/

    //回调函数
    renderDialog = (idx) => {
        const { dispatch, state } = this.props;
        dispatch(moreChance(
            idx,
            !state.multipleChoice
        ))
    }

    render() {
        const { state } = this.props;
        let active = 'active';
        return (
            <div className="container">
                <div className="content" >
                    <ul id="content">
                        {
                            state.messages.map((item, index) => {
                                if (item.isTop) {
                                    return (
                                        <li className={'eve_content ' + active} key={index} >
                                            <TodoItem item={item} index={index}
                                                renderDialog={this.renderDialog} />
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li className="eve_content" key={index}>
                                            <TodoItem item={item} index={index}
                                                renderDialog={this.renderDialog} />
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

