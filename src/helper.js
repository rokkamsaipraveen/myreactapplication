export const findSum = (array) => {
  const totalsum = array.reduce((acc, item) => {
    return acc + item.discountedPrice;
  }, 0);
  return totalsum;
};
