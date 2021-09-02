import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions';
import Product from '../Product/Product';
import prodsStyle from './Products.module.css';



const Products = () => {
    var productsArr = useSelector(state => state.products);
    const dispatch = useDispatch();
    console.log(productsArr);

    useEffect(() => {
		dispatch(getProducts()); 
	}, [dispatch]);


	return (
		<>
            <div className={prodsStyle.title1}>
                Produts List Catalog
            </div>
			<div className={prodsStyle.contenedor}>
                {
                    productsArr.map(e => (
                        <Product 
                            key={e._id}
                            id={e._id}
                            image={e.image_url}
                            name={e.name}R
                        />
                    ))
                }

                <Product 
                    id={1} 
                    image={'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/escritorio-de-metal-blanco-y-abeto-con-1-cajon-y-1-puerta-1000-4-2-192784_1.jpg'}
                    name={'SUNSET'}
                    />
                <Product 
                    id={2} 
                    image={'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_1000/img/escritorio-blanco-con-4-cajones-1000-16-7-170526_1.jpg'}
                    name={'JOY'}
                    />
                <Product 
                    id={3} 
                    image={'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_1000/img/escritorio-vintage-gris-antracita-con-2-cajones-1000-3-11-180985_1.jpg'}
                    name={'ZEN MARKET'}
                    />
                <Product 
                    id={4} 
                    image={'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_1000/img/escritorio-de-3-cajones-color-blanco-1000-4-7-209189_1.jpg'}
                    name={'SPRING'}
                    />
                <Product 
                    id={5} 
                    image={'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/escritorio-vintage-2-cajones-1000-2-15-138841_1.jpg'}
                    name={'FJORD'}
                    />
            </div>
		</>
	);
};

export default Products;
