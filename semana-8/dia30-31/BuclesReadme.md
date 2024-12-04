# Bucles: For, Foreach, While, Do-While, Map.

- FOR: bucle que ejecuta un bloque de código cierta cantidad de veces. Muy útil para trabajar con índices.
- ForEach: ejecuta un bloque de código cierta cantidad de veces, pero tiene como diferencia que trabajamos directamente con un método de listas y podemos acceder tanto al valor como a su índice.

```js
//Bucle For:
for(let i=0; i< 10; i++){ //Valor inicial, condición y el número de vueltas. 
    console.log(i);
}


//Bucle ForEach:
//(numero) lo nombramos así porque espero recibir números 
const listaNumeros = [1,2,3,4,6];

listaNumeros.forEach( (numero, indice) => {
    console.log(`Elemento ${numero} y su indice es ${indice}`);
} );

listaNumeros.forEach( (numero) => {
    console.log(`Elemento ${numero}`);
} );

listaNumeros.forEach( (num, i) => {
    //Actualizamos los valores de la lista, sumándole 1 a cada uno.
    listaNumeros[i]=num+1;
} );
console.log(listaNumeros); // Nos imprime [2,3,4,5,7]



// Bucle While (mientras)
let i = 0;
while(i< 10){
    console.log(i);
    i++;

}


//Bucle Do-While: se diferencia en que este bucle se ejecuta siempre al menos 1 vez.
let numero;
let total=0;

do{
    numero = prompt("Ingrese un valor"); //"5"
    numero = Number(numero);             //"5" => 5
    numero = parseInt(numero);          //"5" => 5

    total+= numero; // 0 + 5 = 5
} while(numero != 0);

alert(total)


//Bucle MAP: a diferencia del Foreach, el método MAP devuelve una copia del array. Ninguno de los dos modifica el array original.
const lista_nums= [1,2,3,7];
const lista_copia = lista_nums.map( (numero, index)=>{
    console.log(`Numero ${numero} en la posición ${index}`)
    
    });

    console.log(lista_nums); // [1,2,3,7]
    console.log(lista_copia); // [1,2,3,7]

    const lista_dobles = lista_nums.map((num)=> {
        // num = num*2; hace la misma labor que el return de abajo.
        return num*2
    });

    console.log(lista_dobles); [2,4,6,14]





```



--------------------------------------------

1.Ejercicio: crear una lista con el nombre de sus compañeros y mostrarlos en consola con un bucle for.

```js
const listaAlumnos = ["Daniel", "Begoña", "Kristiyan", "María", "Laura", "Jaime"];
//console.log(listaAlumnos[0]); imprimirá: Daniel
// i significa index

for(let i=0; i < listaAlumnos.length; i++){
    console.log(listaAlumnos[i])
}
```

--------------------------------------------
--------------------------------------------

2.Ejercicio: crear una lista con el nombre de sus compañeros y mostrarlos en consola con un bucle forEach. Hacer que María sea el número 1 en vez del 0.

```js
const listaAlumnos = ["María", "Alin", "Alejo", "Lucía", "Kristiyan", "Begoña"];

listaAlumnos.forEach( (nombre, indice) => {
    const item=indice+1;
    console.log(`${item}. ${nombre}`);
} );
```

--------------------------------------------
--------------------------------------------

3.Ejercicio: Crear un bucle while que le pida al usuario un número (prompt), y los vaya sumando hasta que el usuario ingrese el valor 0.  Mostrar luego el Total.
```js
//Respuesta del profe
let numero;
let total=0;

while(numero != 0){
    numero = prompt("Ingrese un valor"); //"5"
    numero = Number(numero);             //"5" => 5
    numero = parseInt(numero);          //"5" => 5

    total+= numero; // 0 + 5 = 5
}

--------------------------------------------


//Respuesta de chat GPT
let total = 0;
let numero;

while (true) {
    numero = parseFloat(prompt("Ingresa un número (0 para terminar):"));
    
    if (numero === 0) {
        break; // Salir del bucle si el usuario ingresa 0
    }
    
    total += numero; // Sumar el número ingresado al total
}

alert("El total es: " + total);

```

### Explicación de chat GPT
1. Inicialización: Se inicializa total en 0 y numero sin valor.
2. Bucle while: Se utiliza un bucle infinito (while (true)) que se romperá cuando el usuario ingrese 0.
3. Entrada del usuario: Se pide al usuario que ingrese un número mediante prompt(), y se convierte a un número con parseFloat().
4. Condición de salida: Si el número ingresado es 0, se utiliza break para salir del bucle.
5. Suma: Si el número no es 0, se suma al total.
6. Mostrar resultado: Al final, se muestra el total acumulado con alert().