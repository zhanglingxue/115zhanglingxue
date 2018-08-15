import React from 'react';
import ProgressView from '../../components/weui/Progress';

export default class Progress extends React.Component {
  state = {
    value: '50',
    showCancel: true
  };
  handleUpLoad = () => {
    let temp = 0;
    this.setState({
      showCancel: false
    });
    setInterval(() => {
      if (temp === 100) {
        return;
      }
      temp += 10;
      console.log(`'${temp}'`);
      // this.setState({
      //   value:`'${temp}'`,
      // });
    }, 500);
  }
  render() {
    return (
      <div>
        <ProgressView
          value={this.state.value}
          showCancel={this.state.showCancel}
          onCancel={this.handleUpLoad}
        />
      </div>
    );
  }
}
