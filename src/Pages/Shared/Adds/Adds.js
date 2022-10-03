import React from 'react';
import addImg from '../../../images/adds.gif';
import './Adds.css';

const Adds = () => {
    return (
        <div className="adds-container d-flex items-center justify-center">
            <div className="adds-wrapper">
                <img src={addImg} alt="" />
            </div>
        </div>
    );
};

export default Adds;