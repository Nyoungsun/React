import React, { useRef, useState } from 'react';

const Test01 = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const onChangeId = (event) => {
        //비구조화 할당, input 태그 안에 있는 모든 속성들(type, value, onChange, ...) 중에서 value값만 가져온다.
        const { value } = event.target //이벤트를 발생한 대상
        setId(value)
    }

    const onChangePwd = (event) => {
        const { value } = event.target
        setPwd(value)
    }

    const onReset = () => {
        setId('');
        setPwd('');

        idRef.current.focus(); //current 필수
    }

    const idRef = useRef();


    return (
        <div>
            아이디: <input type='text' value={id} onChange={onChangeId} ref={idRef} />
            <br />
            <br />
            비밀번호: <input type='password' value={pwd} onChange={onChangePwd} />
            <br />
            <br />
            <button disabled={pwd.length < 6}>로그인</button>&emsp;
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test01;