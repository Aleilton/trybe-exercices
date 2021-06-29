// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const numberAString = string => string.split('').filter((letter) => letter === 'A' || letter === 'a').length;
  return names.reduce((accumulator, currentValue) => accumulator + numberAString(currentValue), 0);
}

assert.deepStrictEqual(containsA(), 20);
