import React from 'react';

const Lion = (props) => {

    //비구조화 할당
    const {name} = props;

    return (
        <div>
            <h2>나는 {name} 컴포넌트</h2>
        </div>
    );
};

export default Lion;