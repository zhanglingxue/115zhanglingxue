import React from 'react';
import PropTypes from 'prop-types';
import './dialog.css';

export default class DialogView extends React.Component {

    static defaultProps = {
        isDialogActive: false,
        title: '',
        renderBody:'',
        type:'',
        okText:'',
        cancelText:'',
        onCancel: () => {},
    };

    static propTypes = {
        isActive: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        renderBody: PropTypes.string.isRequired,
        onCancel: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired,
        okText: PropTypes.string.isRequired,
        cancelText: PropTypes.string.isRequired,
    }

    getMaskClassName = () => {
        if (!this.props.isActive) {
            return 'mask hideMask';
        }
        return 'mask showMask';
    }
    getMenuClassName = () => {
        if (!this.props.isActive) {
            return 'androidMenu'
        }
        return 'androidMenu showandroid';
    }

    getTitleClassName = () =>{
        if(this.props.type === 'android'){
            return 'title1 posicenter'
        }
        return 'title1'
    }
    getOnCancelClassName = () =>{
        if(this.props.type === 'android') {
            return 'btn btn_right'
        }
        return 'btn divider flex'
    }
    getOnOkClassName = () =>{
        if(this.props.type === 'android') {
            return 'btn btn_right1 okClass'
        }
        return 'btn divider flex okClass'
    }
    render() {
        const { 
            title,
            type,
            renderBody,
            okText,
            cancelText,
            onOk,
            onCancel,
            isActive
         } = this.props;
        if(isActive){
            return (
                <div className="actionsheetCtn">
                    <div className={this.getMaskClassName()} />
                    <div className={this.getMenuClassName()}>  
                        {
                            !title.length
                            ? null
                            : <div className={this.getTitleClassName()}>{title}</div>
                        }
                        <div className='btn divider renderBody'>{renderBody}</div>
                        <div className='chance'>  
                            {
                                !cancelText.length
                                ?null
                                :<div className={this.getOnCancelClassName()} 
                                    onClick={onCancel}>{cancelText}</div>
                            }
                            <div className={this.getOnOkClassName()} 
                                onClick={onOk}>{okText}</div>
                        </div>
                    </div>
                </div>
            );
        }else return null;
        
    }
}