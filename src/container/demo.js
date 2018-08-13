import React from 'react';
import ActionSheet from '../components/weui/ActionSheet';

export default class DemoExample extends React.Component {
  state = {
    isActionSheetActive: false,
    title: '',
    menus: [],
    type:'ios',
  };

  handleShowActionSheet = () => {
    this.setState({
      isActionSheetActive: true,
      title: '这是一个标题',
      menus: [{
        title: '示例菜单1',
        click: () => console.log('示例菜单1')
      }, {
        title: '示例菜单2',
        click: () => console.log('示例菜单2')
      }],
      type:'ios',
    });
  }

  handleShowActionSheetAndroid = () => {
    this.setState({
      isActionSheetActive: true,
      title: '',
      menus: [{
        title: '示例菜单33',
        type: 'danger',
        click: () => console.log('示例菜单33')
      }, {
        title: '示例菜单44',
        click: () => console.log('示例菜44')
      }],
      type:'android',
    });
  }

  handleHideActionSheet = () => {
    this.setState({
      isActionSheetActive: false
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleShowActionSheet}>ios actionsheet</div>
        <div onClick={this.handleShowActionSheetAndroid}>android actionsheet</div>

        <ActionSheet
          isActive={this.state.isActionSheetActive}
          type={this.state.type}
          title={this.state.title}
          menus={this.state.menus}
          onCancel={this.handleHideActionSheet}
        />
      </div>
    );
}
}