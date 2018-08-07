import React, { Component } from 'react'
import ImgReview from './ImgReview'
import HomeWork from './homeWork'
import Reply from './reply'
import AllNoReview from '../allReview/allNoReview'
import '../comments.css'
import { Col,Row } from 'antd/lib/grid';

export default class ReviewCont extends Component {
    
    handerDiv = () =>{
        const { newListAll,state } = this.props;
        // let newList ;
        // if(state.imgReducer) {
        //     newList = state.imgReducer.map(idx => {
        //         return state.entities.postData[idx];
        //     })
        // }
        return newListAll.map(item => {
            return (
                <div className='recivewDiv'>
                    <Row>
                        <Col span={18} className='my_comm_cont'>
                            <div className='imgDiv'>
                                <ImgReview item={item}/>
                            </div>
                            <div className='contentDiv'>
                                <HomeWork item={item} state={state}/>
                            </div>
                            <div className='submitDiv'>
                                <Reply item={item} state={state}/>
                            </div>
                        </Col>
                        <Col span={6} className='commentList'>
                            <div >
                                <AllNoReview item={item}/>
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
            <div>
                {
                    this.handerDiv()
                } 
            </div>   
        )
    }
}