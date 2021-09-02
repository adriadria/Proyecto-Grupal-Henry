import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES', GET_PRODUCTS = 'GET_PRODUCTS';

// http://localhost:3001/categories GET
// http://localhost:3001/products GET

// ------------- //
export const getProducts = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/products`);
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    }
};
export const getCategories = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/categories`);
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    }
};