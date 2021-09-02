import React from 'react'
import NavBar from '../NavBar/NavBar'
import Product from '../Product/Product'

export default function Detail() {
    return (
        <div>
            <NavBar />
            <Product 
                    id={1} 
                    image={'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/escritorio-de-metal-blanco-y-abeto-con-1-cajon-y-1-puerta-1000-4-2-192784_1.jpg'}
                    name={'SUNSET'}
                    />
        </div>
    )
}
