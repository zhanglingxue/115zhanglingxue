import React,{Component} from "react";
import '../App.css';


export default class Input extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {item} = this.props;
        return(
            <ul className="content_2" >
                <li className="item">title:<input type="myInput" ref="myInput" onChange={this.props.show3}></input></li>
                <li className="item">desc:<input type="myInput1" ref="myInput1" onChange={this.props.show4}></input></li>
                <li className="item">time:<input type="myInput2" ref="myInput2" onChange={this.props.show5}></input></li>
                <li className="item" onClick={this.props.submit}>添加</li>
            </ul>
        )
    }
}