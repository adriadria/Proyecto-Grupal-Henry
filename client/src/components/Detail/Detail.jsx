import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getProductsById } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import detStyle from './Detail.module.css';


export default function Detail() {
    const dispatch = useDispatch();
    const location = useLocation();
    var productDetail = useSelector((state) => state.productDetails);
    var productId = location.pathname.split('/').pop();

    useEffect(() => {
		dispatch(getProductsById(productId));
	}, [dispatch]);

	return (
		<div>
			<NavBar />
			<div className={detStyle.content}>
				<div className={detStyle.info1}>
                    <img src="https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/escritorio-de-metal-blanco-y-abeto-con-1-cajon-y-1-puerta-1000-4-2-192784_1.jpg" 
                    alt="product"/>
                </div>
                <div className={detStyle.info2}>
                    Detalles
                </div>
			</div>

			{/* <Product 
                    id={1} 
                    image={'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/escritorio-de-metal-blanco-y-abeto-con-1-cajon-y-1-puerta-1000-4-2-192784_1.jpg'}
                    name={'SUNSET'}
                    /> */}
		</div>
	);
}
