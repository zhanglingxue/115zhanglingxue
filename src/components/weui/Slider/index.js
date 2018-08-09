import React from 'react';
import PropTypes from 'prop-types';
import './slider.css';

export default class SliderView extends React.Component {
    static defaultProps = {
        
    };

    static propTypes = {
        showCancel: PropTypes.string.isRequired,
        value: PropTypes.array.isRequired,
    }
    render() {
        return (
            <div className='weui-slider-box'>
               <div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
               </div>
               <div>
                   
               </div>
            </div>
        );
    }
}