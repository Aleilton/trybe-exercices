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

createBtnHoliday('Sexta-feira');

