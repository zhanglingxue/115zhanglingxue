import React, { Component } from 'react';
import './todo.css';

export default class TodoList extends Component {

    //点击更多渲染弹框事件
    // handleDialog = (idx) =>{
    //     const {renderDialog} = this.props;
    //     renderDialog({
    //         idx
    //     })
    // }
    handleDialog = (idx) => {
        const { state,todoActions } = this.props;
        todoActions.moreChance(
            idx,
            !state.switchState.multipleChoice
        )
    }
    render() {
        const { item,index } = this.props;
        return (
            <div>
                {/* {this.checkBox(index)} */}
                <img src={item.img} alt='' />
                <div className="textContent">
                    <p className="chatName">{item.title}</p>
                    <p className="chatCont">{item.description}</p>
                </div>
                <div className="timeRight">
                    <p className="chatTime">{item.time}</p>
                    <button className="button" onClick={this.handleDialog.bind(this, index)}>更多</button>
                </div>
            </div>
        )
    }
}

