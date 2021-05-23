const entradas = document.querySelectorAll('input');
const salida = document.getElementById('result');

const accionador = document.getElementById('button');
accionador.addEventListener('click', resolverIntegral);

for(let i = 0; i < entradas.length; i++) {
    entradas[i].addEventListener('change', leerEntradas);
}
// Variables donde se guardaran los valores de los inputs
let funcion;
let indiceInferior;
let indiceSuperior;

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

function resolverIntegral(ev) {
    const width = 0.0001;
    let area = 0;
    switch(funcion) {
        case 'Sin(x)':
            for(let i = indiceInferior; i <= indiceSuperior; i += width) {
                let height = Math.sin(i);
                area += width * height;
            }
            salida.innerHTML = area.toFixed(4);
        break;
        case 'Cos(x)':
            for(let i = indiceInferior; i <= indiceSuperior; i += width) {
                let height = Math.cos(i);
                area += width * height;
            }
            salida.innerHTML = area.toFixed(4);
        break;
        case 'Tan(x)':
            for(let i = indiceInferior; i <= indiceSuperior; i += width) {
                let height = Math.tan(i);
                area += width * height;
            }
            salida.innerHTML = area.toFixed(4);
        break;
        case 'x':
            for(let i = indiceInferior; i <= indiceSuperior; i += width) {
                let height = i;
                area += width * height;
            }
            salida.innerHTML = area.toFixed(4);
        break;
        case 'x^2':
            for(let i = indiceInferior; i <= indiceSuperior; i += width) {
                let height = i**2;
                area += width * height;
            }
            salida.innerHTML = area.toFixed(4);
        break;
        case 'x^3':
            for(let i = indiceInferior; i <= indiceSuperior; i += width) {
                let height = i**3;
                area += width * height;
            }
            salida.innerHTML = area.toFixed(4);
        break;
        case 'x^4':
            for(let i = indiceInferior; i <= indiceSuperior; i += width) {
                let height = i**4;
                area += width * height;
            }
            salida.innerHTML = area.toFixed(4);
        break;
        default:
            alert('Opcion Invalida, preciona aceptar y eloge una de las opciones');
    }
}