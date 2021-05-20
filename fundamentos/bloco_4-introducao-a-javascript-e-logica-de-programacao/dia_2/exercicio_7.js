let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumeroNumbers = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumeroNumbers) {
    menorNumeroNumbers = numbers[index];
  }
}

console.log('O menor número contido no Array number é: ' + menorNumeroNumbers);