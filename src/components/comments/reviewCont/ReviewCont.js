import React, { Component } from 'react';
import { Col, Row } from 'antd/lib/grid';
import ImgReview from './ImgReview';
import HomeWork from './homeWork';
import Reply from './reply';
import AllNoReview from '../allReview/allNoReview';
import '../comments.css';


export default class ReviewCont extends Component {
    componentDidMount = () => {
      const { todoActions, params } = this.props;
      todoActions.fentchPostComment(params);
    }
    handerDiv = () => {
      const { state, params, todoActions } = this.props;
      const { token, isReviewed } = params;
      let temp;
      if (token === 1 && isReviewed === 0) {
        temp = state._unReviewed;
      } else if (token === 1 && isReviewed === 1) {
        temp = state._reviewed;
      } else if (token === 0 && isReviewed === 0) {
        temp = state._allUnReviewed;
      } else if (token === 0 && isReviewed === 1) {
        temp = state._allReviewed;
      }
      return temp.map(item => (
        <div className="recivewDiv">
          <Row>
            <Col span={18} className="my_comm_cont">
              <div className="imgDiv">
                <ImgReview item={item} state={state} />
              </div>
              <div className="contentDiv">
                <HomeWork item={item} state={state} todoActions={todoActions} />
              </div>
              <div className="submitDiv">
                <Reply item={item} state={state} todoActions={todoActions} />
              </div>
            </Col>
            <Col span={6} >
              <div className="commentList">
                <AllNoReview item={item} state={state} todoActions={todoActions} />
              </div>
            </Col>
          </Row>
        </div>
      ));
    }

    render() {
      return (
        <div className="content_all">
          {
            this.handerDiv()
          }
        </div>
      );
    }
}
