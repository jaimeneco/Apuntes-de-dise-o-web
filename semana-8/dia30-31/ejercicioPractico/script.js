// 1. Crear un array con 5 canciones, recorrer el array y mostrar en consola cada canción.
// 2. Crear un array con 5 artistas que correspondan a cada canción del primer array.
const listaCanciones = ["Billie Jean", "Lose Yourself", "Smooth Criminal", "Beat it", "Sorry Mama"];
const listaArtistas = ["Michael Jackson", "Eminem", "Michael Jackson", "Michael Jackson", "Eminem"];

const divCanciones = document.getElementById("ListaCanciones");


// 3. Mostrar en un HTML un DIV por cada canción y artista generado con JS a partir de la información del array.
listaCanciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);

    const song = listaCanciones[idx];
    const artist = listaArtistas[idx];


    // innerHTML
    // divCanciones.innerHTML += `<div class="Lista-cancion">
    //                             ${idx}.${song} <br> ${artista}
    //                             </div>`;

    divCanciones.innerHTML += `<div class="Lista-cancion">
                                        ${song} <br> 
                                        ${artist}
                                        </div>`;
});

// 4. Crear un botón con el texto "Tema 3" que al hacer click muestre en consola el nombre de la canción y el artista de la canción que se encuentra en la posición 3 del array.

const btnTema3 = document.querySelector("#btnTema3");
btnTema3.addEventListener("click", () => {
    console.log("Canción: ", listaCanciones[2]);
    console.log(`Artista: ", ${listaArtistas[2]}`);
})


// 5. Agrega botones de "siguiente", "anterior", "play", "pausa" con ids únicos para cada uno, y agrega el siguiente código JS en tu archivo, pruebalo y comenta que hace el código:

document.addEventListener('click', (event) => {
    console.log(event.target.id)
});


// 6. Agregar un atributo id a cada div generado en el punto 3, y hacer que al hacer click en cada div muestre en consola el nombre de la canción y el artista de la canción correspondiente. Buscamos en nuestro HTML todos los divs con class = "Lista-cancion"
const divsCanciones = document.querySelectorAll(".Lista-cancion");

divsCanciones.forEach((divCancion, i) => {
    divCancion.addEventListener("click", () => {
        
        imprimirReproduciendo(i);
    });
});

function imprimirReproduciendo(indice){
    const song = listaCanciones[indice];
    const artist = listaArtistas[indice];
    console.log("Artista: "+artist+ " Canción: "+song);

    divPlayingSong.innerHTML += `<div>
                                    canción: ${song} <br/>"
                                    artista: ${artist};
                                    </div>`;

}


// 7. Actualiza el punto anterior para mostrar en el HTML un párrafo con el nombre de la canción y el artista de la canción correspondiente al hacer click en cada div. Te animas a agregar un tercer array con imágenes del artista y mostrar la imagen correspondiente al hacer click en cada div?

// 8. Dale la funcionalidad necesaria a los botones Siguiente, Anterior para que pase de una canción a otra en el array de canciones mostrado en el HTML.

const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");
const idCancionActual = 0;

btnSig.addEventListener("click", () => {
    idCancionActual++;
    imprimirReproduciendo(idCancionActual);
});

btnAnt.addEventListener("click", () => {
    idCancionActual--;
    imprimirReproduciendo(idCancionActual);
});


