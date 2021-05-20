let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumeroNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumeroNumbers) {
    maiorNumeroNumbers = numbers[index];
  }
}

console.log('O maior número contido no Array number é: ' + maiorNumeroNumbers);