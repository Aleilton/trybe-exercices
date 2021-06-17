const frase1 = 'Tryber x aqui!';
const substituta1 =  'Bebeto';

const changeString = (frase, substituta) => frase.replace('x', substituta);

console.log(changeString(frase1, substituta1));

let skills = ['curiosidade', 'persistência', 'intuição', 'dedicação', 'inteligência'];

function funcao2() {
  skills = skills.sort();
  const resFuncao1 = `${ changeString(frase1, 'Aleilton') }`
  let resSkils = 'Minhas cinco principais habilidades são:';
  for(let index = 0; index < skills.length; index += 1) {
    resSkils = `${ resSkils }
    * ${ skills[index] }`
  }
  
  console.log(`${ resFuncao1 } 
  ${ resSkils }`);
};

funcao2();