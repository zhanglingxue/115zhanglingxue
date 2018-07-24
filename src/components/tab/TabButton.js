import React, { Component } from 'react';
import './tab.css';

export default class TabButton extends Component {

    renderImgs = () => {
        const { items } = this.props;
        return items.button.map((item, index) => {
            for (let i in items.messages) {
                if (items.messages[i].name === item.name) {
                    let fontColor = '';
                    switch (items.messages[i].idx[0].index) {
                        case '1': fontColor = 'red1'; break;
                        case '2': fontColor = 'yellow1'; break;
                        case '3': fontColor = 'blue1'; break;
                        case '4': fontColor = 'pink1'; break;
                        default: break;
                    }
                    return (
                        <li className="footer_content" key={index}>
                            <div>
                                <img src={item.img} className="footer_img" alt='' />
                                <p className={'button_name ' + fontColor}>{item.name}</p>
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