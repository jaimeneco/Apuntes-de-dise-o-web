# Javascript

Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Se utilixa para crear contenido dinámico e interactivo en sitios web.

Lenguaje de alto nivel:
- Está diseñado para ser fácil de leer y escribir para humanos.

Lenguaje interpretado:
- Se ejecuta línea por línea y en tiempo real. No necesita ser compilado.

```js
let numero= 1;
console.log("Mi número vale: ", numero);
//lo que imprime: "Mi número vale: 1"//

numero = numero + 2;
console.log("Mi número ahora vale: ", numero);
//lo que imprime: "Mi número ahora vale: 3"//
```

Lenguaje orientado a objetos:
- Javascript utiliza un paradigma (Orient O Programming), lo que significa que organiza el código en "objetos". Un objeto es una colección de propiedad y métodos que se pueden leer y manipular.

Perro:

//Propiedades
- Color: blanco y negro
- nombre: Lassie
- size: grande
- cantidadDePatas: 4

// Métodos
- ladrar(): hacer un ruido fuerte
- comer(): ingerir alimentos
- moverLaCola(): demostrar felicidad moviendo la cola.

```js
//ejemplo de un objeto con propiedades y métodos
let alumno = {
    nombre:"Juan",
    edad: 16, //dieciséis años, podría escribirse pero con comillas. Los nº no las llevan//
    saludar: function(){ 
        console.log("Hola, mi nombre es Juan"); // o console.log("Hola, mi nombre es "nombre");
    }
}

//quiero imprimir los datos de mi alumno//
console.log(alumno.nombre); // Juan (dentro de alumno me meto y busco nombre, me da Juan)
console.log("Me llamo ", alumno.nombre, " y tengo ", alumno.edad, " años");
//El resultado sería: Me llamo Juan y tengo 16 años//

// Para que el alumno me salude uso:
alumno.saludar();

```

## ¿Dónde probar/codificar Javascript?

- En el navegador: en la pestaña consola, escribiendo directamente.
- Etiquetas de HTML "<script></script>", en un principio se recomienda poner las etiquetas al final del body.
- Se puede usar en archivos externos con extensión ".js" y linkeando a nuestro HTML. "<script src="./js/mi-archivo.js"></script>".
- Se puede usar en sitios web externos:
    1. https://playcode.io/new
    2. https://linangdata.com/javascript-tester/
    3. https://codepen.io/
    4. https://jsfiddle.net/

## Funcionalidades:

1. Manipulación del DOM (Document Object Model): agregar, modificar o eliminar elementos HTML y CSS.
2. Procesar Formularios: verificar datos ingresados por el usuario, y realizar formularios complejos de múltiples secciones.
3. Manejo de animaciones: manipular efectos visuales y animaciones en nuestra web.
4. Manejo de eventos: responder a las acciones del usuario. Ej: click, desplazarse por la web.
5. Comunicación asíncrona con servidores mediante Ajax/Fetch: enviar y recibir datos de un servidor sin tener que recargar la página.

## Variables:
> Son como CAJAS/CUBOS que utilizamos para guardar información. Esta info puede ser un número, una texto, una lista de cosas y muchos otros tipos más.
Nos permite almacenar datos y luego usarlos o modificarlos en diferentes partes de nuestro programa.
> Definir una variable: asingarle un nombre para encontrarla más adelante.
> Asignar un valor: es poner cosas dentro de la caja,  se realiza con el símbolo "=".

En JS las variables se declaran con la palabra `let` o `const`. Antes se utilizaba la palabra `var` como valor.

```js
let nombre="Sofía";
let edad="35"
const PI= 3.14159


PI=4; //devuelve error, ya que no es cierto.
```

## Comentarios en JS:
- Simple `//`
- Simple en la misma línea `nombre="Sofía" // soy comentario`
- Bloque: `/*.......*/`
- Comentario de Documentación: se utiliza `/**....*/`para bloques de documentación, este se usa para comentarios de funciones y clases.

```js
/**
 * Esta es una función ue suma 2 números
 * la obtuve de esta url: http://mis-sumas
 * @param {number} a - El primer número
 * @param {number} b - El segundo número
 * @return {number} La suma de los 2 números anteriores
* */

function sumar(a,b) {
    return a+b;
}
``` 

## Tipos de Datos

- Números: enteros, decimales, positivos, negativos.(los decimales van con "." ej:3.5).
- Cadena de texto (string): textos, palabras, frases, 1 letra. Van entre comillas simples '', comillas dobles "", o backticks ``.
- Booleanos: True / false
- Lista de cosas (Arrays): Se escriben entre corchetes [] y se separan con comas ","
- Objeto (Object): colección de propiedades (características) y métodos (funcionalidades) y se escriben con { }.

```js
// PRIMITIVOS
let texto = "Hola alumnos de CEI";
let textoConComillas= 'Hola estoy "bien" ';
let textoConComillasSimples= "I'm Tomi";

//Template STRING
let texto = `puedo usar comillas 'Simples' o "Dobles"`;

let numeros=123;
let numeros2= "123"
numeros2 = Number(numeros2); //convierte strings a números

let entero = 25;
let decimal = 22.30;
let negativo = -5;
const PI= 3.14159;
let num1234 = Number("1234"); //1234

let estaPrendido = false;
les isprimary = true;
let onActive = false;
let esMenorDeEdad = true;


//REFERENCIALES
// objetos o arrays (son constantes)
//Listas / arrays / arreglos
const alumnosDeDW = ["Daniel", "Jaime", "Laura", "Candela", "Liz"];
const edades = [25, 32, 30, 29];
const listaMix = [1, "Juan", true, {edad:18, nombre:"Laura"}];
// 0, 1, 2, 3//

const listaCompras = ["tomate", "lechuga"];
listaCompras = ["tomate", "lechuga", "papa"];

console.log(listaCompras[0]); //tomate
console.log(listaCompras[2]); //papa

console.log(listaCompras[5]); //undefined

//OBJETOS:
//ejemplo de un objeto con propiedades y métodos
let alumno = {
    nombre:"Juan",
    edad: 16, //dieciséis años, podría escribirse pero con comillas. Los nº no las llevan//
    saludar: function(){ 
        console.log("Hola, mi nombre es Juan"); // o console.log("Hola, mi nombre es "nombre");
    }
}
// actualizar una propiedad
alumno.edad = 21;

//quiero imprimir los datos de mi alumno//
console.log(alumno.nombre); // Juan (dentro de alumno me meto y busco nombre, me da Juan)
console.log("Me llamo ", alumno.nombre, " y tengo ", alumno.edad, " años");
//El resultado sería: Me llamo Juan y tengo 16 años//

// Para que el alumno me salude uso:
alumno.saludar();

```