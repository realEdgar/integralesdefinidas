// Entradas funcion, indice superior, indice inferior
const entradas = document.querySelectorAll('input');

// Salida o resultado de la integral
const salida = document.getElementById('result');

// Boton que ejecuta la solucion a la integral
const accionador = document.getElementById('button');
accionador.addEventListener('click', resolverIntegral);

for(let i = 0; i < entradas.length; i++) {
  entradas[i].addEventListener('change', leerEntradas);
}

// Variables donde se guardaran los valores de los inputs

let funcion;
let indiceInferior;
let indiceSuperior;

// Funcion que lee y guarda los valores de los inputs

function leerEntradas(ev) {
  if(ev.target.id === 'options') {
    funcion = ev.target.value;
  }
  if(ev.target.id === 'indice-inferior') {
    indiceInferior = Number(ev.target.value);
  }
  if(ev.target.id === 'indice-superior') {
    indiceSuperior = Number(ev.target.value);
  }
}

// Funcion que resuelve las integrales

function resolverIntegral() {
  const ancho = 0.0001;
  let area = 0;
  switch(funcion) {
    case 'Sin(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.sin(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'Cos(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.cos(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'Tan(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.tan(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'x':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = i;
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'x^2':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = i**2;
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'x^3':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = i**3;
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'x^4':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = i**4;
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'e^x':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.exp(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'Raiz(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.sqrt(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'RaizCubica(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.cbrt(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'log(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.log(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'log10(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.log10(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'log2(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.log2(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'log(1 + x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = Math.log1p(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'xCos(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = i*Math.cos(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'xSin(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = i*Math.sin(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'x^2Cos(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = (i**2)*Math.cos(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    case 'x^2Sin(x)':
      for(let i = indiceInferior; i <= indiceSuperior; i += ancho) {
        let alto = (i**2)*Math.sin(i);
        area += ancho * alto;
      }
      salida.innerHTML = area.toFixed(4);
    break;
    default:
      alert('Opcion Invalida, preciona OK y elige una de las opciones validas');
    break;
  }
}
