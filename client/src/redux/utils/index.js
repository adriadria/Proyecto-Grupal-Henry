export const orderByParam = (order, array) => {
  const products = [...array];
  switch (order) {
    case 'price_asc':
      return recipes.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else {
          return -1;
        }
      });
    case 'price_desc':
      return products.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        } else {
          return -1;
        }
      });
    default:
      return recipes;
  };
};