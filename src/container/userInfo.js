import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Student from '../components/op/student/student'
import * as todoActionCreators from '../actions/op/op.js'
import '../components/op/op.css'

class Op extends Component {
    componentDidMount = () =>{
        const mid = 33090002;
        const { todoActions } =this.props;
        todoActions.fetchStudentList(mid);
    }

    render() {
        const { todoActions } = this.props;
        return (           
            <div className="todo-ctn">
                <div className='op_all'>
                    <Student state={this.props} todoActions={todoActions} />
                </div>
            </div>                
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { historyNum,
        onTimeClass,
        userState,
        entities } = state;
    return {
        historyNum,
        onTimeClass,
        userState,
        entities
    };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(todoActionCreators, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Op);