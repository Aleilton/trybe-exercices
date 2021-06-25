const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((item) => item === name);
}

console.log(hasName(names, 'Ana'))


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every(({age}) => age >= minimumAge);
}

console.log(verifyAges(people, 18));

// sort
// Adicione se código aqui
people.sort((people1, people2) => people1.age - people2.age);
console.log('Ordem Crescente: ');
console.table(people);

people.sort((people1, people2) => people2.age - people1.age);
console.log('Ordem Decrescente: ');
console.table(people);
