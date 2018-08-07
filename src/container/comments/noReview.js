import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as comActionTypes from '../../actions/comments/comments.js'
import { Row,Col } from 'antd'
import MyReview from '../../components/comments/myReview/MyReview'
import '../../components/comments/comments.css'
import todoList from '../../reducers/comments/imgReducer';


class noReview extends Component {
    componentDidMount = () =>{
        const { todoActions } =this.props;
        const isReviewed = 0;
        todoActions.fetchHomeWorkInfo(isReviewed)
    }

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
    const {imgReducer,entities } = state;
    return {
        imgReducer,
        entities
    };
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(comActionTypes, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(noReview);