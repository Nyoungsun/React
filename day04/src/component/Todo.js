import React, { useEffect, useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoCSS from '../css/Todo.module.css';

const Todo = () => {
    //local storage 읽어오기
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [])
    //local storage에 저장하기
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    const seq = useRef(data.length + 1)

    const onAdd = (text) => {
        setData([...data,
        {
            seq: seq.current++,
            text
        }
    ])
    }

    const onDel = (seq) => {
        setData(data.filter((item) => item.seq !== seq))
    }

    return (
        <div className={TodoCSS.Todo}>
            <h1>일정관리</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} />
        </div>
    );
};

export default Todo;