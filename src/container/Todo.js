import React, { Component } from 'react';
import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import Filter from '../components/todo/Filter';
import { connect } from 'react-redux';
import '../components/todo/todo.css';

class Todo extends Component {

    render() {
        const { dispatch } = this.props;
        return (
            <div className="todo-ctn">
                <AddTodo dispatch={dispatch} />
                <TodoList state={this.props} dispatch={dispatch} />
                {/* <Check /> */}
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