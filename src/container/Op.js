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
        todoActions.fetchUserInfo(mid);
        todoActions.fetchLessonInfo(mid);
        todoActions.fetchStudentList(mid);
        todoActions.fetchClassInfo(id);
    }

    render() {
        const { todoActions } = this.props;
        const TabPane = Tabs.TabPane;
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="tab1" key="1">
                    <div className="todo-ctn">
                        <div className='op_all'>
                            <Header state={this.props} />
                            <TopBar state={this.props} />
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="tab2" key="2">
                    <div className="todo-ctn">
                        <div className='op_all'>
                            <Student state={this.props} todoActions={todoActions} />
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="tab3" key="3">
                    <div className="todo-ctn">
                        <div className='op_all'>
                            <Klass state={this.props} />
                        </div>
                    </div>
                </TabPane>
            </Tabs>
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
        // dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Op);