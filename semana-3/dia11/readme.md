# Media Queries

Declaración en CSS que nos permite definir los estilos de nuestra web.

## Sintaxis de una MQ

Una media querie se compone de múltiples partes:
- un @media es una palabra clave reservada
- un tipo de media (screenreader, print, all, speech) [Media Type]
- Breakpoint una condición (max-width, min width, etc)
- Operadores (and, not, only)
- Un bloque de CSS.

```css
/* @media screen and (breakpoint)*/
body {
        background-color: lightgreen;
}

@media screen and (min-width: 600px) {
    body {
        background-color: lightblue;

    }
}
``` 



```css
/* Combinación de breakpoints */
@media screen and (min-width: 600px) and (max-width: 800px) {
    body{
        background-color: lightblue;
}
}

/* Orientación del dispositivo (landscape vs portrait) */
@media screen and (orientation: landscape){
    body{
        background-color: lightblue;
}
}

/*Modo oscuro*/
@media screen and (prefers-color-scheme: dark){
    body{
        background-color: black;
        color: white;
}
}
```

## Media
- All: todos los dispositivos.
- Print: vista previa de impresión.
- Screen: pantallas a color (tablets, móviles, ordenadores)
- Speech: dispositivos que conviertan texto a voz.

- Otros elementos depreciados: (tv, handheld, braille, etc.)

```css
/* Combinación de breakpoints */
.no-imprimir {
        display: none;
    }
@media print {
    .no-imprimir {
        display: none;
    }
}
```

## Tips para utilizarlo.
- Sobreescriben las reglas de CSS normales, pero no poseen mayor de especificidad, por lo tanto, los mediaqueries deben ir al final de nuestros CSS.
- Deben utilizar el mismo selector y propiedades para que reemplace la reglas que deseamos.
- Pensar de antemano los breakpoints: quiero una sobreimpresión para tablets, para teléfonos... Pensar en ancho y alto de estos elementos.
- Podemos utilizar un @media para cada selector o una sola para todos los selectores(recomendado)
- Intentemos desarrollar siempre para el móvil (mobile first).

```css
/* móviles */
.box{ }
.p{ }

/* pantallas pequeñas */
@media screen and(min-width:600px){
    .box{ }
    .p{ }
}
/* pantallas medianas */
@media screen and(min-width:1024px){
    .box{ }
    .p{ }
}
/* pantallas grandes */
@media screen and(min-width:2048px){
    .box{ }
    .p{ }
}
``` 
## Mobile VS Tablets VS Desktop
Actualizado de tamaños:
- Mobile: 320px-480px/1440px x 3200px
- Tablets: 768px - 1024px / 2560px x 1600px
- Desktop: 1024px x 768px / 5120px x 2880px