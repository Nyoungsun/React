import React from 'react';
import img from '../image/image01.jpg';

const Test09 = () => {
    return (
        <div>
            <img src={img} style={{width: '40%'}} alt='강아지1'/>
            <img src={img} style={{width: '40%'}} alt='강아지1'/>
            <img src={img} style={{width: '40%'}} alt='강아지1'/>
            <img src={img} style={{width: '40%'}} alt='강아지1'/>
        </div>
    );
};

export default Test09;


/*
src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
  import 참조변수 from '이미지경로';
*/