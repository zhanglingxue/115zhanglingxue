import React, { Component } from 'react'
import { Carousel,Avatar } from 'antd'
import '../comments.css'

export default class ImgReview extends Component {

    showImg = () =>{
        const { item } = this.props;
        return item.photos.map(idx =>{
            return (
                <img src={idx} className='imgStyles'/>
            )
        })
    }

    render() {
        

        return (
            <div className='imgsAllShow'>
                {
                    this.showImg()
                }
            </div>   
        )
    }
}