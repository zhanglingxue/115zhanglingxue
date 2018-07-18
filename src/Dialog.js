import React,{Component} from "react";
import './App.css';


export default class Dialog extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <ul className="content_1" onClick={this.props.show2}>
                <li className="item">添加</li>
                <li className="item">删除</li>
                <li className="item">修改</li>
                <li className="item">查找</li>
            </ul>
        )
    }
}