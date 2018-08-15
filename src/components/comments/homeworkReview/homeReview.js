import React, { Component } from 'react';
import TreeView from './treeView';
import DepartmentView from './department';
import RightOffier from './rightOffier';
import './homeReview.css';


export default class homeReviews extends Component {
classChance = () => {
  const { isActive } = this.props;
  if (!isActive) {
    return 'review_content';
  }
  return 'review_content show_review_cont';   
}

render() {
  const { title, state, todoActions } = this.props;
  return ( 
    <div className={this.classChance()}>
      <div className="contentName">{title}</div>
      <div className="review_management">
        <RightOffier state={state} todoActions={todoActions} />
        <TreeView state={state} todoActions={todoActions} />
        <DepartmentView state={state} todoActions={todoActions} />
      </div>
    </div>
  );
}
}
