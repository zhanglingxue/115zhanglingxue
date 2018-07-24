import React, { Component } from 'react';
import TopView from '../components/tab/Top';
import ListView from '../components/tab/List';
import TabButtonView from '../components/tab/TabButton';

import '../components/tab/tab.css';

export default class Tab extends Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {
                    name: '微信',
                    idx: [
                        { index: '1', }, { index: '2', }, { index: '3', }, { index: '4', }
                    ]
                },
                {
                    name: '通讯录',
                    idx: [
                        { index: '1', }, { index: '2', }, { index: '3', }, { index: '4', }
                    ]
                },
                {
                    name: '发现',
                    idx: [
                        { index: '1', }, { index: '2', }, { index: '3', }, { index: '4', }
                    ]
                },
                {
                    name: '我',
                    idx: [
                        { index: '1', }, { index: '2', }, { index: '3', }, { index: '4', }
                    ]
                }
            ],
            button: [
                {
                    img: require('../img/chat.png'),
                    name: '微信'
                },
                {
                    img: require('../img/contact.png'),
                    name: '通讯录'
                },
                {
                    img: require('../img/find.png'),
                    name: '发现'
                },
                {
                    img: require('../img/me.png'),
                    name: '我'
                }
            ],
            isActive: false,
            inn: null,
        }
    }

    radioIndex = (item) => {
        this.setState({
            isActive: item.isActive,
            messages: item.copeMessages,
        })
        this.state.messages[item.id].idx = item.copeIndex;
    }

    render() {
        return (
            <div>
                <TopView />
                <ListView items={this.state} radioIndex={this.radioIndex} />
                <TabButtonView items={this.state} />
            </div>
        )
    }
} 