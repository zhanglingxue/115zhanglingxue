import React, { Component } from 'react';
import { Avatar, Col, Row,Input,Icon } from 'antd';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_content: '',
        }
    }
    showUserContent = () => {
        const { state } = this.props;
        const user = state.userState.data;
        return (
            <div>
                <Row>
                    <Col span={7} >
                        <div className='list_user' >
                            学员编号：MID330930115
                        </div>
                    </Col>
                    <Col span={7} >
                        <div className='list_user' >
                            在学课程：{
                                user.learningLesson.map(item =>{
                                    return (
                                        <span key={item}>
                                            {item}
                                        </span>                                          
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col span={7} >
                        <div className='list_user' >
                            手机号码：{`${user.tel}`}
                            <Icon type="copy" /> 
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={7} >
                        <div className='list_user' >
                            最后登录时间：{`${user.lastLoginDate}`}    
                        </div>
                    </Col>
                    <Col span={7} >
                        <div className='list_user' >
                            历史付费：{`${user.history_pay}`}
                        </div>
                    </Col>
                    <Col span={7} >
                        <div className='list_user' >
                            <span className='wechat_input'>微信号码：</span>
                            <span className='wechat_num_input'>
                                <Input addonAfter={<Icon type="check" />}
                                    value={`${user.weiChatCode}`}  />
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={7} >
                        <div className='list_user' >
                            入学时间：{`${user.enterDate}`}
                        </div>
                    </Col>
                    <Col span={7} >
                        <div className='list_user' >
                            累计学习天数：{`${user.totalLearningDays}`}
                        </div>
                    </Col>
                    <Col span={7} >
                        <div className='list_user' >
                        <span className='wechat_input'>备注：</span>
                            <span className='wechat_num_input '>
                                <Input addonAfter={<Icon type="check" />}
                                    value={`${user.remark}`}  />
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
    input_content = (event) => {
        this.setState({
            input_content: event.target.value,
        })
    }

    submit = (item ,event) => {
        const { todoActions } =this.props;
        todoActions.AddWeChat(this.state.input_content,item);
        this.setState({
            input_content:''
        })
    }
    render() {
        const { state } = this.props;
        return (
            <div className='header_top'>
                <Avatar shape="square" size="large" src={`${state.userState.data.hurl}`}
                    style={{ width: 130, height: 110, top: 30, }} />
                <div className='user_cont'>
                    <h3>{`${state.userState.data.nick}`}</h3>
                    {
                        this.showUserContent()
                    }
                </div>
            </div>
        )
    }
} 