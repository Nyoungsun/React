import React, { useEffect, useState } from 'react';

const Test02Sub = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMove = (e) => {
        //사용자에게 보여지는 웹페이지 영역을 기준으로 좌표를 표시
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', onMove) //window = 화면객체

        return () => {
            console.log('cleanup')
            window.removeEventListener('mousemove', onMove)
        }
    }, [])

    return (
        <div style={{border: '1px solid black', width: 400, padding: 30, margin: 15}}>
            <h2>마우스 좌표</h2>
            <div>
            <h3>x축: {x} <br/> y축: {y}</h3>
            </div>
        </div>
    );
};

export default Test02Sub;