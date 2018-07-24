import React, { Component } from 'react';
import SpanView from './Span';
import './tab.css';

export default class List extends Component {

    submit = (item) => {
        const { radioIndex } = this.props;
        radioIndex({
            item,
        })
    }
    renderImgs = () => {
        const { items } = this.props;
        return items.messages.map((item, index) => {
            return (
                <li className='list-all' key={index} >
                    <div className='list-name'>{item.name}</div>
                    <span>
                        <SpanView index={index} items={items} radios={this.submit} />
                    </span>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderImgs()}
                </ul>
            </div>
        )
    }
} 