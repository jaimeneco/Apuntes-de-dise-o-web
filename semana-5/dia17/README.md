## Transition CSS
Qué son?
- Es una forma de cambiar los valores de una propiedad de manera suave y gradual. 
- Se pueden aplicar transiciones a cualquier propiedad que acepte valores numéricos o de color.
- Por ejemplo: cambiar tamaño, color de fondo, opacidad, etc.

Propiedades numéricas:
- width
- heihgt
- font-size
- padding
- margin
- border-width
- opacity
- transform(propiedades como: scale, rotate, translate,etc)

Propiedades de color:
- color
- background-colo
- border-color
- box-shadow

## Cómo se define

Utilizamos la propiedad `transition` y se pueden personalizar de la siguiente manera.
- `transition-property`: nos indica la propiedad que se animará.
- `transition-duration`: duración de la animación.
- `transition-timing-function`: la manera en la que se va a llevar a cabo la animación.
- `transition-delay`: cual va a ser la demora antes de que inicie la animación.

```css
div{
    transition-property: font-size;
    transition-duration: 4s;
    transition-timing-function: ease-in-out;
    transition-delay: 2s;

    /* unificar las 4 reglas en 1 */
    /* transition: <property> <duration> <timing-function> <delay> */
    transition: font-size 4s ease-in-out 2s
}
```

## Timing Functions:
- `ease`: velocidad lenta - rápida - lenta (por defecto)
- `linear`: constante
- `ease-in`: lento - rápido
- `ease-out`: rápido - lento
- `ease-in-out`: lenta - rápido - lenta (más brusca)
- `cubic-zeier()`: timing personalizado.