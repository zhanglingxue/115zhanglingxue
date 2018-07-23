import React, { Component } from 'react';
import AddTode from '../components/todo/AddTode';
import TodoList from '../components/todo/TodoList';
import Filter from '../components/todo/Filter.js';
import '../components/todo/todo.css';

const addImg = require('../img/ok.png') 
const searchImg = require('../img/red_add.png') 

export default class Todo extends Component{
    render(){
        return (
            <div className="todo-ctn">
                <AddTode />
                <TodoList />
                <Filter />
            </div>
        )
    }
} 