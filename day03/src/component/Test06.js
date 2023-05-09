import React, { useRef, useState } from 'react';

const Test06 = () => {

    // const [id, setId] = useState('');
    // const [name, setName] = useState('');
    // const [pwd, setPwd] = useState('');

    const [data, setData] = useState({
        name: '',
        id: '',
        pwd: ''
    });

    const { name, id, pwd } = data

    const nameRef = useRef();

    const onInput = (e) => {
        const { name, value } = e.target //name은 name속성의 값

        setData({
            ...data, // 1.객체 복사(복사하지 않으면 매번 초기화됨), 2.원하는 부분만 수정
            [name]: value //이벤트가 일어난 곳 태그의 name속성의 값을 가져온다.(name속성이 여러개이므로 [] 사용)
        })
    }

    const onReset = () => {
        setData({
            name: '',
            id: '',
            pwd: ''
        })

        nameRef.current.focus()
    }

    return (
        <div>
            <table border='1' cellPadding='5' cellSpacing='0'>
                <tr>
                    <th>이름</th>
                    <td><input type='text' name='name' value={name} onChange={onInput} ref={nameRef} /></td>
                </tr>
                <tr>
                    <th>아이디</th>
                    <td><input type='text' name='id' value={id} onChange={onInput} /></td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td><input type='text' name='pwd' value={pwd} onChange={onInput} /></td>
                </tr>
                <tr>
                    <td colSpan='2' align='center'>
                        <button onClick={onReset}>초기화</button>
                    </td>
                </tr>
            </table>
            <br />
            <h3>
                이름:{name}<br />
                아이디:{id}<br />
                비밀번호:{pwd}
            </h3>
        </div>
    );
};

export default Test06;