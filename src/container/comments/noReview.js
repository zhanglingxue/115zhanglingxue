import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as comActionTypes from '../../actions/comments/comments.js'
import { Row,Col } from 'antd'
import MyReview from '../../components/comments/myReview/MyReview'
import '../../components/comments/comments.css'


class noReview extends Component {

    render() {
        const { todoActions } =this.props;
        return (
            <div className="todo-ctn">
                <Row>
                    <Col span={24}>
                        <MyReview state={this.props} todoActions={todoActions}/>
                    </Col>
                </Row>
            </div>   
        )
    }
}

const mapEntities = (ids, entity) => {
    const {
        classes,
        teachers,
        comments,
        author,
        postData
    } = entity;
    const data = ids.map(id => { //组装
        const {
            classInfo: classId,
            teacherInfo: teacherId,
            comments: commentIdList,
            author:authorId
        } = postData[id];
        const _comments = commentIdList.map(id => comments[id]);//映射评论
        return {
            ...postData[id],
            classInfo: classes[classId],
            author:author[authorId],
            teacherInfo: teachers[teacherId],
            comments: _comments
        }
    })
    return data;
}

function mapStateToProps(state, ownProps) {
    const {        
        entities,
        // noCommentReducer,
        noCommentReducer:{
            unReviewed,
            reviewed,
            allUnReviewed,
            allReviewed,
            backArr
        }
    } = state;
    const _unReviewed = mapEntities(unReviewed,entities);
    const _reviewed = mapEntities(reviewed,entities);
    const _allUnReviewed = mapEntities(allUnReviewed,entities);
    const _allReviewed = mapEntities(allReviewed,entities)
    return {
        // entities,
        // noCommentReducer,
        _unReviewed,
        _reviewed,
        _allUnReviewed,
        _allReviewed,
        backArr
    };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(comActionTypes, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(noReview);