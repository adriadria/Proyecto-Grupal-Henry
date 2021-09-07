import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import prodStyle from './Product.module.css';

const Product = ({ id, image, name, price, catArr }) => {
	var categories = useSelector((state) => state.categories);

	function DisplayNameCategory(e) {
		let found = categories.find((c) => {
			return c._id === e;
		});
		return found?.name;
	}

	return (
		<Link to={`/detail/${id}`}>
			<div className={prodStyle.card1}>
				<div className={prodStyle.cardheader}>
					<img src={image} alt={name} />
				</div>
				<div className={prodStyle.cardbody}>
					<div className={prodStyle.cardCagegories}>
						{catArr.map((e) => (
							<span className={prodStyle.tag} key={e}>
								{DisplayNameCategory(e)}
							</span>
						))}
					</div>

					{/* <div className={prodStyle.tag}>General</div> */}
					<div className={prodStyle.cardData1}>
						<span className={prodStyle.cardPrice}>
							<b>Price:</b> ${price}
						</span>
						<span>💎💎</span>
					</div>
					<div className={prodStyle.cardText}>{name}</div>
				</div>
			</div>
		</Link>
	);
};

export default Product;
