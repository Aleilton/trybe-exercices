const fatorial = number => {
  let result = 1;
  for (let index = number; index > 0; index -= 1) {
    result *= index;
  }
  return result;
};

console.log(fatorial(4));

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1
console.log(factorial2(5))


const longestWord = frase => {
  let words = frase.split(' ');
  let biggerWord = words[0];
  for (let index = 0; index < words.length; index += 1){
    biggerWord = biggerWord.length < words[index].length ? words[index] : biggerWord;
  }
  console.log(biggerWord);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu agora") // retorna 'aconteceu'
