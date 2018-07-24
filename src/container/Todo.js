import React, { Component } from 'react';
import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import Filter from '../components/todo/Filter';
import DialogView from '../components/todo/Dialog';
import '../components/todo/todo.css';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {
                    img: require('../img/1414.jpg'),
                    title: '打火机与公主裙',
                    description: '[小程序]到保定的火车票太难抢啦，需要你助我一臂之力',
                    time: '下午2:31',
                },
                {
                    img: require('../img/1413.jpg'),
                    title: '小年糕前端集训营',
                    description: '[链接]',
                    time: '早上9:06',
                },
                {
                    img: require('../img/people.jpg'),
                    title: '淑芬',
                    description: '淑芬淑芬淑芬',
                    time: '昨天12:06',
                }
            ],
            multipleChoice: false,
            key:null,
        }
    }
    changeMessage = (mess) => {
        this.setState({
            messages: mess.cope,
        })
    }
    addDiv = (item) => {
        const copeMessage = this.state.messages.slice();
        copeMessage.unshift({
            ...item,
        })
        this.setState({
            messages: copeMessage,
        })
    }
    deleteMore = (items) => {
        const x = (a, b) => {
            return b > a;
        }
        const newArr = items.deleteArray;
        const copeMessage1 = this.state.messages.slice();
        newArr.sort(x);
        newArr.map((item, index) => {
            return copeMessage1.splice(item, 1);
        })
        this.setState({
            messages: copeMessage1,
            deleteArray: []
        })
    }
    render() {
        return (
            <div className="todo-ctn">
                <AddTodo addMess={this.addDiv} />
                <TodoList itemMessage={this.state.messages} changeMess={this.changeMessage} 
                    Arrays={this.deleteMore} />
                {/* <DialogView item={this.state} closeDialog={this.changeMessage}
                    chance={this.chanceButton}/> */}
                <Filter />
            </div>
        )
    }
} 