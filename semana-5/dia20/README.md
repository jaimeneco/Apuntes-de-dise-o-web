# Emmet

Ver documento emmet.html

# Variables en CSS

Se pueden crear variables para reutilizar valores en distintas partes del código.

- Mejorar la legibilidad del código.
- Facilitar la actualización de los valores.

Se pueden crear de manera global en la raíz del documento, que en el caso de webs es <html>.

```css
/* Ejemplo para: Mejorar la legibilidad del código y Facilitar la actualización de los valores */
:root {
    --blue: #1e91ff;
    --white: #fff;
    --danger: red;
    --primary-color: #aaaccb;
}

.dark-mode{
    --primary: #bbbaac;
}

.container{
    background-color: var(--blue);
    color: var(--white);
}
```


# Suit CSS






