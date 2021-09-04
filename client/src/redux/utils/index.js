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
  return option === "all_categories"
    ? "all"
    : "filter";
};

export default {
  orderPrice,
  filterByCategory,
  filterByPriceRange,
  filterByCategoryState,
};
