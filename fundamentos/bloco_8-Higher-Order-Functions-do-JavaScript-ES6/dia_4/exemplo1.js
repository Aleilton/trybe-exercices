// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getSum = (result, number) => {
//   if (number % 2 === 0) {
//     result += number;
//   }
//   return result;
// };

// Reduzindo

const getSum = (result, number) => ((number % 2 === 0) ? result += number : result);

const sumNumbers = numbers.reduce(getSum);

console.log(sumNumbers);
