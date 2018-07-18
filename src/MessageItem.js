import React,{Component} from "react";
import './App.css';


export default class MessageItem extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {item} = this.props;
        return(
            <li className="eve_content"  onClick={this.props.show1}>
                <img src={item.img} />
                <div className="textContent">
                    <p className="chatName">{item.title}</p>
                    <p className="chatCont">{item.description}</p>
                </div>
                <p className="chatTime">{item.time}</p>
            </li>
        )
    }
}