const sum = array => array.reduce((acc, currentValue) => acc + currentValue);

const promise = new Promise((resolve, reject) => {
  let array = [];
  for (let index = 0; index < 10; index += 1) {
    const number = Math.floor(Math.random() * 50);
    array.push(number * number);
  }
  soma = sum(array);
  if (soma > 8000) {
    reject();
  } else {
    resolve();
  }
})
  .then(() => soma)
  .then((result) => {
    const arrayResult = [];
    arrayResult.push(result / 2);
    arrayResult.push(result / 3);
    arrayResult.push(result / 5);
    arrayResult.push(result / 10);
    console.log(arrayResult);
    return arrayResult;
  })
  .then((arrayResult) => console.log(sum(arrayResult)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
