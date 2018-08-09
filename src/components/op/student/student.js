import React, { Component } from 'react';
import TopBar from './topBar'
import StuTable from './stuTable'
import './student.css'

export default class Student extends Component {

    render() {
        const { state,todoActions } = this.props;
        return (
            <div className='student_cont'>
                <TopBar state={state} todoActions={todoActions}/>
                {/* <StuTable state={state} />   */}
            </div>    
        )
    }
} 