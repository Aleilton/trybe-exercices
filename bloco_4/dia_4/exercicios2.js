let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car2 = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car2) {
  console.log(index, car2[index]);
}


let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

