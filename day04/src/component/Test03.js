import React from 'react';
import '../css/Test03.css';
import myStyle from '../css/Test03.module.css';

const Test03 = () => {
    return (
        <div>
            <div className='box'>Test(Test03.css)</div>
            <div className={myStyle.box}>Test(Test03.module.css)</div>
        </div>
    );
};

export default Test03;