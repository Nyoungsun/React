import React from 'react';

const Test07Output = ({name, onFirst}) => {

    return (
        <div>
            <h3>{name}님 설문조사 감사합니다.</h3>
            <p><button onClick={onFirst}>확인</button></p>
        </div>
    );
};

export default Test07Output;