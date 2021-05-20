let valorCustoProduto = 200;
let valorVenda = 400;

if (valorCustoProduto > 0 && valorVenda > 0) {
  let impostoSobreProduto = valorCustoProduto * 0.2;
  let valorCustoTotal = valorCustoProduto + impostoSobreProduto;
  let lucro = valorVenda - valorCustoTotal;
  console.log('Seu lucro para 1000 vendas é de: R$ ' + (1000 * lucro));
} else {
  console.log('ERRO: Valores inválidos');
}

