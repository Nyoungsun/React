import React, { useState } from 'react';
import Test08View from './Test08View';
import Test08Data from './Test08Data';
import '../css/Test08.css'

const Test08Gallery = () => {
    const [data, setData] = useState(Test08Data)
    const [one, setOne] = useState(data[0])

    const onView = (id) => {
        setOne(data[id - 1])
    }

    return (
        <div className='wrap2'>
            <Test08View one={one} data={data} onView={onView} />
        </div>
    );
};

export default Test08Gallery;