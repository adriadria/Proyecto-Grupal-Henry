import axios from "axios";
import types from "../constants/types";
const BASE_URL = "http://localhost:3001";

// http://localhost:3001/categories GET
// http://localhost:3001/categories?name=... GET
// http://localhost:3001/products GET

// Products
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`);
      return dispatch({
        type: types.GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductsByName = (name) => {
  // buscador --> desk? escritorio?
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/categories?name=${name}`);
      return dispatch({
        type: types.GET_PRODUCTS_BY_NAME,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Categories
export const getCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/categories`);
      return dispatch({
        type: types.GET_CATEGORIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
