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

export default {
  orderPrice,
};
