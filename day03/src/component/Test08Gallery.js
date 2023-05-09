import React, { useState } from 'react';
import Test08View from './Test08View';
import Test08Data from './Test08Data';
import Test08List from './Test08List';
import '../css/Test08.css'

const Test08Gallery = () => {
    const [data, setData] = useState(Test08Data);

    return (
        <div className='wrap'>
            <Test08View />
            <Test08List data={data}/>
        </div>
    );
};

export default Test08Gallery;