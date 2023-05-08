import React, { useState } from 'react';

const Test02 = () => {
    const [chk, setChk] = useState(true);

    // const onChk = () => {
    //     setChk(!chk)
    // }

    const onChk = (e) => {
        const { checked } = e.target
        setChk(checked)
    }

    return (
        <div style={{color: chk ? 'blue': 'red', fontSize:25, margin: 25}}>
            <input type='checkbox' checked={chk} onChange={onChk} />해브 어 나이스 데이
        </div>
    );
};

export default Test02;