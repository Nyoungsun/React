import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({ data }) => {

    const { name } = useParams() //path='/front/:name'의 name을 받는다.

    return (
        <div>
            <h1>Front</h1>
            <h2>{name}</h2>
            <hr />
            {
                data.filter(item => item.title === name)
                    .map((item, index) => <div key={index}>
                        <h2>{item.title} / {item.info}</h2>
                    </div>)
            }
        </div>
    );
};

export default Front;