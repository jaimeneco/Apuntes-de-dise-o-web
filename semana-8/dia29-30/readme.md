```js

//Funciones nombradas
function suma(a,b){
    // let resultado = a+b;
    // return resultado;s

    return a+b;
}

console.log(suma(5,3)); // 8
const res = suma (24, -3); // res = 21




//--------------------------------------
//Funciones anónimas
const cuadrado = function (a) {
    return a*a;
}

const res = cuadrado(3); // 9
let res2 = cuadrado(5); // 25





//--------------------------------------
// Funciones flecha: 
// función que devuelve el cubo de un número

const cubo = (a) => {
    return a * a * a;
}
const res3 = cubo(3); // 27

// Función flecha con 1 solo parámetro y sin return
// Esta función recibe un número y muestra en consola (devuelve) el doble de ese número.
//optimización 1: quitar paréntesis cuando tengo un sólo parámetro. Si tengo más parámetros es obligatorio poner paréntesis.
//Optimización 2: si mi código tiene una sola línea puedo devolverlo sin llaves ni return

const doble = a => a * 2;

// es lo mismo que:

const doble = (a) => {
    return a * 2;
}
console.log(doble(3)); // 6

```