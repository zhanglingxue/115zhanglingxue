import React, { Component } from 'react';
import MessageItemView from './components/MessageItem.js'
import ButtonView from './components/Button.js'
import DialogView from './components/Dialog.js'
import InputView from './components/Input.js'
import CheckView from "./components/CheckBox.js"
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
                              
                },
                {
                    img:require('./img/1413.jpg'),
                    title:'小年糕前端集训营',
                    description:'[链接]',
                    time:'早上9:06',   
                               
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
            key:0,
            showDialog:false,
            showInput:false,
            title:null,
            desc:null,
            time:null,
            checkbox:false,
            multipleChoice: false,
            deleArr:[],
        }
    }

    //点击事件显示浮动层与否
    onItemClick = (key) => {
        this.setState({
            showDialog:!this.state.showDialog,
        })
        this.state.key = key;
    }

    //点击加号出现输入弹框
    onInputClick = () =>{
        this.setState({
            showInput:!this.state.showInput,
        })
    }
    //循环显示页面聊天框
    renderMessages = () => {
        const multipleChoice = this.state.multipleChoice;
        return this.state.messages.map((item,index)=>{
            return <MessageItemView key={index} item={item}  show1={this.onItemClick.bind(this,index)} mull={multipleChoice} delete={this.handDeleteDiv.bind(this,index)}/>
        })
    }

    //底部导航栏按钮
    renderImages = () => {
        return this.state.imgs.map((item,index)=>{
            return <ButtonView key={index} item={item} />
        })
    }

    /*  --获取输入框值开始--  */
    handAddDiv = (event) =>{
        this.setState({
            title:event.target.value
        })
    }
    handAddDiv1 = (event) =>{
        this.setState({
            desc:event.target.value
        })
    }
    handAddDiv2 = (event) =>{
        this.setState({
            time:event.target.value
        })
    }

    handDeleteDiv = (key,event) =>{
        this.setState({
            checkbox:!this.state.checkbox
        })
        if(event.target.checked){
            this.state.deleArr.push(key);
        }else if(!event.target.checked ){
            for(let i in this.state.deleArr ){
                if(this.state.deleArr[i] === key){
                    delete this.state.deleArr[i]
                }
            }
        }
    }

    moreDelete = () =>{
        this.state.deleArr.map((item,index)=>{
            delete this.state.messages[item]
        })
        this.setState({
            messages:this.state.messages,
            multipleChoice:false
        })
    }
    /* --获取输入框值结束-- */

    //显示浮动层内容
    renderDialog = () =>{
        if(this.state.showDialog)
            return <DialogView  show2={this.handClickDiv}/>
    }

    //获取输入框三个值
    renderInput = () =>{
        if(this.state.showInput)
            return (
            <InputView  show3={this.handAddDiv.bind(this)} show4={this.handAddDiv1.bind(this)} show5={this.handAddDiv2.bind(this)} submit={this.renderDiv} />
        )
    }
    
    //增加聊天对话到顶部
    renderDiv = () =>{
        if(!this.state.title || !this.state.desc ||!this.state.time){
            this.setState({
                showInput:!this.state.showInput,
             })
        }else{
            const newMessage = this.state.messages.slice()
            newMessage.unshift({
                img:require('./img/1414.jpg'),
                title:this.state.title,
                description:this.state.desc,
                time:this.state.time
            })
            this.setState({
                messages:newMessage,
                showInput:!this.state.showInput,
            })
        }  
    }

    //打印浮动层   //此处使用switch有问题
    handClickDiv = (event) => {
        const copeMessage = this.state.messages.slice()
        if(event.target.innerHTML === "置顶"){
            const temp = copeMessage[this.state.key];
            delete copeMessage[this.state.key]
            copeMessage.unshift(temp)
            this.setState({
                messages:copeMessage,
                showDialog:!this.state.showDialog,
            });
        }else if(event.target.innerHTML === "删除"){
            delete copeMessage[this.state.key]
            this.setState({
                messages:copeMessage,
                showDialog:!this.state.showDialog,

            });
        }else if(event.target.innerHTML === "多选删除"){
            this.setState({
                multipleChoice:true,
                showDialog:!this.state.showDialog,
            })

        }
    }

    renderChanceDele = () =>{
        if(this.state.multipleChoice)
            return (
                <div className="chanceDelete">
                    <button onClick={this.moreDelete}>批量删除</button>
                    <button onClick={this.overDelete}>取消</button>
                </div>
        )
    }
   

    overDelete = () =>{
        this.setState({
            multipleChoice:false,
            
        })
    }

  render() {
    return (
        <div >
           <div className="header">
                <h3>微信</h3>
                <div className="list">
                    <img src={addImg} onClick={this.onInputClick}/>
                    {
                        this.renderDialog()
                    }
                    {
                        this.renderInput()
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
