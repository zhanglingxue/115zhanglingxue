
const initState = {
    dataSource: [{
        key: '1',
        class: '高级班',
        course: '进行中',
        openTime: '2017-04-20',
        groupPeople:'小白老师',
        classRate:'5/21',
        subRate:'67.98%',
        commentSit:'90.00%',
        punchRate:'89.00%',
        satDegree:'90.00%'
    },{
        key: '2',
        class: '进阶班',
        course: '进行中',
        openTime: '2017-04-22',
        groupPeople:'小白老师',
        classRate:'13/21',
        subRate:'76.89%',
        commentSit:'80.00%',
        punchRate:'45.00%',
        satDegree:'70.00%'
    },{
        key: '3',
        class: '提高班',
        course: '进行中',
        openTime: '2017-04-23',
        groupPeople:'小白老师',
        classRate:'10/21',
        subRate:'13.89%',
        commentSit:'100.00%',
        punchRate:'78.99%',
        satDegree:'80.00%'
    },{
        key: '4',
        class: '入门班',
        course: '进行中',
        openTime: '2017-04-24',
        groupPeople:'小白老师',
        classRate:'19/21',
        subRate:'98.45%',
        commentSit:'28.98%',
        punchRate:'44.65%',
        satDegree:'30.00%'
    }], 
};

export default function todoList(state = initState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
