const botao = document.getElementById('botao');
const contador = document.getElementById('contador');
let clickCount = 0;

const contagem = () => {
  clickCount += 1;
  contador.innerHTML = clickCount;
}

window.onload = function () {
  botao.addEventListener('click', contagem);
}