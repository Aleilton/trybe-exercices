let onde = document.getElementById('elementoOndeVoceEsta');

onde.parentNode.style.backgroundColor = 'red';

let textoPrimeiroFilhoDoFilho = document.createElement('p');
textoPrimeiroFilhoDoFilho.innerHTML = 'Teste';

document.getElementById('primeiroFilhoDoFilho').appendChild(textoPrimeiroFilhoDoFilho);

let primeiroFilho = document.getElementById('pai').firstChild;

console.log(primeiroFilho);