## Recordamos el uso de ForEach y Map

- Importante: la diferencia entre uno y otro es que el forEach no retorna nada, mientras que el map retorna un nuevo array con los resultados de la función que se le pasa.

```js
const numeros =[1,2,3,4,5];

// ejemplo usando forEach
const cuadrados = [];
numeros.forEach(()=> {
    console.log(num);
    cuadrados.push(num*num);
});


console.log(cuadrados); // [1,4,9,16,25]

// ejemplo utilizando map
const cuadradosMap = numeros.map( num => num*num);


console.log(cuadradosMap); // Nos da: [1,4,9,16,25]

```

# Métodos de Búsqueda de Array

Los métodosd de búsqueda se podrían considerar como un método map() modificada, que devuelve tanto elementos como booleanos.

```js
const lista_coches = ["Peugeot", "BMW", "Volkswagen", "Tesla", "Ford", "BYD"];

// FIND (devuelve el primer elemento que encuentre)
const coche = lista_coches.find ( (coche)=> coche === "BMW" );
console.log(coche); // BMW

// Some (devuelve un booleano, si hay algún elemento que cumple el requisito)
const tieneTesla = lista_coches.some( coche => coche === "Tesla" );
console.log(tieneTesla); // true

// Every (devuelve  un booleano, si TODOS cumplen el requisito)
const todosEmpiezanConB = lista_coches.every( coche => coche[0] === "B" );
console.log(todosEmpiezanConB) // false

// Filter (todos los elementos que cumplan el requisito)
const cochesQueEmpiezanConB = lista_coches.filter( coche => coche[0] === "B" );

const cochesConT = lista_coches.filter( coche => coche.includes ("T") );
console.log(cochesConT); // ["Tesla"]

const cochesConTyt = lista_coches.filter ( coche => coche.toLowerCase().includes("t") );
console.log(cochesConTyt); // ["Peugeot", "Tesla"]

const cochesDeTresLetras = lista_coches.filter ( coche => coche.length  === 3 ); // más de 3 letras sería >=  ; menos de 3 letras sería <=  ; igual a 3 letras se´ria == o ===  ; diferente a 3 letras sería !=   //
console.log(cochesDeTresLetras); // ["BMW", "BYD"]