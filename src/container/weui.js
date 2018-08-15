import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class WeUi extends Component {
  render() {
    return (
      <div>
        <div onClick={() => { browserHistory.push('demo'); }}>actionSheet</div>
        <div onClick={() => { browserHistory.push('dialog'); }}>dialog</div>
        <div onClick={() => { browserHistory.push('progress'); }}>progress</div>
        <div onClick={() => { browserHistory.push('slider'); }}>slider</div>
      </div>
    );
  }
}

export default connect()(WeUi);
