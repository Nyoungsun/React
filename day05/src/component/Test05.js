import React, { useEffect, useMemo, useState } from 'react';

const user = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '마동석' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'naver' },
    { id: 5, name: '김수혁' },
    { id: 6, name: 'NAVER' },
    { id: 7, name: '김수혁' },
    { id: 8, name: 'daum' },
    { id: 9, name: 'Daum' },
    { id: 10, name: '김희선' }
]

const Test05 = () => {
    let [data, setData] = useState(user)
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')

    //글자가 입력될 때 마다 변경
    // useEffect(() => {
    //     setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1))
    //     setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    // })

    //검색 버튼
    data = useMemo(() => {
        return user.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    }, [search])

    const onSearch = () => {
        setSearch(text)
    }

    //검색 버튼
    // const onSearch = () => {
    //     setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    // }

    return (
        <div>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={onSearch}>검색</button>
            <ul>
                {
                    data.map(item => <li key={user.id}>{item.id} : {item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test05;