import React, { Component } from 'react';
import MessageItemView from './MessageItem.js'
import ButtonView from './Button.js'
import DialogView from './Dialog.js'
import logo from './logo.svg';
import './App.css';

const addImg = require('./img/add.png') 
const searchImg = require('./img/search.png') 

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages :[
                {
                    img:require('./img/1414.jpg'),
                    title:'打火机与公主裙',
                    description:'[小程序]到保定的火车票太难抢啦，需要你助我一臂之力',
                    time:'下午2:31',   
                    onClick:this.onItemClick,             
                },
                {
                    img:require('./img/1413.jpg'),
                    title:'小年糕前端集训营',
                    description:'[链接]',
                    time:'早上9:06',   
                    onClick:this.onItemClick,             
                },
                {
                    img:require('./img/people.jpg'),
                    title:'淑芬',
                    description:'淑芬淑芬淑芬',
                    time:'昨天12:06',         
                }
            ],
            imgs:[//底部导航栏图片
                {
                    img:require('./img/chat.png'),
                },
                {
                    img:require('./img/contact.png'),
                },
                {
                    img:require('./img/find.png'),
                },
                {
                    img:require('./img/me.png'),
                },
            ],
            showDialog:false,
        }
    }

    //点击事件显示浮动层与否
    onItemClick = () => {
        this.setState({
            showDialog:!this.state.showDialog,
        })
    }

    //循环显示页面聊天框
    renderMessages = () => {
        return this.state.messages.map((item,index)=>{
            return <MessageItemView key={index} item={item} show1={this.onItemClick} />
        })
    }

    //底部导航栏按钮
    renderImages = () => {
        return this.state.imgs.map((item,index)=>{
            return <ButtonView key={index} item={item} />
        })
    }
    
    //显示浮动层内容
    renderDialog = () =>{
        if(this.state.showDialog)
            return <DialogView  show2={this.handClickDiv}/>
    }
    
    //打印浮动层
    handClickDiv = (event) => {
        console.log(event.target.innerHTML);
    }

  render() {
    return (
        <div >
           <div className="header">
                <h3>微信</h3>
                <div className="list">
                    <img src={addImg} />
                    {
                        this.renderDialog()
                    }
                </div>
                <img src={searchImg} />
            </div>
            <div className="container">
                <div className="content" >
                    <ul id="content">
                    {
                         this.renderMessages()
                    }
                    </ul>
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
