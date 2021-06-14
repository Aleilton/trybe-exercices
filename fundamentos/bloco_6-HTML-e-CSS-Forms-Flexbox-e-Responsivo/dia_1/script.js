const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
const uf = document.getElementById('uf');
const dataInicio = document.getElementById('dataInicio');

function criarListaEstados (estados) {
  for (let index = 0; index < estados.length; index += 1) {
    const est = document.createElement('option');
    est.value = estados[index];
    est.innerText = estados[index];
    uf.appendChild(est);
  }
}

criarListaEstados(estados);

function verificaDia(dia) {
   return (dia > 0 && dia < 31)
}

function verificaMes(mes) {
  return (mes > 0 && mes < 12)
}

function verificaData () {
  const data = dataInicio.value;
  const dia = data.substring(0, 2);
  const mes = data.substring(3, 5);
  const ano = data.substring(6, 10);
  if (data.length != 10 || verificaDia(dia) != true || verificaMes(mes) != true) {
    alert('Data inválida. Preencha novamente a data!');
  }
}

function preencherData() {
  const data = dataInicio.value;
  if (data.length == 2 || data.length == 5) {
    dataInicio.value = data + '/';
  }
}

dataInicio.addEventListener('keyup', preencherData);
