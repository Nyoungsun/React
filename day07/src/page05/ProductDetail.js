import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './Data';

const ProductDetail = () => {
    const {productId} = useParams()

    const item = data.find(item => item.id === productId)

    const navigate = useNavigate()

    const onHome = () => {
        navigate('/')
    }
    
    const onList = () => {
        navigate(-1)
    }

    return (
        <div className='item'>
            <h2>상세페이지</h2>
            <h3>이름: {item.name} / 가격: {item.price}</h3>
            <p><img src={item.photo} alt={item.name}></img></p>
            <p>설명: {item.description}</p>

            <button onClick={onHome}>Home</button>
            <button onClick={onList}>List</button>
        </div>
    );
};

export default ProductDetail;