import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test02 = () => {

    const [id, setId] = useState('')
    const [dto, setDto] = useState({})
    const [search, setSearch] = useState('')

    const onSearch = (id) => {
        setSearch(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setDto(res.data)) //res: 응답객체
    }, [search]) // [id]로 지정하면 id의 값이 바뀔 때 마다 수행됨



    return (
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => onSearch(id)}>검색</button>
            <p> { dto.title } </p>
        </div>
    );
};

export default Test02;