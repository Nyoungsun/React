import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Member from './Member';

const Main = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
    }, [])

    return (
        <div>
            <h1> Main Page / 회원수: {data.length}</h1>
            <ul>
                {
                    // data.map(item =>
                    //     <li key={item.id}>
                    //         <strong>아이디</strong>: {item.id} <br />
                    //         <strong>이름</strong>: {item.name} <br />
                    //         <strong>이메일</strong>: {item.email}
                    //     </li>
                    // )

                    data.map(item => <Member key={item.id} item = {item} />)
                }
            </ul>
        </div>
    );
};

export default Main