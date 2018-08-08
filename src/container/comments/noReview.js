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

function mapStateToProps(state, ownProps) {
    const {        
        entities,
        noCommentReducer,
    } = state;
    return {
        entities,
        noCommentReducer,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(comActionTypes, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(noReview);