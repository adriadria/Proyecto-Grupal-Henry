import React from 'react'
import prodStyle from './Product.module.css';

const Product = ({id, image, name}) => {
    return (
        <div className={prodStyle.card}>
            <img src={image} alt='imagen' />
            <div>{name}</div>
        </div>
    )
}

export default Product
