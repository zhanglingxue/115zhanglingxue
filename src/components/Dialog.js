import React,{Component} from "react";
import '../App.css';


export default class Dialog extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="close">
                <ul className="content_1" onClick={this.props.show2}>
                    <li className="item">置顶</li>
                    <li className="item">删除</li>
                    <li className="item">多选删除</li>
                </ul>
            </div>
        )
    }
}