import React, { Component } from 'react';
import MessageItemView from '../components/MessageItem.js'
import ButtonView from '../components/Button.js'
import DialogView from '../components/Dialog.js'
import InputView from '../components/Input.js'
import '../App.css';

const addImg = require('../img/ok.png') 
const searchImg = require('../img/red_add.png') 

export default class Messages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    img: require('../img/1414.jpg'),
                    title: '打火机与公主裙',
                    description: '[小程序]到保定的火车票太难抢啦，需要你助我一臂之力',
                    time: '下午2:31',

                },
                {
                    img: require('../img/1413.jpg'),
                    title: '小年糕前端集训营',
                    description: '[链接]',
                    time: '早上9:06',

                },
                {
                    img: require('../img/people.jpg'),
                    title: '淑芬',
                    description: '淑芬淑芬淑芬',
                    time: '昨天12:06',
                }
            ],
            imgs: [//底部导航栏图片
                {
                    img: require('../img/chat.png'),
                },
                {
                    img: require('../img/contact.png'),
                },
                {
                    img: require('../img/find.png'),
                },
                {
                    img: require('../img/me.png'),
                },
            ],
            key: null,
            showDialog: false,
            showInput: false,
            multipleChoice: false,
            deleteArr: [],
        }
    }
    
    render(){
        return (
            <div >
                <DialogView />
                <InputView />
                <MessageItemView />
                <ButtonView />
            </div>
        )
    }
} 