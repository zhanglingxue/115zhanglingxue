import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/op/header/Header.js'
import TopBar from '../components/op/topBar/TopBar.js'
import '../components/op/op.css'

class Op extends Component {
    render() {
        return (
            <div className="todo-ctn">
                <div className='op_all'>
                    <Header state={this.props}/>
                    <TopBar state={this.props}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { historyNum,
        onTimeClass,
        userState } = state;
    return { historyNum,
        onTimeClass,
        userState };
}
// function mapDispatchToProps(dispatch) {
//     return {
//         todoActions: bindActionCreators(todoActionCreators, dispatch)
//     }
// }
export default connect(mapStateToProps)(Op);