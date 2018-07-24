import React, { Component } from 'react';
import './tab.css';

export default class Span extends Component {

    changeButton = (id, index) => {
        const { items, radios } = this.props;
        const copeIndex = items.messages[id].idx.slice();
        for (let i in copeIndex) {
            if (copeIndex[i].index === index) {
                const temp = copeIndex[i];
                copeIndex.splice(i, 1)
                copeIndex.unshift(temp)
            }
        }
        const copeMessages = items.messages.slice();
        const dele = copeMessages[id];
        dele.idx = copeIndex;
        items.isActive = true;
        copeMessages.splice(id, 1);
        copeMessages.unshift(dele);
        radios({
            copeMessages: copeMessages,
            isActive: items.isActive,
        })
    }
    renderList = (id) => {
        const { items } = this.props;
        return items.messages[id].idx.map((item, index) => {
            let colorClass = '';
            switch (item.index) {
                case '1': colorClass = 'red'; break;
                case '2': colorClass = 'yellow'; break;
                case '3': colorClass = 'blue'; break;
                case '4': colorClass = 'pink'; break;
                default: break;
            }
            if (index === 0) {
                return (
                    <span onClick={this.changeButton.bind(this, id, item.index)} key={index} className={'chance-box active ' + colorClass}>
                    </span>
                )
            } else {
                return (
                    <span onClick={this.changeButton.bind(this, id, item.index)} key={index} className={'chance-box ' + colorClass}>
                    </span>
                )
            }
        })
    }
    render() {
        const { index } = this.props;
        return (
            <div>
                {this.renderList(index)}
            </div>
        )
    }
} 