import React, { Component } from 'react';
import MessageItemView from './components/MessageItem.js'
import ButtonView from './components/Button.js'
import DialogView from './components/Dialog.js'
import InputView from './components/Input.js'
// import TodoView from './container/Todo.js'
import './App.css';

const addImg = require('./img/add.png')
const searchImg = require('./img/search.png')

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    img: require('./img/1414.jpg'),
                    title: '打火机与公主裙',
                    description: '[小程序]到保定的火车票太难抢啦，需要你助我一臂之力',
                    time: '下午2:31',

                },
                {
                    img: require('./img/1413.jpg'),
                    title: '小年糕前端集训营',
                    description: '[链接]',
                    time: '早上9:06',

                },
                {
                    img: require('./img/people.jpg'),
                    title: '淑芬',
                    description: '淑芬淑芬淑芬',
                    time: '昨天12:06',
                }
            ],
            imgs: [//底部导航栏图片
                {
                    img: require('./img/chat.png'),
                },
                {
                    img: require('./img/contact.png'),
                },
                {
                    img: require('./img/find.png'),
                },
                {
                    img: require('./img/me.png'),
                },
            ],
            key: null,
            showDialog: false,
            showInput: false,
            multipleChoice: false,
            deleteArr: [],
        }
    }
    //点击加号出现输入弹框
    onInputClick = () => {
        this.setState({
            showInput: !this.state.showInput,
        })
    }
    //循环显示页面聊天框
    renderMessages = () => {
        return this.state.messages.map((item, index) => {
            return <MessageItemView key={index} item={item} show1={this.onItemClick.bind(this, index)} mull={this.state} dele={this.handDeleteDiv} index={index} />
        })
    }
    //点击事件显示浮动层与否
    onItemClick = (index) => {
        this.setState({
            showDialog: !this.state.showDialog,
            key: index,
        })
    }
    //批量删除  //考虑删除时倒序删除，正向删除会影响删除一个后的下脚标数值
    handDeleteDiv = (item) => {
        this.setState({
            deleteArr: item.deleteArr,
        })
    }
    //显示浮动层内容
    renderDialog = () => {
        if (this.state.showDialog)
            return <DialogView upDateMessages={this.upDate} mess={this.state} close={this.closeDiv}/>
    }
    upDate = (item) => {
        this.setState({
            messages: item.messages,
            multipleChoice: item.multipleChoice,
            showDialog: !this.state.showDialog,
        })
    }
    closeDiv = () => {
        this.setState({
            showDialog:false,
        })
    }
    //获取输入框三个值
    renderInput = () => {
        if (this.state.showInput)
            return (
                <InputView submit={this.renderDiv} />
            )
    }
    //增加聊天对话到顶部
    renderDiv = (item) => {
        if (!item.title || !item.description || !item.time) {
            this.setState({
                showInput: !this.state.showInput,
            })
        } else {
            const newMessage = this.state.messages.slice()
            newMessage.unshift({
                img: require('./img/1414.jpg'),
                ...item
            })
            this.setState({
                messages: newMessage,
                showInput: !this.state.showInput,
            })
        }
    }
    //多选删除下button
    renderChanceDele = () => {
        if (this.state.multipleChoice)
            return (
                <div className="chanceDelete">
                    <button onClick={this.moreDelete}>批量删除</button>
                    <button onClick={this.overDelete}>取消</button>
                </div>
            )
    }
    moreDelete = () => {
        const copeMess = this.state.messages.slice();
        this.state.deleteArr.map((item, index) => {
            return delete copeMess[item]
        })
        this.setState({
            messages: copeMess,
            multipleChoice: false,
        })
    }
    //更多选项里删除事件
    overDelete = () => {
        this.setState({
            multipleChoice: false,
        })
    }
    //底部导航栏按钮
    renderImages = () => {
        return this.state.imgs.map((item, index) => {
            return <ButtonView key={index} item={item} />
        })
    }

    render() {
        return (
            <div >
                <div className="header">
                    <h3>微信</h3>
                    <div className="list">
                        <img src={addImg} onClick={this.onInputClick} alt=''/>
                        {
                            this.renderDialog()
                        }
                        {
                            this.renderInput()
                        }
                    </div>
                    <img src={searchImg} alt=''/>
                </div>
                <div className="container">
                    <div className="content" >
                        <ul id="content">
                            {
                                this.renderMessages()
                            }
                        </ul>
                        {
                            this.renderChanceDele()
                        }
                    </div>
                </div>
                <footer>
                    <ul>
                        {
                            this.renderImages()
                        }
                    </ul>
                </footer>
            </div>
        );
    }
}

export default App;
