import React, { useMemo, useState } from 'react';

const Test04Sub = ({ color, food }) => {

    const getColor = (color) => {
        console.log('getColor')

        switch (color) {
            case 'hotpink':
                return '진분홍'
            case 'magenta':
                return '보라색'
            case 'skyblue':
                return '하늘색'
            case 'tomato':
                return '토마토'
            default:
                return '';
        }
    }

    const getFood = (food) => {
        console.log('getFood')

        switch (food) {
            case '햄버거':
                return '인스턴트'
            case '삼겹살':
                return '고기'
            case '치킨':
                return '닭고기'
            case '짜장면':
                return '면요리'
            default:
                return '';
        }
    }
    // 컬러가 바뀌든 음식이 바뀌든 console에 둘 다 출력된다.
    // const colorInfo = getColor(color)
    // const foodInfo = getFood(food)

    // useMemo를 사용하여 해결
    const colorInfo = useMemo(() => {
        getColor(color)
    },[color])

    const foodInfo = useMemo(() => {
        getFood(food)
    },[food])

    return (
        <div>
            <h3>선택한 색: {color}</h3>
            <h3>{colorInfo}을(를) 좋아하시는군요</h3>
            <h3>선택한 음식: {food}</h3>
            <h3>{foodInfo}을(를) 좋아하시는군요</h3>
        </div>
    );
};

export default Test04Sub;