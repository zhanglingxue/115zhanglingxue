import React, { Component } from 'react'
import { Input,Button,Icon } from 'antd'
import '../comments.css'

export default class Reply extends Component {
    
    render() {
        return (
            <div classNmae='submitDiv'>
                <div className='submitInput'>
                    <Input placeholder="Basic usage" />
                </div>
                <Button  className=''>提交</Button>
            </div>   
        )
    }
}