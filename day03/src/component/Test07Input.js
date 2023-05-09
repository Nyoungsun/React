import React from 'react';

const Test07Input = ({ data, onInput, onNext }) => {

    const { name, age, addr, tel } = data

    return (
        <div>
            <p>이름
            <input type='text' name='name' value={name} onChange={onInput} />
            </p>
            <p>나이
            <input type='text' name='age' value={age} onChange={onInput} />
            </p>
            <p>주소
            <input type='text' name='addr' value={addr} onChange={onInput} />
            </p>
            <p>핸드폰
            <input type='text' name='tel' value={tel} onChange={onInput} />
            </p>
            <p><button onClick={onNext}>다음</button></p>
        </div>
    );
};

export default Test07Input;