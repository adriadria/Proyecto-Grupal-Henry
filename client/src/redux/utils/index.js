const orderPrice = (arr, option) => {
  switch (option) {
    case "price_asc":
      return arr.sort((a, b) => a.price - b.price);

    case "price_desc":
      return arr.sort((a, b) => b.price - a.price);

    default:
      return arr;
  }
};

const filterByPriceRange = (state, { min, max }) => {
  const allProducts = state.products.all;
  return allProducts.filter(({ price }) => price >= min && price <= max);
};

const filterByCategory = (allProducts, option) => {
  return option === "all_categories"
    ? allProducts
    : allProducts.filter(({ categories }) => categories.includes(option));
};

const filterByCategoryState = (option) => {
  return option === "all_categories" ? "all" : "filter";
};

const addProductToCart = (state, id) => {
  const product = state.products.all.find((elem) => elem._id === id);
  if (product && state.cart.listProducts.includes(product)) {
    return state.cart.listProducts;
  } else {
    product.quantity = 1;
    return [...state.cart.listProducts, product];
  }
};

const utils = {
  orderPrice,
  filterByCategory,
  filterByPriceRange,
  filterByCategoryState,
  addProductToCart,
};

export default utils;
