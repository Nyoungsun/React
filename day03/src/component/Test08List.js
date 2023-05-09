import React from 'react';
import Test08Item from './Test08Item';

const Test08List = ({ data }) => {
    return (
        <ul className='list'>
        {
            data.map(item => <Test08Item item={item}/>)
        }
        </ul>
    );
};

export default Test08List;