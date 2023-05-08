import React from 'react';
import Test03 from './Test03';

const Test03Modal = ({onClose}) => {
    return (
        <div>
            <div className='bg'></div>
            <div className='popup'>
                <p className='closex' style={{ cursor: 'pointer'}} onClick={onClose}>X</p>
                <h2>해브 어 나이스 데이</h2>
            </div>
        </div>
    );
};

export default Test03Modal;

