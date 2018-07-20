import React,{Component} from "react";
import '../App.css';


export default class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
            time:'',
        }
    }

    handAddDiv = (event) =>{
        this.setState({
            title:event.target.value
        })
    }
    handAddDiv1 = (event) =>{
        this.setState({
            description:event.target.value
        })
    }
    handAddDiv2 = (event) =>{
        this.setState({
            time:event.target.value
        })
    }

    handerAdd = () =>{
        const {submit} = this.props;
        const {title,description,time} = this.state;
        submit && submit({
            title,
            description,
            time
        })
    }

    render(){
        const {item} = this.props;
        return(
            <ul className="content_2" >
                <li className="item">title:<input type="myInput" ref="myInput" onChange={this.handAddDiv.bind(this)}></input></li>
                <li className="item">desc:<input type="myInput1" ref="myInput1" onChange={this.handAddDiv1.bind(this)}></input></li>
                <li className="item">time:<input type="myInput2" ref="myInput2" onChange={this.handAddDiv2.bind(this)}></input></li>
                <li className="item" onClick={this.handerAdd}>添加</li>
            </ul>
        )
    }
}