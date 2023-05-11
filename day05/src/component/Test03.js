import React, { useMemo, useState } from 'react';

const Test03 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const isEven = useMemo(() => { //return 값 기억
        return count1 % 2 === 0
    }, [count1])

    return (
        <div>
            <h2>카운트 : {count1}</h2>
            <button onClick={() => setCount1(count1 + 1)}>증가</button>

            <h2>카운트 : {count2}</h2>
            <button onClick={() => setCount2(count2 + 1)}>증가</button>

            <h2>
                결과: {isEven ? '짝수' : '홀수'}
            </h2>
        </div>
    );
};

export default Test03;