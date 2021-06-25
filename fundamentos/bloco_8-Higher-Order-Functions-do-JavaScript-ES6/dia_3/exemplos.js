const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];


// const joinListProducts = (products, prices) => {
//   let listProducts = [];
//   for (let index = 0; index < products.length; index += 1) {
//     listProducts.push({ [products[index]]: prices[index] });
//   }
//   return listProducts;
// };

// console.log(joinListProducts(products, prices));

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
