import React, { Component } from 'react';
import AddTodo from '../components/todo/AddTode';
import TodoList from '../components/todo/TodoList';
import Filter from '../components/todo/Filter.js';
import '../components/todo/todo.css';

export default class Todo extends Component {

    render() {
        return (
            <div className="todo-ctn">
                <AddTodo />
                <TodoList />
                <Filter />
            </div>
        )
    }
} 