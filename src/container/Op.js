import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/op/header/Header.js'
import TopBar from '../components/op/topBar/TopBar.js'
import * as todoActionCreators from '../actions/op/op.js'
import * as opAction from '../actions/op/op'
import '../components/op/op.css'

class Op extends Component {
    constructor(props){
        super(props);
        const { dispatch} =this.props;
        opAction.PostUserContent(dispatch);
        opAction.PostClassContent(dispatch)
    }
    
    render() {
        const { todoActions,dispatch } = this.props;
        return (
            <div className="todo-ctn">
                <div className='op_all'>
                    <Header state={this.props} todoActions={todoActions} dispatch={dispatch}/>
                    <TopBar state={this.props} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { historyNum,
        onTimeClass,
        userState } = state;
    return {
        historyNum,
        onTimeClass,
        userState
    };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(todoActionCreators, dispatch),
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Op);