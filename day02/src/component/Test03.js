import React, { useState } from 'react';

const Test03 = () => {
    const [name, setName] = useState('홍길동')
    const [age, setAge] = useState(25)
    const [color, setColor] = useState('pink')

    const onName = () => {
        setName('코난')
    }

    const onAge = (num) => {
        setAge(num)
    }

    return (
        <div>
            <h2 style={{ background: color }}>
                이름: {name} / 나이: {age}
            </h2>
            <p>
                <button onClick={onName}>코난으로 이름을 변경</button>
                <button onClick={() => onAge(30)}>30으로 나이 변경</button>
                <button onClick={() => setAge(35)}>35로 나이 변경</button>
                <button onClick={() => setColor('red')}>색상 변경</button>
            </p>
        </div>
    );
};

export default Test03;