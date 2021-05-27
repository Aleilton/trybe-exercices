document.getElementById('header-container').style.backgroundColor = 'green';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'SandyBrown';

let titleImportante = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < titleImportante.length; index += 1) {
  titleImportante[index].style.backgroundColor = 'purple';
}

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

let titleNaoImportante = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < titleNaoImportante.length; index += 1) {
  titleNaoImportante[index].style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = 'DarkGreen';