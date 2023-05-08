import React, { useState } from 'react';
import '../css/Test06.css';

const Test06 = () => {

    const [data] = useState([
        { seq: 1, name: '호길동', age: 20, addr: '서울', done: true },
        { seq: 2, name: '가나나', age: 23, addr: '경기', done: true },
        { seq: 3, name: '캐캐캐', age: 43, addr: '인선', done: false },
        { seq: 4, name: '주주두', age: 22, addr: '강원', done: true },
        { seq: 5, name: '도도도', age: 55, addr: '부산', done: false }
    ]);

    return (
        <div>
            <table className='list'>
                <caption>신상명세서</caption>
                <colgroup>
                    <col className='seq'></col>
                    <col className='name'></col>
                    <col className='age'></col>
                    <col className='addr'></col>
                    <col className='done'></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((item) => {
                            return (<tr key={data.seq}>
                                <td>{item.seq}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.addr}</td>
                                <td>{item.done ? '동의' : '거부'}</td>
                            </tr>)
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Test06;