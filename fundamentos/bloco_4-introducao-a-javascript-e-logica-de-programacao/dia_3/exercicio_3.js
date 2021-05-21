// 3- Agora inverta o lado do triângulo. Por exemplo:
// Copiar
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;

for (let index = 1; index <= n; index += 1) {
  let auxiliar = '';
  for (let indexSec = 0; indexSec < n; indexSec += 1) {
    if (indexSec < n - index) {
      auxiliar = auxiliar + ' ';
    } else {
      auxiliar = auxiliar + '*';
    }
    
  }
  console.log(auxiliar);
}