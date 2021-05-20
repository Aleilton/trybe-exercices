let salarioBruto = 3000;
let salarioMenosINSS;
let descontoINSS;
let descontoIR;
let salarioLiquido;

if (salarioBruto > 0) {
  // Cálculo do valor do INSS
  if (salarioBruto <= 1554.94) {
    salarioMenosINSS = salarioBruto - (salarioBruto * 0.08); //alíquota de 8%
  } else if (salarioBruto <= 2594.92) {
    salarioMenosINSS = salarioBruto - (salarioBruto * 0.09); //alíquota de 9%
  } else if (salarioBruto <= 5189.82) {
    salarioMenosINSS = salarioBruto - (salarioBruto * 0.11); //alíquota de 11%
  } else {
    salarioMenosINSS = salarioBruto - 570.88 //alíquota máxima
  }

  // Cálculo do IR
  if (salarioMenosINSS < 1903.98) {
    salarioLiquido = salarioMenosINSS; // Até R$ 1.903,98: isento de imposto de renda
  } else {
    if (salarioMenosINSS < 2826.65) {
      descontoIR = salarioMenosINSS * 0.075 - 142.80;
      salarioLiquido = salarioMenosINSS - descontoIR; //De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    } else if (salarioMenosINSS < 3751.05) {
      descontoIR = salarioMenosINSS * 0.15 - 354.80;
      salarioLiquido = salarioMenosINSS - descontoIR; //De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    } else if (salarioMenosINSS < 4664.68) {
      descontoIR = salarioMenosINSS * 0.225 - 636.13; //De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
      salarioLiquido = salarioMenosINSS - descontoIR;
    } else {
      descontoIR = salarioMenosINSS * 0.275 - 869.36; //Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
      salarioLiquido = salarioMenosINSS - descontoIR;
    }
  }

  console.log('Salário líquido: R$ ' + salarioLiquido);
} else {
  console.log('ERRO: Salário inválido');
}
