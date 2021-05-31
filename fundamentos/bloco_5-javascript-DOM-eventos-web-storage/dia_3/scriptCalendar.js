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
// Escreva seu código abaixo.