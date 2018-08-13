import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as comActionTypes from '../../actions/comments/comments.js'
import HomeworkReview from '../../components/comments/homeworkReview/homeReview'
import '../../components/comments/comments.css'


class homeworkReviews extends Component {
    state={
        title:'点评作业:拥有个人点评页，可以为学生作业进行点评',
        isActive:false,
    }

    studentRightManage = () =>{
        this.setState({
            title:'点评作业:拥有个人点评页，可以为学生作业进行点评',
            isActive:true,
        })
    }
    teacherRightManage = () =>{
        this.setState({
            title:'带课老师:拥有审核点评老师点评内容的权限，包括撤回点评，自行点评',
            isActive:true,
        })
    }
    render() {
        const { todoActions } = this.props;
        return (
            <div className="todo-ctn">
                <h2>点评权限</h2>
                <div className='review-cate'>
                    <span className='review-content'>点评作业:拥有个人点评页，可以为学生作业进行点评</span>
                    <span className='right-manage' 
                        onClick={this.studentRightManage}>
                        权限管理
                    </span>
                </div>
                <div className='review-cate'>
                    <span className='review-content'>带课老师:拥有审核点评老师点评内容的权限，包括撤回点评，自行点评</span>
                    <span className='right-manage' 
                        onClick={this.teacherRightManage}>
                        权限管理
                    </span>
                </div>
                <HomeworkReview 
                    title={this.state.title}
                    state={this.props}
                    todoActions={todoActions}
                    isActive={this.state.isActive}
                    />
            </div>   
        )
    }
}

function mapStateToProps(state, ownProps) {
    const {        
        homeworkReviews
    } = state;
    return {
        homeworkReviews
    };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(comActionTypes, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(homeworkReviews);