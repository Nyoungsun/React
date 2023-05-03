import React from 'react';

const Test5Sub = (props) => {
    return (
        <div>
            <h2>신상명세서</h2>
            <ul style={{backgroundColor: props.bgcolor}}>
                <li>이름: {props.name}</li>
                <li>나이: {props.age}</li>
                <li>주소: {props.addr}</li>
                <li>핸드폰: {props.tel}</li>
                <li>동의여부: {props.done ? '동의' : '거부'}</li>
            </ul>
        </div>
    );
};

export default Test5Sub;