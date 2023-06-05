import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { red, green, blue, tomato } from '../../store/modules/color';


const Color = () => {
    const color = useSelector(state => state.color.color);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 style={{ color: color }}>컬러: {color}</h1>
            <p>
                <button onClick={() => dispatch(red())}>레드</button>
                <button onClick={() => dispatch(green())}>그린</button>
                <button onClick={() => dispatch(blue())}>블루</button>
                <button onClick={() => dispatch(tomato())}>토마토</button>
            </p>
        </div >
    );
};

export default Color;