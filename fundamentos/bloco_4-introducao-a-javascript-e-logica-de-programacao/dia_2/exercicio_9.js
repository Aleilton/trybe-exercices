let numbers = [];

for (let index = 0; index < 25; index += 1) {
  numbers.push(Math.round(Math.random() * 100));
}

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
}
