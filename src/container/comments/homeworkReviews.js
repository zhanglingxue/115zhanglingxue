import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as comActionTypes from '../../actions/comments/activeTree'
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
// const mapEntities = (homeworkReviews) => {  
//     const {
//         level,
//         user
//     } = homeworkReviews;
//     const data = level.map(id =>{
//         const {
//             secondLevel:id2,
//         } = homeworkReviews.data.level[id];
//         const _second = id2.map(idx =>{
//             const {
//                 threeLevel:id3,
//             } = homeworkReviews.data.secondLevel[idx];
//             const _three = id3.map(idd =>{
//                 const {
//                     group:id4,
//                     user:id5
//                 } = homeworkReviews.data.threeLevel[idd];
//                 const _group = id4.map(index =>{
//                     const {
//                         user:id6
//                     } = homeworkReviews.data.group[index];
//                     const group_user = id6.map(mid =>{
//                         return {
//                             ...homeworkReviews.data.user[mid]
//                         }
//                     })
//                     return {
//                         ...homeworkReviews.data.group[index],
//                         user:group_user,
//                     }
//                 })
//                 const _user = id5.map(mid =>{
//                     return {
//                         ...homeworkReviews.data.user[mid]
//                     }
//                 })
//                 return {
//                     ...homeworkReviews.data.threeLevel[idd],
//                     group:_group,
//                     user:_user
//                 }
//             });
//             return {
//                 ...homeworkReviews.data.secondLevel[idx],
//                 threeLevel:_three,
//             }
//         })
//         return {
//             ...homeworkReviews.data.level[id],
//             secondLevel:_second,
//         }
//     })
//     return data;
// }

// function mapStateToProps(state, ownProps) {
//     const {        
//         homeworkReviews,
//     } = state;
//     const homeworkReview = mapEntities(homeworkReviews);
//     return {
//         homeworkReview,
//     };
// }
function mapStateToProps(state, ownProps) {
    const {        
        homeworkReviews,
        entities:{
            department,
            user
        }
    } = state;
    return {
        homeworkReviews,
        department,
        user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(comActionTypes, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(homeworkReviews);