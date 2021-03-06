import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/op/header/Header';
import TopBar from '../components/op/topBar/TopBar';
import * as todoActionCreators from '../actions/op/op';
import '../components/op/op.css';

class Op extends Component {
    componentDidMount = () => {
      const mid = this.props.params.id;
      const { todoActions } = this.props;
      todoActions.fetchUserInfo(mid);
      todoActions.fetchLessonInfo(mid);
      todoActions.fetchSatisfiledList(mid);
    }

    render() {
      const { todoActions } = this.props;
      return (
        <div className="todo-ctn">
          <div className="op_all">
            <Header state={this.props} />
            <TopBar state={this.props} todoActions={todoActions} />
          </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  const {
    historyNum,
    onTimeClass,
    userState,
    entities
  } = state;
  return {
    historyNum,
    onTimeClass,
    userState,
    entities
  };
}
function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Op);
