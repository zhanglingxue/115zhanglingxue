import React, { Component } from 'react';
import './tab.css';

export default class TabButton extends Component {

    renderImgs = () => {
        const { items } = this.props;
        return items.button.map((item, index) => {
            for (let i in items.messages) {
                if (items.messages[i].name === item.name) {
                    return (
                        <li className="footer_content" key={index}>
                            <div>
                                <img src={item.img} className="footer_img" alt='' />
                                <p className='button_name'>{item.name + items.messages[i].idx[0].index}</p>
                            </div>
                        </li>
                    )
                }
            }

        })
    }
    render() {
        return (
            <footer>
                <ul>
                    {this.renderImgs()}
                </ul>
            </footer>
        )
    }
} 