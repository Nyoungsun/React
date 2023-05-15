import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

const initialState = {
    data: {},
    error: null,
    loading: true
}

// state, action을 받아서 새로운 state를 반환하는 함수이다.
const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                data: action.payload,
                error: null,
                loading: false
            }
        case 'ERROR':
            return {
                data: {},
                error: 'ERROR',
                loading: true
            }
        default:
            return initialState
    }
}

const Test05 = () => {
    // state -> state
    // dispatch -> action
    const [state, dispatch] = useReducer(reducer, initialState)
    const [id, setId] = useState(1)
    const [search, setSearch] = useState('')

    const onSearch = (id) => {
        setSearch(id)
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        axios.get(url)
            .then(res => {
                dispatch({ type: 'SUCCESS', payload: res.data }) 
            }) //제대로 가져왔을 때
            .catch(error => { 
                dispatch({ type: 'ERROR' }) 
            }) //제대로 가져오지 않았을 때
    }, [search])

    return (
        <div>
            ID 입력 (1~5000) : <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button onClick={() => onSearch(id)}>검색</button>
            <br />
            {
                state.loading || <p>{state.data.title}</p>
            }
            {
                state.data && state.loading ? '로딩 중' : <img style={{ margin: 20 }} src={state.data.thumbnailUrl} alt='img' />
            }
            <br />
            {
                state.error ? state.error : null
            }
        </div>
    );
};

export default Test05;