import React, { useState } from 'react';

const Test04 = () => {
    const [visible, setVisible] = useState(true);

    const onShow = () => {
        setVisible(true);
    }

    const onHide = () => {
        setVisible(false);
    }
    
    const onToggle = () => {
       setVisible(!visible)
    }
    return (
        <div>
            <button onClick={onShow}>보이기</button>
            <button onClick={onHide}>숨기기</button>
            <button onClick={onToggle}>{visible ? '숨기기' : '보이기'}</button>
            {
                visible ? <div style={{ width: 300, height: 300, background: 'hotpink', margin: '20px' }}></div> : null
                //visible && <div style={{ width: 300, height: 300, background: 'hotpink', margin: '20px' }}></div>
            }
        </div>
    );
};

export default Test04;