import React, { useState } from 'react';
import CatData from './CatData';
import CatList from './CatList';
import '../css/reset.css'
import '../css/style.css'


const Cat = () => {
    const [data] = useState(CatData);

    return (
        <section className='business'>
            <div className='inner'>
                <h2>고양이</h2>
                <p>고양이들</p>
                <CatList data={data} />
            </div>
        </section>
    );
};

export default Cat;