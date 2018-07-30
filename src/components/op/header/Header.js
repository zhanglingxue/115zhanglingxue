import React, { Component } from 'react';
import { Avatar, Col, Input, Icon } from 'antd';
import './Header.css';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            input_content: '',
        }
    }

    showUserContent = () => {
        const { state } = this.props;
        const userContent = state.userState.user[0];
        const userName = state.userState.map[0];
        return Object.keys(userContent).map((item, idx) => {
            if (`${userName[item]}` !== 'undefined') {
                if (`${item}` !== 'phone' && `${item}` !== 'weChatNum' && `${item}` !== 'note') {
                    return (
                        <Col span={7} key={idx}>
                            <div className='list_user' >
                                {`${userName[item]}：${userContent[item]}`}
                            </div>
                        </Col>
                    )
                } else if (`${item}` === 'phone') {
                    return (
                        <Col span={7} key={idx}>
                            <div className='list_user' >
                                {`${userName[item]}：${userContent[item]}`}
                                <Icon type="copy" />
                            </div>
                        </Col>
                    )
                } else {
                    return (
                        <Col span={7} key={idx}>
                            <span className='wechat_num span_title'>{`${userName[item]}`}：</span>
                            <span className='wechat_num wechat_num_input'>
                                <Input addonAfter={<Icon type="check" onClick={this.submit.bind(this, idx)} />}
                                    defaultValue="" onChange={this.input_content.bind(this)} />
                            </span>
                        </Col>
                    )
                }

            }
        })
    }
    input_content = (event) => {
        this.setState({
            input_content: event.target.value,
        })
    }

    submit = (idx, event) => {
        const { todoActions } =this.props;
        todoActions.AddWeChat(this.state.input_content,idx)
    }
    render() {
        const { state } = this.props;
        return (
            <div className='header_top'>
                <Avatar shape="square" size="large" src={state.userState.user[0].img}
                    style={{ width: 130, height: 110, top: 30, }} />
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