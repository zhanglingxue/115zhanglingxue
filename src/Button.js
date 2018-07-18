import React,{Component} from "react";
import './App.css';


export default class Images extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {item} = this.props;
        return(
            <li className="footer_content" >
                <img src={item.img} className="footer_img" />
            </li> 
        )
    }
}