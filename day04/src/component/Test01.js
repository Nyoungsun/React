import React, { useEffect, useState } from 'react';

const Test01 = () => {
    const names = '김겅거 가더어 더덕다 거거겨 댜어두 어여어 먀나나 우오오 리략니 아가거'.split(' ')
    const [name, setName] = useState('홀길도')
    const [age, setAge] = useState(12)

    const onName = () => {
        const index = Math.floor(Math.random() * names.length) //Math.random() = 0.0이상 1.0미만 → 0부터 9까지
        setName(names[index])
    }

    const onAge = () => {
        setAge(age + 1)
    }


    //값이 변하기만 하면 실행된다. → 불필요한 사용이 많아짐(사용 X)
    // useEffect(() => {
    //     console.log('안녕하세요')
    // })

    //마운트될 때 한번만 실행
    // useEffect(() => {
    //     console.log('안녕하세요')
    // }, [])

    //name이 바뀔 때만 실행
    useEffect(() => {
        console.log('안녕하세요')
    }, [name])

    return (
        <div>
            <button onClick={onName}>이름 변경</button>
            <button onClick={onAge}>나이 증가</button>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    );
};

export default Test01;