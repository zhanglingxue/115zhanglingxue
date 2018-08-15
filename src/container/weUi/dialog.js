import React from 'react';
import DialogView from '../../components/weui/Dialog';
import '../../components/weui/Dialog/dialog.css';

export default class Dialog extends React.Component {
  state = {
    isDialogActive: false,
    title: '',
    renderBody: 'gtrgtrtrgtr',
    type: '',
    okText: '确定',
    cancelText: '取消'
  };

  handleShowiosDialog1 = () => {
    this.setState({
      isDialogActive: true,
      title: '这是一个标题',
      renderBody: '弹框内容，应不超过三行',
      type: 'ios',
      okText: '确定',
      cancelText: '取消'
    });
  }
  handleShowiosDialog2 = () => {
    this.setState({
      isDialogActive: true,
      title: '',
      renderBody: '弹框内容，应不超过三行',
      type: 'ios',
      okText: '知道了',
      cancelText: ''
    });
  }
  handleShowAndDialog1 = () => {
    this.setState({
      isDialogActive: true,
      title: '标题1',
      renderBody: '弹框内容，应不超过三行',
      type: 'android',
      okText: '主操作',
      cancelText: '辅助操作'
    });
  }
  handleShowAndDialog2 = () => {
    this.setState({
      isDialogActive: true,
      title: '',
      renderBody: '弹框内容，应不超过三行',
      type: 'android',
      okText: '主操作',
      cancelText: '辅助操作'
    });
  }
  handleHideDialog = () => {
    this.setState({
      isDialogActive: false
    });
  }
  render() {
    return (
      <div>
        <div onClick={this.handleShowiosDialog1} className="we_btn">ios dialog1</div>
        <div onClick={this.handleShowiosDialog2} className="we_btn">ios dialog2</div>
        <div onClick={this.handleShowAndDialog1} className="we_btn">android dialog1</div>
        <div onClick={this.handleShowAndDialog2} className="we_btn">android dialog2</div>
        <DialogView
          isActive={this.state.isDialogActive}
          type={this.state.type}
          title={this.state.title}
          okText={this.state.okText}
          cancelText={this.state.cancelText}
          renderBody={this.state.renderBody}
          onCancel={this.handleHideDialog}
          onOk={this.handleHideDialog}
        />
      </div>
    );
  }
}
