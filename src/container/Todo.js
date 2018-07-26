import React, { Component } from 'react';
import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import Filter from '../components/todo/Filter';
import Dialog from '../components/todo/Dialog';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions'
import '../components/todo/todo.css';

class Todo extends Component {
    render() {
        const { todoActions } = this.props;
        return (
            <div className="todo-ctn">
                <AddTodo todoActions={todoActions} />
                <TodoList state={this.props} todoActions={todoActions} />
                <Dialog state={this.props} todoActions={todoActions} />
                <Filter />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { messageState, switchState } = state;
    return { messageState, switchState };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(todoActionCreators, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);