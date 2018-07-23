import React, { Component } from 'react';
import './todo.css'

const searchImg = require('../../img/ok.png')

export default class Todo extends Component{
    render(){
        return (
            <div className="todo_ctn">
                <img src={searchImg} />
            </div>
        )
    }
} 