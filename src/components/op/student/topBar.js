import React, { Component } from 'react';
import { Input, Select, AutoComplete,Button } from 'antd';
import '../buttonBox/ButtonBox.css';

const InputGroup = Input.Group;
const Option = Select.Option;

export default class TopBar extends Component {
    constructor(){
        super();
        this.state = {
            inputVal:'',
        }
    }

    handleChange = (event) =>{
        this.setState({
            inputVal:event
        })
    }

    handleClick = () =>{
        const {todoActions} = this.props;
        todoActions.fetchStudentList(this.state.inputVal);
    }
    render() {
        return (
            <div>
                <div className='left_button'>
                    <Button>汇总</Button>
                    <Button className='gray_button'>摄影课</Button>
                    <Button>绘画课</Button>
                </div>
                <div className='right_button'>
                    <InputGroup compact>
                        <Select defaultValue="mid">
                            <Option value="mid">mid</Option>
                        </Select>
                        <AutoComplete
                            style={{ width: 200 }}
                            onChange={this.handleChange.bind(this)}
                            placeholder="MID"
                        />
                        <Button onClick={this.handleClick}>搜索</Button>
                    </InputGroup>
                </div>
            </div>   
        )
    }
} 