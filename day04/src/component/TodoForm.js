import React, { useRef, useState } from 'react';
import TodoFormCSS from '../css/TodoForm.module.css';

const TodoForm = ({ onAdd }) => {

    const textRef = useRef()
    const [text, setText] = useState('')

    const onInput = (e) => { //value={text}의 text의 useState가 ''이므로 글을 입력하려면 onChange 함수 필요
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            return;
        }

        onAdd(text);
        setText('');

        textRef.current.focus()
    }

    return (
        <div>
            <form className={TodoFormCSS.TodoForm} onSubmit={onSubmit}>
                <input type='text' value={text} onChange={onInput} placeholder='오늘의 할 일을 작성해보세요' ref={textRef}></input>
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default TodoForm;