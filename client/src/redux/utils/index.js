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
  const copyState = state.products.all;
  return copyState.filter(({ price }) => price >= min && price <= max);
};

const filterByCategory = (state, option) => {
  const copyState = state.products.all;
  return copyState.filter(({ categories }) => categories.includes(option));
};

export default {
  orderPrice,
  filterByCategory,
  filterByPriceRange,
};
