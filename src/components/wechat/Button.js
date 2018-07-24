import React,{Component} from "react";
import './Button.css'


export default class Images extends Component{
    
    render(){
        const {item} = this.props;
        return(
            <li className="footer_content" >
                <img src={item.img} className="footer_img" alt=''/>
            </li> 
        )
    }
}