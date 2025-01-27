//-----------------------------------------------------------
// 1. Declarar constantes y variables.
//-----------------------------------------------------------
const sliderImages = document.querySelector('.Slider-images')
const images = document.querySelectorAll('.Slider-img');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
const totalImages = images.length;


//-----------------------------------------------------------
// 2. EventListeners y funciones.
//-----------------------------------------------------------
btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    actualizarSlider();
    actualizarContador();
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    actualizarSlider();
    actualizarContador();
}

function actualizarSlider() {
    const width = 400;
    sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
}

function actualizarContador() {
    spanActual.textContent = currentImageIndex + 1;
}


//-----------------------------------------------------------
// 3. Ejecutamos nuestro código.
//-----------------------------------------------------------
spanTotal.textContent = totalImages;
actualizarContador();


//-----------------------------------------------------------
// 4. Funcionalidad de Intervalos.
//-----------------------------------------------------------
sliderImages.addEventListener('mouseover', () => {
    clearInterval(intervalos);
});

sliderImages.addEventListener('mouseout', () => {
    agregarIntervalo();
});

function agregarIntervalo() {
    intervalos = setInterval(nextImage, 1000);
}

agregarIntervalo();




//------------------------------------------
//---- MÉTODOS PARA CARGAR LAS IMÁGENES ----
//------------------------------------------

// Método 0: cargar imágenes directamente en nuestro HTML.

//Método 1: Lista de imágenes:
//const lista_imagenes = [
    //{ file: "imagen1.jpg ", description: "imagen 1" },
    //{ file: "imagen2.jpg ", description: "imagen 2" },
    //{ file: "imagen3.jpg ", description: "imagen 3" },
    //{ file: "imagen4-long.jpg ", description: "imagen 4" },
// ];


//Método 2: Lista de imágenes de JSON (string)
//const lista_imagenes_json = `[
    //{
        //"file": "imagen1.jpg ",
        //"description": "imagen 1"
    //},
    //{
        //"file": "imagen2.jpg ",
        //"description": "imagen 2"
    //},
    //{
        //"file": "imagen3.jpg ",
        //"description": "imagen 3"
    //},
    //{
        //"file": "imagen4-long.jpg ",
        //"description": "imagen 4"
    //}]`;
//con JSON.parse(miStringDeJson) convertimos de JSON a Objeto JS.


//Método 3: Lista de imágenes obtenida desde una "API" con promesas/fetch
//function traerImagenesAPI(){
//fetch('https://photos.google.com/misFotos')
//fetch('./basededatos.json')
//}   


//MÉTODO INSEGURO Y SUSCEPTIBLE A INYECCIÓN DE CÓDIGO:
//sliderImages.innerHTML += `
//<img src="0" onerror="alert('tengo acceso a tu navegador')" />;
//<img class="Slider-img" src="imgs/${imagen.file}" alt="${imagen.description}" >`;


//MÉTODO SEGURO Y DE MAYOR CONTROL:
//const img = document.createElement('img'); // crear etiqueta <img>.
//img.classList.add("Slider-img"); // agregar clase "Slider-img".
//img.src = `img/${imagen.file}`; // le cargamos el src.
//img.alt = imagen.description;

//Cuando creas un elemento HTML se pueden cambiar las propiedades que quieras.
// img.textContent = "el texto que quiera dentro de la etiqueta";
// img.setAttribute('edad', 38);

//sliderImages.appendChild(img);
//images.push(img);

//ahora que tenemos el HTML cargado, contamos la cantidad de imágenes.
//totalImages = images.length;
//spanTotal.textContent = totalImages;
//actualizarContador();
// }