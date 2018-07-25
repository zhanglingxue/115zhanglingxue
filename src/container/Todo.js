import React, { Component } from 'react';
import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import Filter from '../components/todo/Filter';
import { connect } from 'react-redux'
import '../components/todo/todo.css';

class Todo extends Component {
    constructor() {
        super();
    }
    changeMessage = (mess) => {
        this.setState({
            messages: mess.cope,
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
        const { dispatch } = this.props;
        return (
            <div className="todo-ctn">
                <AddTodo dispatch={dispatch} />
                <TodoList state={this.props} dispatch={dispatch} />
                <Filter />
            </div>
        )
    }
}



function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}
export default connect(mapStateToProps)(Todo);