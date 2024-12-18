# Funciones de callback / Promesas


## Concepto de Sincronía vs Asincronía
- La sincronía es la ejecución de tareas en un orden secuencial, es decir, una detrás de otra.

```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    //  esperar 3 segundos
    esperar(3000);
    console.log("Paso 2");
}

function esperar(milisegundos){
    const start = new Date().getTime();
    while( new Date().getTime() - start < milisegundos);
}
```

- La asincronía es la ejecución de tareas NO secuenciales, es decir, se puede ejecutar antes de que la anterior haya terminado.

Esto se usa para:
    - Traer información de una base de datos (DB).
    - Traer información de una API externa.
    - Manipular nuestros propios archivos.

Para lograr esto, simplemente debemos enviar como parámetro una función de `callback` que se ejecuta al finalizar la tarea asíncrona.

```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    //  esperar 3 segundos
    setTimeout( ()=> {
        console.log("Paso 2")
    }, 3000);
}
```


## Funciones de Callback
- Como debemos esperar a que una tarea asíncrona termine para poder continuar con la siguiente, se utilizan los callbacks para realizar una acción después de que la tarea haya terminado. (HAY UNA IMAGEN DE EJEMPLO)

- La gran desventaja de los callbackses que se pueden anidar y se vuelven muy difíciles de leer y mantener. A esto se les llama `Callback Hell` y por esto se han creado las `Promesas`.


## Promesas
- Una promesa es un objeto que representa la `terminación` o el `fracaso` de una operación asíncrona. 

Puede tener uno de estos 3 estados:
    - Pendiente: cuando aún no se ha completado y no se sabe si se va a cumplir o no.
    - Resuelta: (con resolve), cuando se ha completado con éxito.
    - Rechazada: (con reject), cuando ocurrió un error.

```js
const miPromesa = new Promise( (resolve, reject ) => {
    console.log("Intentando hacer lo que te prometí");
    //.......
    setTimeout(()=> {

        // pude cumplir la promesa (Uno de los dos casos debe estar comentado para que funcione)
        resolve("¡ÉXITO!");

        // no pude cumplir la promesa (Uno de los dos casos debe estar comentado para que funcione)
        // reject("¡ERROR!, no encontré los archivos que pediste");

    }, 3000);
});

miPromesa.then( resultado => {
    console.log(resultado)
    })
    .catch( error => {
    console.log("Tuve un error:", error)
    })
    .finally( ()=> console.log("Termina la tarea (ya sea con error o éxito)") );



//-------

const miPromesa = new Promise( (resolve, reject) => {
    console.log("Ejecutando lo que te prometí");
    setTimeout( ()=> {
        resolve("EXITO!");
    }, 3000 )

} );
miPromesa.then(result => {
            console.log(result);  return "Exito 2!";  
        }).then(result => {
            console.log(result); return "Exito3!";   
        }).then(result => {
            console.log(result);   return "Exito 4!";   
        }).then(result => { console.log(result); 
        }).catch(error => co
.catch(error => console.log("Tuve un error", error));
```

## Fetch con promesas
Uno de los usos fundamentales de las promesas es el Fetch API para hacer peticiones web. 
La función fetch() nos devuelve una promesa.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
    // .then( jsonString => {
    //     return JSON.parse(jsonString);
    // })
    .then( response => response.json())
    .then( datos =>{
        // hacer lo que quieran aquí
        //.....
        console.log("Mis datos son...", datos.title)
    })
    .catch( error => console.log("Tuvimos un error al traer los datos:" , error));
```

## Fetch con async/await

- Las desventajas de las promesas es que se vuelven difíciles de entender cuando se anidan. Por eso se han creado las funciones `async` y `await`.

```js
//con la palabra async decimos que esta función será asíncrona
async function traerDatos(){

    try {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const datos = await response.json(); // convierte mi jsonString en un objeto JS
    console.log("mis datos son...", datos);

    } catch (error){
        console.log("Tuve un error:", error);
    }
}

let listaDeUsuarios = traerDatos();
``` 

EJEMPLO DE Fetch ANIDADOS CON async/Await:

```js

async function traerPostsDeUsuario(numUsuario){
    try {

        // traer todos los usuarios
        const jsonUsers = await fetch("https://jsonplaceholder.typicode.com/users");
        const lista_Users = await jsonUsers.json(); // vconvierto de JSON a JS

        console.log(lista_Users);
        console.log(lista_Users[numUsuario].name); // ver el nombre del primer usuario


        // traer los posts del usuario 0.
        const idUsuario = lista_Users[numUsuario].id;
        const jsonPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idUsuario}`);
        const lista_Posts = await jsonPost.json() // convierto JSON a JS

        lista_Posts.forEach( (post) => {
            // imprimirlo en pantalla.
        });
        

        console.log(lista_Posts);
    } catch (error){
        console.log("Tuve un error:", error);
    }
}

traerPostsDeUsuario(0);

```



Enlace a vídeo explicativo para programación: https://www.youtube.com/watch?v=eiC58R16hb8 