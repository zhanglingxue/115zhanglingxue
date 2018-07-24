import React, { Component } from "react";
import './MessageItem.css';


export default class MessageItem extends Component {
    constructor(props) {
        super(props);
        this.state ={
            appear:false,
        }
    }

    renderCheckBox = () => {
        const { mull, index } = this.props;
        return mull.multipleChoice ? (
            <div className="checkBox">
                <input type="checkbox" onChange={this.handleMoreDelete.bind(this, index)} />
            </div>
        ) : null
    }
    handleMoreDelete = (index, event) => {
        const { mull, dele } = this.props;
        if (event.target.checked) {
            mull.deleteArr.push(index);
        } else {
            delete mull.deleteArr[index];
        }
        dele({ deleteArr: mull.deleteArr });
    }

    render() {
        const { item } = this.props;
        return (
            <li className="eve_content"  >
                {this.renderCheckBox()}
                <img src={item.img} alt='' />
                <div className="textContent">
                    <p className="chatName">{item.title}</p>
                    <p className="chatCont">{item.description}</p>
                </div>
                <div className="timeRight">
                    <p className="chatTime">{item.time}</p>
                    <button className="button" onClick={this.props.show1}>更多</button>
                </div>
            </li>
        )
    }
}