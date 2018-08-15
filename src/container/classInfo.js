import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Klass from '../components/op/klass/klass';
import * as todoActionCreators from '../actions/op/op';
import '../components/op/op.css';

class Op extends Component {
    componentDidMount = () => {
      const id = 1;
      const { todoActions } = this.props;
      todoActions.fetchClassInfo(id);
    }

    render() {
      return (
        <div className="todo-ctn">
          <div className="op_all">
            <Klass state={this.props} />
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
