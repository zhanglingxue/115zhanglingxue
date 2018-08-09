import React from 'react';
import { browserHistory } from 'react-router'
export default class WeUi extends React.Component {
  
  render() {
    return (
      <div>
        <div onClick={()=>{browserHistory.push(`demo`)}}>actionSheet</div>
        <div onClick={()=>{browserHistory.push(`dialog`)}}>dialog</div>
        <div onClick={()=>{browserHistory.push(`progress`)}}>progress</div>
        <div onClick={()=>{browserHistory.push(`slider`)}}>slider</div>
      </div>
    );
}
}