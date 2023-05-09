import React, { useState } from 'react';
import Test07Input from './Test07Input';
import Test07Output from './Test07Output';
import Test07Print from './Test07Print';
import '../css/Test07.css'

const Test07Main = () => {

    const [count, setCount] = useState(1)

    const [data, setData] = useState({
        name: '',
        age: '',
        addr: '',
        tel: ''
    })

    const onInput = (e) => {
        const { name, value } = e.target

        setData({
            ...data,
            [name]: value
        })
    }

    const onNext = () => {
        setCount(count + 1)
    }

    const onPrev = () => {
        setCount(count - 1)
    }

    const onFirst = () => {
        setCount(1)
    }

    return (
        <div className='wrap'>
            {
                count === 1 && <Test07Input data={data} onInput={onInput} onNext={onNext} />
            }
            {
                count === 2 && <Test07Print {...data} onNext={onNext} onPrev={onPrev}/>
            }
            {
                count === 3 && <Test07Output name={data.name} onFirst={onFirst} />
            }
        </div>
    );
};

export default Test07Main;