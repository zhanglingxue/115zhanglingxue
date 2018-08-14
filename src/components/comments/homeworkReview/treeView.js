import React, { Component } from 'react'
import { Tree   } from 'antd'
import './homeReview.css'


export default class homeReviews extends Component {

    handleTree = (department,level) =>{
        const TreeNode = Tree.TreeNode;
        const departId = level;
        const title = department[departId];
        return (
            <TreeNode title={title.name} key={title.id}>
            {
                title.child ? title.child.map(item=>{
                    return this.handleTree(department,item)
                })
                :null
            }
            </TreeNode>
        )
    }
    onSelect = (selectedKeys, info) => {
        const  { todoActions,state } = this.props;
        if(selectedKeys.length !== 0
            && state.department[selectedKeys].user){
            const child = state.department[selectedKeys].user;
            todoActions.fetchUserChance(child,info.selected)
        }
    }

    render() {
        const { state } = this.props;
        const level = state.homeworkReviews.level;
        return (
            <span className='directory'>
                <Tree
                    showLine
                    defaultExpandedKeys={['101']}
                    onSelect={this.onSelect}
                >
                {
                    this.handleTree(state.department,level)
                }
                </Tree>
            </span>
        )
    }
}
