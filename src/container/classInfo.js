import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/op/header/Header.js'
import { Tabs } from 'antd'
import TopBar from '../components/op/topBar/TopBar.js'
import Student from '../components/op/student/student'
import Klass from '../components/op/klass/klass'
import * as todoActionCreators from '../actions/op/op.js'
import '../components/op/op.css'

class Op extends Component {
    componentDidMount = () =>{
        const mid = 33090002;
        const id = 1;
        const { todoActions } =this.props;
        todoActions.fetchClassInfo(id);
    }

    render() {
        const { todoActions } = this.props;      
        return (    
            <div className="todo-ctn">
                <div className='op_all'>
                    <Klass state={this.props} />
                </div>
            </div>    
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { historyNum,
        onTimeClass,
        userState,columns } = state;
    return {
        historyNum,
        onTimeClass,
        userState,
        columns
    };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(todoActionCreators, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Op);