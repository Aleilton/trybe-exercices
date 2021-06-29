// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'banana', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['iogurte', 'açúcar', 'groselha'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
