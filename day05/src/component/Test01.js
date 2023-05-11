import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test01 = () => {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json()) //res: 응답객체
    //         .then(res => setData(res))
    // }, [])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => setData(res.data))
    // }, [])

    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const data = await res.json()
    //         setData(data)
    //     }

    //     getData()
    // }, [])

    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         setData(res.data)
    //     }

    //     getData()
    // }, [])

    return (
        <ul>
            {
                data.map((item) => <li key={item.id}>{item.title}</li>)
            }
        </ul>
    );
};

export default Test01;