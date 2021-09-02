import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES', GET_PRODUCTS = 'GET_PRODUCTS', GET_PRODUCTS_BY_NAME = 'GET_PRODUCTS_BY_NAME';

// http://localhost:3001/categories GET
// http://localhost:3001/categories?name=... GET
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
export const getProductsByName = (name) => { // buscador --> desk? escritorio?
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/categories?name=${name}`);
            dispatch({
                type: GET_PRODUCTS_BY_NAME,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
            return dispatch({type: GET_PRODUCTS_BY_NAME, payload: []});
        }
    }
};
// ------------- //
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
