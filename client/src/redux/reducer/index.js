import types from "../constants/types";
import utils from "../utils/index";

const initialState = {
  products: {
    all: [], // todos los products cargados de getProducts
    filtered: [],
    searchResults: [],
  },
  createdProduct: [],
  productDetails: [],
  categories: [],
  loading: false,
  dataState: 'all',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        dataState: 'all',
        products: {
          ...state.products,
          all: action.payload,
        },
      };

    case types.GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        dataState: 'search',
        products: {
          ...state.products,
          searchResults: action.payload,
        },
      };

    case types.GET_PRODUCTS_BY_ID:
      return {
        ...state,
        productDetails: action.payload,
      };

    case types.POST_PRODUCT:
      return {
        ...state,
        createdProduct: action.payload,
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

    case types.FILTER_BY_CATEGORY:
      const allProducts = state.products.all;
      return {
        ...state,
        dataState: utils.filterByCategoryState(action.payload),
        products: {
          ...state.products,
          filtered: utils.filterByCategory(allProducts, action.payload),
        },
      };

    case types.FILTER_BY_PRICE_RANGE:
      return {
        ...state,
        products: {
          ...state.products,
          filtered: utils.filterByPriceRange(state, action.payload),
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
