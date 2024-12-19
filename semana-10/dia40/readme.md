## Uso de Async y Defer

El atributo "defer" en la etiqueta `<script>` nos permite cargar un script de manera asíncrona, pero asegurándonos de que se ejecute deespués de que el documento HTML haya parseado.

```js
<head>
<script srce="js/mi-script.js" defer></script>
</head>
```

## Loading Lazy (para imágenes)

La etiqueta <img> posee un atributo `loading`que nos permite cargar imágenes de manera diferida. Esto se utiliza para cargar imágenes que no se encuentran en el viewport del usuario.

```html
<img src="imagen.png" loading="lazy" alt="Esta es una imagen">
```

<!-- Documentación oficial -->
https://code.visualstudio.com/docs/copilot/overview 

<!-- Link para tener IA -->
https://github.com/features/copilot