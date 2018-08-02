import React, { Component } from 'react';
import { Table } from 'antd'
import '../student/student.css'

export default class Klass extends Component {

    render() {
        const { state} = this.props;
        const content = state.onTimeClass.classInfo.basic_info;
        return (
            <div className='student_cont'>
                <div>
                    <p className='title_style'>班级:{content.name}</p>
                    <p className='title_style'>班级ID:{content.id}</p>
                    <p className='title_style'>老师:{content.virtual_teacher.nick}
                    /ID:{content.virtual_teacher.id}/微信:{content.virtual_teacher.wx_code}</p>
                    <p className='title_style'>负责员工:{content.real_teacher.name}
                    /ID:{content.real_teacher.mid}/微信:{content.real_teacher.wx_code}</p>
                </div>
                <Table dataSource={state.onTimeClass.classInfo.list}
                columns={state.columns.columnsClass} bordered pagination={false}/> 
            </div>    
        )
    }
} 