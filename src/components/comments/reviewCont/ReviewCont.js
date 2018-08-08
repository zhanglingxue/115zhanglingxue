import React, { Component } from 'react'
import ImgReview from './ImgReview'
import HomeWork from './homeWork'
import Reply from './reply'
import AllNoReview from '../allReview/allNoReview'
import '../comments.css'
import { Col,Row } from 'antd/lib/grid';

export default class ReviewCont extends Component {
    componentDidMount = () =>{
        const { todoActions,params } =this.props;
        todoActions.fentchPostComment(params);
    }
    handerDiv = () =>{
        const { state,params,todoActions } = this.props;
        const { token,isReviewed } = params;
        
        let temp;
        if(token === 1 && isReviewed === 0){
            temp = state._unReviewed;
        }else if(token === 1 && isReviewed === 1){
            temp = state._reviewed;
        }else if(token === 0 && isReviewed === 0){
            temp = state._allUnReviewed;
        }else if(token === 0 && isReviewed === 1){
            temp = state._allReviewed;
        }
        // if(token === 1 && isReviewed === 0){
        //     temp = state.noCommentReducer.unReviewed;
        // }else if(token === 1 && isReviewed === 1){
        //     temp = state.noCommentReducer.reviewed;
        // }else if(token === 0 && isReviewed === 0){
        //     temp = state.noCommentReducer.allUnReviewed;
        // }else if(token === 0 && isReviewed === 1){
        //     temp = state.noCommentReducer.allReviewed;
        // }
        // return temp.map(item => {
        //     return (
        //         <div className='recivewDiv'>
        //             <Row>
        //                 <Col span={18} className='my_comm_cont'>
        //                     <div className='imgDiv'>
        //                         <ImgReview item={item} state={state}/>
        //                     </div>
        //                     <div className='contentDiv'>
        //                         <HomeWork item={item} state={state}/>
        //                     </div>
        //                     <div className='submitDiv'>
        //                         <Reply item={item} state={state} todoActions={todoActions}/>
        //                     </div>
        //                 </Col>
        //                 <Col span={6} >
                            
        //                     <div className='commentList'>
        //                         <AllNoReview item={item} state={state} todoActions={todoActions}/>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </div> 
        //     )      
        // })
        return temp.map(item => {
            return (
                <div className='recivewDiv'>
                    <Row>
                        <Col span={18} className='my_comm_cont'>
                            <div className='imgDiv'>
                                <ImgReview item={item} state={state}/>
                            </div>
                            <div className='contentDiv'>
                                <HomeWork item={item} state={state}/>
                            </div>
                            <div className='submitDiv'>
                                <Reply item={item} state={state} todoActions={todoActions}/>
                            </div>
                        </Col>
                        <Col span={6} >
                            
                            <div className='commentList'>
                                <AllNoReview item={item} state={state} todoActions={todoActions}/>
                            </div>
                        </Col>
                    </Row>
                </div> 
            )      
        })
    }

    render() {
        const { state } = this.props;
        return (
            <div className='content_all'>
                {
                    this.handerDiv()
                } 
            </div>   
        )
    }
}