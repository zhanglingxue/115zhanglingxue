import React, { Component } from 'react';
import { Avatar,Col,Input,Button,Icon } from 'antd';
import './Header.css';

export default class Header extends Component {

    showUserContent = () =>{
        const { state } = this.props;
        const userContent = state.userState.user[0];
        const userName = state.userState.map[0];
        return Object.keys(userContent).map((item,idx) => {
            if(`${userName[item]}` !== 'undefined') {
                if(`${item}` !== 'phone' && `${item}`!== 'weChatNum' && `${item}` !== 'note'){
                    return (
                        <Col span={7} key={idx}>
                            <div className='list_user' >
                                {`${userName[item]}：${userContent[item]}`}
                            </div>
                        </Col>
                    )
                }else if(`${item}` === 'phone'){
                    return (
                        <Col span={7} key={idx}>
                            <div className='list_user' >
                                {`${userName[item]}：${userContent[item]}`}
                                <Icon type="copy" />
                            </div>   
                        </Col>
                    )
                }else{
                    return(
                        <Col span={7} key={idx}>
                            <span className='wechat_num span_title'>{`${userName[item]}`}：</span>
                            <span className='wechat_num wechat_num_input'>
                                <Input placeholder={`${userContent[item]}`} />
                            </span>
                            <span className='wechat_num'>
                                <Button className='button_padding'>提交</Button>
                            </span>
                        </Col>
                    )
                }
                
            }
        })      
    }

    render() {
        const { state } = this.props;
        return (
            <div className='header_top'>
                <Avatar shape="square" size="large" src={state.userState.user[0].img} 
                style={{width:100,height:100,top:30,}}/>
                <div className='user_cont'>
                    <h3>{`${state.userState.user[0].classNum}`}</h3>
                    {  
                        this.showUserContent()
                    }
                </div>
            </div>
        )
    }
} 