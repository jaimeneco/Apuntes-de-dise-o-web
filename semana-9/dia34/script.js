//---------------------------------------------------
// 0. Comentarios y documentación
//---------------------------------------------------




//---------------------------------------------------
// 1. Constantes y variables
//---------------------------------------------------
const formu = document.getElementById("formTarea");
const txtTarea = document.getElementById("txtTarea");
const boxTareas = document.getElementById("listaTareas");

const listaDeTareas = ["Ordenar el código JS", "Crear las Funciones", "Probar el programa"];



//---------------------------------------------------
// 2. Funciones utilitarias (reutilizables)
//      * esto también se suele hacer en un archvo aparte por ej: utils.js
//---------------------------------------------------




//---------------------------------------------------
// 3. Funciones principales de nuestra web/programa/app.
//---------------------------------------------------
function mostrarTareas() {

    // Borrar todo el contenido de la caja
    boxTareas.innerHTML = "";

    // Cargamos las nuevas tareas
    listaDeTareas.forEach( (tarea) => {
        console.log("Tarea es: ", tarea);
        boxTareas.innerHTML += `<li>${tarea}</li>`;
    });
}


//---------------------------------------------------
// 4. EventListeners
//---------------------------------------------------

// escuchamos al evento cuando se envía
formu.addEventListener("submit", (event) => {

    //NO envíes el formulario, porque quiero hacer cosas antes.
    event.preventDefault();

    const nuevaTarea = txtTarea.value; // el texto del input
    // alert(nuevaTarea);

    listaDeTareas.push(nuevaTarea); // push() es para agregar nuevo item a la lista.

    mostrarTareas();

});


//---------------------------------------------------
// 5. Inicializar nuestro programa
//---------------------------------------------------
mostrarTareas();
