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

function saludar(){
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
En JS cuando definimos una variable con `var` estas se mueven al inicio del script.

Al usar `let` o `const` estas variables no se elevarán al inicio del script (para evitar errores).

## Operadores de comparación:
Se utilizan para comparar dos valores. 

- Igual (==): (valor1 == valor2). Compara a ver si 2 valores son iguales.
```js
let numero=10;
let esPar = ( numero%2 ==  0 ); // true
let esImpar = ( numero%2 ==  1 ); // false

let numero=11;
let esPar = ( numero%2 ==  0 ); // false
let esImpar = ( numero%2 ==  1 ); // true
```

- Estrictamente igual (===): Vamos a ver si los dos valores son iguales y del mismo tipo.(string, int/numero, booleano, etc)
```js
let num1="5";
let num2=5;

const sonIguales = (num1 == num2); // true (son dos 5)
const sonIguales = (num1 === num2); // false (son dos 5, pero uno es string y el otro es un número, por tanto no son ESTRICTAMENTE iguales)
```

- Distinto (!=): Compara si 2 valores son distintos.

- Mayor que (>): compara si un valor es mayor que otro
- Menor que (<): compara si un valor es menor que otro
- Mayor o igual que (>=): compara si un valor es mayor o igual que otro.
- Menor o igual que (<=): compara si un valor es menor o igual que otro.

## Truthy/Falsy:
Las variables en JS pueden tener un valor de "truthy" o "falsy". 
Un valor "truthy" es aquel que se evalúa como verdadero en un contexto booleano, mientras que el "falsy" se evalúa como falso.

Podemos usar esta propiedad para la toma de decisiones en nuestro código.

Valores falsy:
- `undefined`, `null`, `NaN`, `0`, `"" (cadena vacía)`, y `false`.

Truthy: todo lo demás

Ejemplos que parecería falsy pero son truthy: "false", rellenar con captura

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
if(numero  % 2 == 0){ //truthy, porque 16/2 es igual a 8 pero como nos pide el resto, el resto es 0, por tanto 0 == 0
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
```js
let user="cei";
let pass="Abc123";

let mensaje="CORRECTA: Clave Correcta";

pass="t cei";

if(pass.length<= 8 ){   mensaje="INCORRECTA: debe tener al menos 8 caracteres"; }
if(pass.includes(" ") ){   mensaje="INCORRECTA: no debe tener espacios"; }
if(pass.includes(user) ){   mensaje="INCORRECTA: no puede incluir tu nombre de usuario";}


if(tf_errores == false){
    console.log(mensaje); //clave correcta o incorrecta
}
```


# Manipulación de textos
1. Concatenación:
```js
let nombre= "Jaime"
let apellido= "Nebot"
let nombreCompleto = nombre + " " + apellido; //Jaime Nebot

let fullName = apellido + ", " + nombre; //Nebot, Jaime

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
3. Métodos de Strings:
JavaScript nos ofrece una variedad de métodos para manipular cadenas de texto. Algunos ejemplos son:

a. `toUpperCase()` y `toLowerCase()`
Convierte todas las letras de una cadena en mayúsculas o minúsculas.

b. `split()`
Divide una cadena en una lista/array basada en un separador.

c. `slice()`
Extrae una porción de la cadena basada en índices de inicio y fin.(sin incluir el índice final)

d. `replace()`
Reemplaza una parte de la cadena por otra. (la primera que aparece)

e. `trim()`
Elimina los espacios en blanco al inicio y fin de la cadena.

f. `Includes()`
Verifica si una cadena contiene una subcadena específica.

g. `startsWith()` y `endsWith()`
Verifica si una cadena comienza o termina con una subcadena específica.

h.`repeat`
Repite una cadena un número específico de veces.


```js
let text = "Me encanta Javascript";

// toUpperCase toLowerCase
console.log(text.toUpperCase()); //ME ENCANTA JAVASCRIPT
console.log(text.toLowerCase()); //me encanta javascript


// split
const palabras = text.split(" ");
console.log(palabras); // ["Me", "encanta", "Javascript"]

------------------------
const palabras_2 = text.split(" encanta ");
console.log(palabras_2); // ["Me", "Javascript"]

------------------------
let csv = "rojo, verde, azul";
console.log("Lista de colores: ", csv.split(", ") ); //El resultado es: ["rojo", "verde", "azul"]


// slice
let frase = "Aprender Javascript es divertido";
console.log("Parte de frase: " , frase.slice(9,19)); // me dirá: "Javascript"
console.log("Desde el índice 9 al final: " , frase.slice(9)); //me dirá: "Javascript es divertido"


// Replace
let frase = "Hola mundo. hola universo";
console.log("Reemplazar 'hola' por 'Hola': ", frase.replace("hola", "Hola") );//solo cambia el primer hola que encuentra.
console.log("Reemplazar todos los 'hola' por 'Hola': ", frase.replace(/hola/g, "Hola") );// cambia todos los hola a nivel global usando regEx (expresiones regulares)


// Trim
let frase = "     Hola mi     nombre es Luka   ";
console.log("Luego de hacer trim: ", frase.trim() ); // "Luego de hacer trim: Hola mi   nombre es Luka"


//Includes: cuando le preguntamos nos va a devolver true o false
let frase = "El sol brilla en el cielo";
console.log("¿Contiene 'sol'?: ", frase.includes("sol") ); //True
console.log("¿Contiene 'luna'?: ", frase.includes("luna") ); //False


//startWith y endsWith
let frase = "Javascript es genial";

console.log("¿Empieza con 'Java'?: ", frase.startsWith("Java")); //True
console.log("¿Empieza con 'genial'?: ", frase.startsWith("genial")); //True


// repeat
let risa = "Ja";
console.log("Me causa mucha gracia: ", risa.repeat(3) ); // JaJaJa

```

Podemos combinar los métodos:

```js
let frase ="   No me gusta Javascript en diseño web   ";

let resultado = frase.trim() //elimina espacios en blanco
                        .toUpperCase() // convierte el texto a mayúsculas
                        .replace("NO ME GUSTA", "ME ENCANTA"); // reemplaza texto en mayúsculas porque el método anterior le hizo toUpperCase.

console.log(resultado); //imprime: ME ENCANTA JAVASCRIPT EN DISEÑO WEB

