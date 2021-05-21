// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****

let n = 5;

for (let index = 0; index < n; index += 1) {
  let auxiliar = '';
  for (let indexSec = 0; indexSec <= index; indexSec += 1) {
    auxiliar = auxiliar + '*';
  }
  console.log(auxiliar);
}
