import React, { Component } from 'react';
import { Table,Icon,Popover } from 'antd'
import { IndexLink } from 'react-router'
import './Tables.css';

export default class Tables extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            columns:[{
                title: '班级',
                dataIndex: 'classInfo.name',
                key: 'classInfo.id',
                align:'center',
                render:(text,record) => 
                    <div>
                        <IndexLink  to={`/classInfo/${record.id}`}>
                            <Icon type="exclamation" />{text}
                        </IndexLink>
                    </div>
            }, {
                title: '课程状态',
                dataIndex: 'status',
                key: 'status',
                align:'center',
                render:text => {
                    if(text === 0){
                        return <div>进行中</div>
                    }else{
                        return <div>已结束</div>
                    }
                }
            }, {
                title: '开课时间',
                dataIndex: 'startTime',
                key: 'startTime',
                align:'center',
            },{
                title: '教学组负责人',
                dataIndex: 'teacherInfo.nick',
                key: 'teacherInfo.id',
                align:'center',
                render:(text,record,index) => {
                    const temp = record.teacherInfo;
                    const content = (
                        <div>
                          <p>老师账号：{temp.nick}/ID：{temp.id}/微信：{temp.wxCode}</p>
                          <p>真实姓名：{temp.realName}/MID：{temp.mid}</p>
                        </div>
                    );
                    return <div>
                        <Popover content={content}  trigger="click">   
                            <Icon type="link" />{text}
                        </Popover>
                    </div>
                }
                    
                
            },{
                title: '上课率',
                dataIndex: 'enterRate',
                key: 'enterRate',
                align:'center',
                render: text => {
                    const num1 = text.split('/')[0];
                    const num2 = text.split('/')[1];
                    const temp = (num1/num2).toFixed(3);
                    if(temp < 0.80){
                        return <div className='color_font'>{text}</div>
                    }else if(0.80 < temp < 0.95){
                        return <div className='color_font_1'>{text}</div>  
                    }else{
                        return <div>{text}</div>
                    }
                }  
            },{
                title: '作业提交率',
                dataIndex: 'homeworkSubmitRate',
                key: 'homeworkSubmitRate',
                align:'center',
                render: text => {
                    const temp = (parseFloat(text)*100).toFixed(2);
                    if(text < 0.80){
                        return <div className='color_font'>{`${temp}%`}</div>    
                    }else if(0.80 < text < 0.95){
                        return <div className='color_font_1'>{`${temp}%`}}</div>
                    }else{
                        return <div>{`${temp}%`}</div>               
                    }
                }
            },{
                title: '被点评情况',
                dataIndex: 'beCommenttedRate',
                key: 'beCommenttedRate',
                align:'center',
                render: text => {
                    const temp = (parseFloat(text)*100).toFixed(2);
                    if(text < 0.80){
                        return <div className='color_font'>{`${temp}%`}</div>
                    }else if(0.80 < text < 0.95){
                        return <div className='color_font_1'>{`${temp}%`}}</div>
                    }else{
                        return <div>{`${temp}%`}</div>
                    }
                }
            },{
                title: '打卡率',
                dataIndex: 'signRate',
                key: 'signRate',
                align:'center',
                render: text => {
                    const num1 = text.split('/')[0];
                    const num2 = text.split('/')[1];
                    const temp = (num1/num2).toFixed(3);
                    if(temp < 0.80){
                        return <div className='color_font'>{text}</div>
                    }else if(0.80 < temp < 0.95){
                        return <div className='color_font_1'>{text}</div>
                    }else{
                        return <div>{text}</div>
                    }
                }
            },{
                title: '满意度',
                dataIndex: 'satisfyRate',
                key: 'satisfyRate',
                align:'center',
                render: text => {
                    const temp = (parseFloat(text)*100).toFixed(2);
                    if(text < 0.80){
                        return <div className='color_font'>{`${temp}%`}</div>
                    }else if( text > 0.95){
                        return <div className='color_font_1'>{`${temp}%`}</div>       
                    }else{
                        return <div>{`${temp}%`}</div>
                    }
                }
            }],
        }
    }

    render() {
        const { state } = this.props;
        const list = state.onTimeClass.dataSource;
        const list_his = state.historyNum.dataSource;
        let newcurrentList,newHistoryList;
        if(list) {
            newcurrentList = list.map(t => {
                const currInfo = state.entities.classInfo[t];
                return {
                    ...currInfo,
                    teacherInfo:state.entities.teachers[currInfo.teacherInfo],
                    classInfo: state.entities.classes[currInfo.classInfo],
                }
            })
        }
        if(list_his) {
            newHistoryList = list_his.map(t => {
                const listInfo =  state.entities.classInfo[t];
                return {
                    ...listInfo,
                    teacherInfo:state.entities.teachers[listInfo.teacherInfo],
                    classInfo: state.entities.classes[listInfo.classInfo],
                }
            })
        }
        return (
            <div>
                <div className='title_table'>
                    <h2>在学课程</h2>
                </div>
                <Table dataSource={newcurrentList}
                    columns={this.state.columns} bordered pagination={false}/>
                <div className='title_table'>
                    <h2>历史数据</h2>
                </div>
                <Table dataSource={newHistoryList}
                    columns={this.state.columns} bordered />
            </div>
        )
    }
} 