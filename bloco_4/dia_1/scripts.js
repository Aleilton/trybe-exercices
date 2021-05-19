// EXEMPLO 1
// const name = "Aleilton";
// const birthCity = "Maringá";
// let birthYear = 1981;

// birthYear = 2030;
// birthCity = "São Paulo";

// console.log(name);
// console.log(birthCity);
// console.log(birthYear);


//EXEMPLO 2
// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log("patientId = " + typeof patientId);
// console.log("isEnrolled = " + typeof isEnrolled);
// console.log("patientInfo = " + typeof patientInfo);
// console.log("patientEmail = " + patientEmail);
// console.log(patientInfo);
// console.log(typeof patientAge);

// //EXEMPLO 3
// let base = 5;
// let altura = 8;
// let area = base * altura;
// let perimetro = (base * 2) + (altura * 2);

// console.log('Área = ' + area);
// console.log('Perímetro = ' + perimetro);

// //EXEMPLO 4
// let notaCandidato = 60;
// if (notaCandidato < 60) {
//   console.log('Você foi reprovado(a)!');
// } else if (notaCandidato < 80) {
//   console.log('Você está na nossa lista de espera');
// } else {
//   console.log('Parabéns, você foi aprovado(a)!');
// }

//EXEMPLO 5
let estado = 'indeciso';

switch (estado) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovado(a)!');
    break;

  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;
  case 'reprovada':
    console.log('Você foi reprovado(a)!');
    break;
  
  default:
    console.log('Não se aplica');

}
