# MÉTODOS DE ARRAYS

## Push()
Añade un nuevo item
```js
const frutas = ["Manzanas", "Naranjas", "Plátanos"];
let nuevaLongitud = frutas.push("Peras", "Bananas");
console.log(nuevaLongitud); // 5
console.log(frutas); //["Manzanas", "Naranjas", "Plátanos","Peras", "Bananas"]
```


## Pop()
Elimina el último elemento del array. Devuelve el elemento eliminado.
```js
let elementoEliminado = frutas.pop();
console.log(elementoEliminado); // "Banana"
console.log(frutas); //["Manzanas", "Naranjas", "Plátanos","Peras"]
```


## Shift()
Elimina el primer elemento del array y lo devuelve.
```js
let elementoQuitado = frutas.shift();
console.log(elementoQuitado); // "Manzanas"
console.log(frutas); //["Naranjas", "Plátanos","Peras"]
```


## Unshift()
Es como push, pero agrega al principio. Devuelve el largo del array.
```js
nuevaLongitud = frutas.unshift("sandía", "melón");
console.log(nuevaLongitud); // 5
console.log(frutas); //["sandía", "melón", "Naranjas", "Plátanos","Peras"]
```

## Splice
Posee 3 parámetros:
    - El 1ero: El índice donde se va a posicionar.
    - El 2ndo: La cantidad de elementos a eliminar.
    - El 3er: Los elementos a agregar.
DEVUELVE LOS ELEMENTOS ELIMINADOS

```js
const elementosQuitados = frutas.splice(2, 1, "Kiwi", "Fresa");
console.log(elementoQuitados); // ["Naranjas"]
console.log(frutas); //["sandía", "melón", "Kiwi", "Fresa", "Naranjas", "Plátanos","Peras"]

frutas.splice(0,1);
frutas.splice(-1,1);
frutas.splice(2,2);
frutas.splice(-1,0, "Mandarina", "Papaya");


```