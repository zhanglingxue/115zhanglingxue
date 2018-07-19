import React,{Component} from "react";
import '../App.css';


export default class CheckBox extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {item} = this.props;
        return(
            <input type="checkbox"  /> 
        )
    }
}