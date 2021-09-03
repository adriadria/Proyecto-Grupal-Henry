import types from "../constants/types";
import utils from "../utils/index";

const initialState = {
  products: [], // todos los products cargados de getProducts
  categories: [],
  productDetails: [],
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case types.GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };

    case types.GET_PRODUCTS_BY_ID:
      return {
        ...state,
        productDetails: action.payload,
      };

    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case types.ORDER_BY_PRICE:
      return {
        ...state,
        products: utils.orderPrice(state, action.payload),
      };

    default:
      return state;
  }
};

export default rootReducer;
