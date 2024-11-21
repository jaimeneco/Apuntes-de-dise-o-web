# JavaScript 2 (continuación)

## Más tipos de datos:

- undefined: valor que se asigna una variable, pero que no tiene valor
    let nombre="" // valor cero
    let nombre; // undefined

- Null: es un valor que se asigna a una variable que no tiene valor
    let nombre=Null;

- NaN (Not a Number): es un valor que se signa cuando se esperaba un número, pero no se recibió un número.
    let edad= Number("hola cómo andan?"); // NaN

- Empty: String tiene un valor de '' o "".

- Función:

- Fecha => "2024-08-03 00:44:32"

```js
let noDefinido = undefined;
let nulo= null;
let noEsUnNumero= NaN;
let vacio = "";
const moverLaCola = function ( ) { }
const hoy = new Date();
```

Para ver qué tipo de dato es una variable podemos usar el operador `typeof`:

```js
console.log(typeof noDefinido); // undefined
console.log(typeof vacio); // String
console.log(typeof hoy); // Objeto
console.log(typeof moverLaCola); // Function
```

## Consola:

```js
// Mensaje informativo
console.log("Este es un mensaje informativo");
//Mensaje de error
console.error("Este es un mensaje de error");
//Mensaje de advertencia
console.warn("Este es un mensaje de advertencia");
//Mensaje de información
console.info("Este es un mensaje de información");
//Mensaje de depuración
console.debug("Este es un mensaje de depuración");
//Tabla de datos
console.table(["Manzana", "Plátano", "Cereza" ]);
```

# Operadores aritméticos:
Se utilixan para hacer operaciones matemáticas en JavaScript.
- Suma (+): suma 2 valores.

- Restar (-): resta 2 valores.

- Multiplicación (*): Multiplica 2 valores.

- División (/): divide 2 valores.

- Módulo (%): es el resto de una división, es decir, lo que sobra al hacer una división. Ej: 3 dividido 2, el módulo es 1.

- Incremento (++): aumenta y guarda en uno el valor de la variable.

- Decremento (--): desciende y guarda en uno el valor de la variable.

```js
let a=10;
let b=5;

let suma = a+b; //15
let resta = a-b; //5
let multiplicar = a*b; //50
let division = a/b; //2
let modulo = a%b; // 0
let incremento = a++; // 11
let decremento = b--; // 4

let resultado = a+suma; //25=10+15 // Pero como usamos a++ arriba, cambió a 11+15=26
b++; // 4+1
b++; // 5+1
b++; // 6+1

console.log(b); // 7
```

