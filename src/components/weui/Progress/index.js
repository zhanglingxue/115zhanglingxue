import React from 'react';
import PropTypes from 'prop-types';
import './progress.css';

export default class ProgressView extends React.Component {

    static defaultProps = {
        value:[],
        showCancel:'false',
    };

    static propTypes = {
        showCancel: PropTypes.string.isRequired,
        value: PropTypes.array.isRequired,
    }
    render() {
        const { 
           value,showCancel,onCancel
         } = this.props;
        return (
            <div>
                <div className="progress">
                    {
                        value.map((item,idx) =>{
                            const temp = item.percent.split('%');
                            return(
                            <div className='progress_div'>
                                <div className='progress_length'>
                                    <div className='progress_width' style={{width:`${temp[0]}`+'%'}}></div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>   
                <div onClick={onCancel} className='we_btn_onploy'>上传</div>
            </div>
        );
    }
}