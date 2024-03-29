function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
// const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidayList = [24, 25, 31];
const fridayList = [4, 11, 18, 25];

function createCalendar(diasDoMes) {
  const daysList = document.querySelector('#days');
  
  for (let index = 0; index < diasDoMes.length; index += 1) {
    const day = diasDoMes[index];
    let tipoDia = 'day ';
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    
    let isFriday = verificaSexta(day);
    
    if (verificaFeriado(day) == true) {
      tipoDia += 'holiday ';
    }
    if (verificaSexta(day) == true) {
      tipoDia += 'friday ';
    }
    dayListItem.className = tipoDia;
    
    daysList.appendChild(dayListItem);
  }
}

function verificaFeriado(dia) {
  let feriado = false;
  for (let index = 0; index < holidayList.length; index += 1) {
    if (dia == holidayList[index]) {
      feriado = true;
      break;
    }
  }
  return feriado;
}

function verificaSexta(dia) {
  let sexta = false;
  for (let index = 0; index < fridayList.length; index += 1) {
    if (dia == fridayList[index]) {
      sexta = true;
      break;
    }
  }
  return sexta;
}

createCalendar(dezDaysList);

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
let buttonsContainer = document.querySelector('.buttons-container');

function createBtnHoliday (nome) {
  let button = document.createElement('button');
  button.innerText = nome;
  button.id = 'btn-holiday';
  buttonsContainer.appendChild(button);
}

createBtnHoliday('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

let divsHoliday = document.querySelectorAll('.holiday');

function destacarFeriados() {
  if (divsHoliday[0].style.backgroundColor != 'red') {
    for (let index = 0; index < divsHoliday.length; index += 1){
      divsHoliday[index].style.backgroundColor = 'red';
    }
  } else {
    for (let index = 0; index < divsHoliday.length; index += 1){
      divsHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

let buttonHoliday = document.querySelector('#btn-holiday');
buttonHoliday.addEventListener('click', destacarFeriados);

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createBtnFriday (nome) {
  let button = document.createElement('button');
  button.innerText = nome;
  button.id = 'btn-friday';
  buttonsContainer.appendChild(button);
}

createBtnFriday('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

let divsFriday = document.querySelectorAll('.friday');

function destacarFriday() {
  if (divsFriday[0].innerText != 'Sexta-feira') {
    for (let index = 0; index < divsFriday.length; index += 1){
      divsFriday[index].value = divsFriday[index].innerText;
      divsFriday[index].innerText = 'Sexta-feira';
    }
  } else {
    for (let index = 0; index < divsFriday.length; index += 1){
      divsFriday[index].innerText = divsFriday[index].value;
    }
  }
}

let buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', destacarFriday);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

let allDays = document.querySelectorAll('.day');

function zoomDayIn(event) {
  event.target.style.fontSize = '25px';
}

function zoomDayOut(event) {
  event.target.style.fontSize = '22px';
}

for (let index = 0; index < allDays.length; index += 1) {
  allDays[index].addEventListener('mouseover', zoomDayIn);
  allDays[index].addEventListener('mouseout', zoomDayOut);
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

let myTasks = document.querySelector('.my-tasks');

function addTask(taskName) {
  let tarefa = document.createElement('span');
  tarefa.innerHTML = taskName;
  tarefa.className = 'my-tasks';
  myTasks.appendChild(tarefa);
}

addTask('Cozinhar');

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function criaCor(cor) {
  let divCor = document.createElement('div');
  divCor.className = 'task';
  divCor.style.background = cor;
  myTasks.appendChild(divCor);
}

criaCor('red');

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

let corTask = document.querySelector('.task');

function atribuirTaskSelected() {
  if (corTask.className == 'task') {
    corTask.className = 'task selected';
  } else {
    corTask.className = 'task';
  }
}

corTask.addEventListener('click', atribuirTaskSelected);

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

// let allDays = document.querySelectorAll('.day');

let divCorSelected = document.querySelector('.task');

function destacarDia(event) {
  let corAtual = event.target.style.color;
  let corObjetoOrigem = divCorSelected.style.backgroundColor;
  if (corAtual == corObjetoOrigem) {
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = divCorSelected.style.backgroundColor;
  }
}

for (let index = 0; index < allDays.length; index += 1) {
  allDays[index].addEventListener('click', destacarDia);
}