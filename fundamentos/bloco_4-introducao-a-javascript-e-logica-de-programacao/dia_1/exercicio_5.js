let angulo_1 = 60;
let angulo_2 = 60;
let angulo_3 = 60;

let auxiliar_angulos_validos = (angulo_1 > 0 && angulo_2 > 0 && angulo_3 > 0);

switch (auxiliar_angulos_validos){
  case true:
    if (angulo_1 + angulo_2 + angulo_3 == 180){
      console.log("É um triângulo.")
    } else {
      console.log("Não é um triângulo.");
    }
    break;
  case false:
    console.log("Dados inválidos. Não é um triângulo.");
    break;
}