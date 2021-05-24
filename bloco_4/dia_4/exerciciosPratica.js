//Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
console.log('Exemplo 1');
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let index in names) {
  console.log('Olá ' + names[index]);
}


//Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
console.log('Exemplo 2');
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const index in car) {
  console.log(index, car[index]);
}