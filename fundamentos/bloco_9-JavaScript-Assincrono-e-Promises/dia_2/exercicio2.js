const sum = array => array.reduce((acc, currentValue) => acc + currentValue);

const promise = new Promise((resolve, reject) => {
  let array = [];
  for (let index = 0; index < 10; index += 1) {
    const number = Math.floor(Math.random() * 50);
    array.push(number * number);
  }
  if (sum(array) > 8000) {
    reject();
  } else {
    resolve();
  }
})
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'));
