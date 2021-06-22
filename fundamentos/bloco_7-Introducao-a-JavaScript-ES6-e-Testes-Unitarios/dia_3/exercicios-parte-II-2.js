// 2. Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(palavras) {
  let saida = [];
  for (const word of palavras) {
    saida.push(word.length);
  }
  return saida
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
