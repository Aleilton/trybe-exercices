// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
console.log('\nExercício 1:');

function verificaPalindrome(palavra) {
  let palavraInvertida = palavra.split('').reverse().join('');
  if (palavra === palavraInvertida) {
    return true;
  } else {
    return false;
  }
}
console.log('Palavra arara é palindrome? \n R.: ' + verificaPalindrome('arara'));

// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

console.log('Palavra desenvolvimento é palindrome? \n R.: ' + verificaPalindrome('desenvolvimento'));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
console.log('\nExercício 2:');
teste = [2, 3, 6, 7, 10, 1];

function verificaMaiorValor(valores) {
  let indiceMaiorNumero = 0;
  for (let index = 0; index < valores.length; index += 1) {
    if (valores[index] > valores[indiceMaiorNumero]) {
      indiceMaiorNumero = index;
    }    
  }
  return indiceMaiorNumero;
}

console.log(verificaMaiorValor(teste));

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
console.log('\nExercício 3:');
teste = [2, 4, 6, 7, 10, 0, -3];

function verificaMenorValor(valores) {
  let indiceMenorNumero = 0;
  for (let index = 0; index < valores.length; index += 1) {
    if (valores[index] < valores[indiceMenorNumero]) {
      indiceMenorNumero = index;
    }    
  }
  return indiceMenorNumero;
}

console.log(verificaMenorValor(teste));

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
console.log('\nExercício 4:');
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function verificaMaiorNome (nomesParaComparar) {
  let indiceMaiorNome = 0;
  for (let index = 0; index < nomesParaComparar.length; index += 1) {
    if (nomesParaComparar[index].length > nomesParaComparar[indiceMaiorNome].length) {
      indiceMaiorNome = index;
    }
  }
  return indiceMaiorNome;
}

console.log('Maior nome do Array é: ' + nomes[verificaMaiorNome(nomes)]);


// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
console.log('\nExercício 5:');
let numerosExercicio5 = [2, 3, 2, 5, 5, 5, 5, 8, 2, 3];

function verificaNumeroQueMaisSeRepete (arrayNumeros) {
  let objetoNumeros = {};
  for (let key in arrayNumeros) {
    let valorArrayNumero = arrayNumeros[key];
    if (objetoNumeros[valorArrayNumero] !== undefined) {
      objetoNumeros[valorArrayNumero] += 1;
    } else {
      objetoNumeros[valorArrayNumero] = 1;
    }
  }

  let numeroRepete;
  let qtdRepeticoes = 0;
  for (let valor in objetoNumeros) {
    if (qtdRepeticoes < objetoNumeros[valor]) {
      numeroRepete = valor;
      qtdRepeticoes = objetoNumeros[valor];
    }
  }

  console.log(numeroRepete);
}

verificaNumeroQueMaisSeRepete(numerosExercicio5);

// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
console.log('\nExercício 6:');

function somaNúmeros(n) {
  let soma = 0;
  for (let index = 0; index <= n; index += 1){
    soma = soma + index;
  }
  return soma;
}

console.log(somaNúmeros(5));

// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
console.log('\nExercício 7:');

function verificaFimPalavra(word, ending) {
  if (word.length >= ending.length){
    if (word.substring(word.length - ending.length, word.length) === ending){
      return true;
    } else
    return false;

  } else {
    return false;
  }
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));

