import React, { Component } from 'react';
import { Button } from 'antd'
import './ButtonBox.css';

export default class ButtonBox extends Component {
    go_back = () =>{
        const { state } = this.props;
        state.router.goBack()
    }

    render() {
        return (
            <div>
                <div className='left_button'>
                    <Button>汇总</Button>
                    <Button className='gray_button'>摄影课</Button>
                    <Button>绘画课</Button>
                </div>
                <div className='rightButton'>
                    <Button onClick={this.go_back}>返回</Button>
                </div>
            </div>
        )
    }
} 