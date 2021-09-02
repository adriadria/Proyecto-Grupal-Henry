import React from 'react';
import { Link } from 'react-router-dom';
import prodStyle from './Product.module.css';

const Product = ({ id, image, name, price }) => {
	return (
		<Link to={`/detail/${id}`}>
			<div className={prodStyle.card}>
				<img src={image} alt="imagen" />
				<div className={prodStyle.cardData1}>
					<span className={prodStyle.cardText}>{name}</span>
					<span>💎💎</span>
				</div>
				<div className={prodStyle.cardData2}>
					<div className={prodStyle.cardPrice}>Price: {price}</div>
				</div>
			</div>
		</Link>
	);
};

export default Product;
