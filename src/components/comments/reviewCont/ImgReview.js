import React, { Component } from 'react'
import { Carousel } from 'antd'
import '../comments.css'

export default class ImgReview extends Component {
    showImg = () =>{
        const { item,state } = this.props;
        return state.entities.postData[item].photos.map(idx =>{
            return (
                <img src={idx} className='imgStyles'/>
            )
        })
    }

    render() {
        return (
            <div className='imgsAllShow'>
                <Carousel autoplay>
                {
                    this.showImg()
                }
                </Carousel>,
            </div>   
        )
    }
}