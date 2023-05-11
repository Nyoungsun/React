import React, { useState, useRef } from 'react';

const Test10 = () => {
    const seq = useRef(1)

    const nameRef = useRef()

    const [data, setData] = useState([])

    const [form, setForm] = useState({
        name: '',
        age: ''
    })

    const { name, age } = form

    const onInput = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const onAdd = (e) => {
        e.preventDefault(); // 브라우저 고유의 동작을 중단시켜주는 역할을 한다.
        if (!name || !age) return
            setData([
                ...data,
                {
                    seq: seq.current++,
                    name, // name:name → key와 name이 동일하면 하나만 작성해도됨
                    age
                }
            ])

        setForm({
            name: '',
            age: ''
        })

        nameRef.current.focus();
    }

    return (
        <div>
            <form onSubmit={onAdd}>
                이름 : <input type='text' name='name' value={name} onChange={onInput} ref={nameRef} />
                <br />
                나이 : <input type='text' name='age' value={age} onChange={onInput} />
                <br />
                <button type='submit'>추가</button>
            </form>
            <ul>
                {
                    data.map(item=> <li key={item.seq}> {item.seq} / {item.name} : {item.age} </li>)
                }
            </ul>
        </div>
    );
};

export default Test10;