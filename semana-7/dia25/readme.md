# Scope (alcance) de variables:

En JS las variables tienen 3 diferentes alcances.

## Global:
Son accesibles desde cualquier parte del código.

 ```html 
 <!-- o js -->
<script>
    let nombre:"Juan";
</script>

<script>
    function saluda(){
        console.log("Hola "+ nombre);
    }
    console.log(nombre); // Juan (sólo le estamos pidiendo que nos diga el nombre)
    saludar(); // Hola Juan
</script>
```

## Local:
Son variables definidas dentro de funciones.

```js

function saluda(){
    let nombre:"Juan"; // Variable local
    console.log("Hola "+ nombre); // ok
}
console.log(nombre); // Error: "nombre" no está definido.
saludar(); // En la función sí que aparece el let nombre:"Juan". por tanto Imprime: "Hola Juan"
```

## Bloque:
Las variables con `let` o `const` dentro de un bloque (`{}`) solo son accesibles dentro de ese bloque. Algunos ejemplos de bloque son `if` o `for`.

```js
if (true){
    let nombre="Juan";
    console.log("Hola "+ nombre); //Imprimirá: Hola Juan
}
console.log("Hola "+ nombre); // Error: "nombre" no está definido.
```

## Hoisting
En JS cuando definimos una variable con "var" estas se mueven al inicio del script.

Al usar `let` o `const` estas variables no se elevarán al inicio del script (para evitar errores).

## Operadores de comparación:
Se utilizan para comparar ds valores. 

- Igual (==): (valor1 == valor2). Compara a ver si 2 valores son iguales.
```js
let numero=10;
let esPar = ( numero%2 ==  0 ); // true
let esImpar = ( numero%2 ==  1 ); // false

let numero=11;
let esPar = ( numero%2 ==  0 ); // false
let esImpar = ( numero%2 ==  1 ); // true
```

- Estrictamente igual (===): Vamos a ver si los dos valores son iguales y del mismo tipo.
```js
let num1="5";
let num1=5;

const sonIguales = (num1 == num2); // true (son dos 5)
const sonIguales = (num1 === num2); // false (son dos 5, pero uno es string y el otro es un número, por tanto no son ESTRICTAMENTE iguales)
```

- Distinto (!=): Compara si 2 valores son distintos.

- Mayor que (>): compara si un valor es mayor que otro
- Menor que (<): compara si un valor es menor que otro
- Mayor o igual que (>=): compara si un valor es mayor o igual que otro.
- Menor o igual que (<=): compara si un valor es menor o igual que otro.

## Truthy/Falsy

Las variables en JS pueden tener un valor de "truthy" o "falsy". 
Un valor "truthy" es aquel que se evalúa como verdadero en un contexto booleano, mientras que el "falsy" se evalúa como falso.

Podemos usar esta propiedad para la toma de decisiones en nuestro código.

Valores falsy:
- `undefined`, `null`, `NaN`, `0`, `"" (cadena vacía)`, y `false`.

```js
//Ejemplo si queremos saber si es igual o mayor o menor de edad
let edad= 18;

if(edad >=18){
    //se ejecuta si el valor es truthy.
    console.log("Soy mayor de edad");
} else {
    // se ejecuta si el valor es falsy.
    console.log("Soy menor de edad");
}

//Si queremos saber si un número es par o impar
let numero = 16;
if(numero  % 2 == 0){
    console.log ("Soy par");
} else {
    console.log("Soy impar");
}

// 16%2 = 0... y 0 es 
if(numero  % 2 == 0){ //falsy
    console.log ("Soy impar");
} else {
    console.log("Soy par");
}

//undefined, null, NaN, 0, "" (cadena vacía), y false.
if(""){
    //esto no se ejecuta
} else {
    // esto sí que se ejecuta
}
```

### Reducción de condicionales quitando el else

-Rellenar con info de las capturas.

# Manipulación de textos

1. Concatenación:
```js
let nombre= "Jaime"
let apellido= "Nebot"
let nombreCompleto = nombre + " " + apellido; //Jaime Nebot

//Concatener utilizando +=
let numero = 5;
numero++; // numero = numero +1; // 6

let saludo= "Hola, ";
saludo +="¿cómo estás?";
console.log(saludo); //Hola, ¿cómo estás?
```

2. Interpolacion:
Con las plantillas literales (template literals),pueden insertar variables o expresiones dentro de una cadena usando "${}".

```js
let nombre="Ana";
let edad= 25;

//interpolación
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

//insertar expresión
let total = 50;
let iva = 0.21;
console.log(`El total con impuestos es: ${ total + (total *iva)} `);
```
