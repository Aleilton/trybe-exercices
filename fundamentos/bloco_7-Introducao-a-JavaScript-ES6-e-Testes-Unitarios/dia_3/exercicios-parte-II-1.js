// 1. Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

function addOne(array) {
  let auxiliar = [];
  for (let numero of array) {
    auxiliar.push(numero+1);
  }
  return auxiliar
}
