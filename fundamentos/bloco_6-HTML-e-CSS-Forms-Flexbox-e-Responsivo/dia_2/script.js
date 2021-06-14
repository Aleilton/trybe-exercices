const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
const uf = document.getElementById('uf');
const dataInicio = document.getElementById('dataInicio');
const resultado = document.getElementById('resultado');
const form = document.getElementById('formularioCurriculo');

let inputs = {
  nome: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  uf: '',
  tipo: '',
  resumo: '',
  cargo: '',
  descCargo: '',
  dataInicio: ''
};

function preencheResultado() {
  for (let key in inputs) {
    const elemento = document.createElement('p');
    let valor = inputs[key];
    elemento.innerHTML = '<strong>' + key  + ': ' + '</strong>' + valor;
    resultado.appendChild(elemento);
  }
}

function getEnvio() {
  let query = location.search.slice(1);
  if (query !== '') {
    let valoresEnviados = query.split('&');
    valoresEnviados.forEach(function (valoresEnviados) {
      let chaveValor = valoresEnviados.split('=');
      let chave = chaveValor[0];
      let valor = chaveValor[1];
      inputs[chave] = valor;
  });
  preencheResultado();
  }
}

function criarListaEstados (estados) {
  for (let index = 0; index < estados.length; index += 1) {
    const est = document.createElement('option');
    est.value = estados[index];
    est.innerText = estados[index];
    uf.appendChild(est);
  }
}

criarListaEstados(estados);

getEnvio();

let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  onSelect: function() {
      console.log(this.getMoment().format('DD/MM/YYYY'));
  }
});



new window.JustValidate('.js-form', {
  rules: {
      nome: {
          required: true
      },
      email: {
          required: true,
          email: true,
      },
      cpf: {
        required: true,
      },
      adress: {
        required: true,
      },
      city: {
        required: true,
      },
      uf: {
        required: true,
      },
      tipo: {
        required: true,
      },
      resumo: {
        required: true,
      },
      cargo: {
        required: true,
      },
      descCargo: {
        required: true,
      },
      dataInicio: {
        required: true,
      }
  },


  focusWrongField: true,

  // submitHandler: function (form, values, ajax) {
  //     ajax({
  //         url: '',
  //         method: 'GET',
  //         data: values,
  //         async: true,
  //         callback: function (response) {
  //           form.submit;
  //             // alert('AJAX submit successful! \nResponse from server:' + response)
  //         },
  //         error: function (response) {
  //             // alert('AJAX submit error! \nResponse from server:' + response)
  //         }
  //     });
  // },
  
  invalidFormCallback: function (errors) {
      console.log(errors);
  },
});
