import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class hisReview extends Component {
    componentDidMount = () =>{
        
    }

    render() {
        return (
            <div className="todo-ctn">
                
            </div>   
        )
    }
}

function mapStateToProps(state, ownProps) {
    
}
function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(todoActionCreators, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(hisReview);