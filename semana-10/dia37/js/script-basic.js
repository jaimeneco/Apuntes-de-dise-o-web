//-----------------------------------------------------------
// 1. Declarar constantes y variables.
//-----------------------------------------------------------
const sliderImages = document.querySelector('.Slider-images');
const images = document.querySelectorAll('.Slider-img');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
const totalImages = images.length;

// const lista_imagenes = {
//     {}{}{}

// }

//-----------------------------------------------------------
// 2. Añadir EventListeners y funciones
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
// 3. Inicializamos el código
//-----------------------------------------------------------
spanTotal.textContent = totalImages;
actualizarContador();


//-----------------------------------------------------------
// 4. Funcionalidad de Intérvalo
//-----------------------------------------------------------


//listyener para cuando paso el mouse por encima de sliderImages
sliderImages.addEventListener('mouseover', () => {
    //elimina cualquier timmer guardado dentro de "intervalos"
    clearInterval(intervalos);
});


sliderImages.addEventListener('mouseout', () => {
    agregarIntervalo();
});


function agregarIntervalo() {
    // Guardo en "intervalos"...
    // Crear un intervalo con setInterval( "función a ejecutar"  , tiempo );
    intervalos = setInterval(nextImage, 2000);
}

agregarIntervalo();