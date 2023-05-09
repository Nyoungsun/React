import React from 'react';

const Animal = ({ name, onInputName }) => {
    return (
        <div>
            <h2>동물 컴포넌트</h2>
            <label>동물 이름 입력: </label>
            <input type='text' value={name} onChange={onInputName} />
        </div>
    );
};

export default Animal;