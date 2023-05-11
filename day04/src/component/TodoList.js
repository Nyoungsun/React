import React from 'react';
import TodoListCSS from '../css/TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = ({ data, onDel }) => {
    return (
        <ul className={TodoListCSS.TodoList}>
            {
                data.map(item => <TodoItem key={item.seq} item={item} onDel={onDel} />)
            }
        </ul>
    );
};

export default TodoList;