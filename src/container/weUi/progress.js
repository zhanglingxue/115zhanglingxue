import React from 'react';
import ProgressView from '../../components/weui/Progress'
export default class Progress extends React.Component {
  state = {
    value:[{percent:'80%'},{percent:'50%'},{percent:'0%'}],
    showCancel:true,
  };

  handleUpLoad = () => {
    this.setState({
      value:[
        {percent:'100%'},
        {percent:'100%'},
        {percent:'100%'}
      ],
      showCancel:false,
    });
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