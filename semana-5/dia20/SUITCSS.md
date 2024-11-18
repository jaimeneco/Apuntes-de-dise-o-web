# Metodología SuitCSS:

[SuitCSS Oficial](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)


SUitCSS se utiliza en muchos frameworks como Angular, React, etc. Es una nomenclatura basada en BEM, pero con algunas diferencias.
Sus partes son: "Componentes", "Elementos", "Modificadores", "Estados" y "Utilidades"

## Partes:

- ComponentName (PascalCase)
- ComponentName-elementName (-camelCase)
- ComponentName--modifierName (--camelCase)
- ComponentName.isStateOfComponent (.isPascalCase, .hasPascalCase, .focusPascalCase, .onPascalCase)
- u-utilityName (u-camelCase)

## Componente (bloque) y elementos:

```css
/*Componentes*/
.Galeria{

}
/*Elementos*/
.Galeria-titulo{}
.Galeria-imagen{}
.Galeria-pieGaleria{}

/*Modificadores*/
.Galeria--principal{}
.Galeria-imagen--extraGrande{} /*Componente-elemento--modificador*/

```

## Estados:
Los estados son modificadores pero "TEMPORALES" de un elemento (activo, inactivo, cerrado, abierto...), y estos modificiadores son independientes de los componentes en los que se utiliza.
```css
.isActive{}
.MiComponente.isActive{}
.MiGaleria.isActive{}

.MiComponente.onHover{}
.MiComponente.isLoading{}

```

```html
<div class="MiComponente isActive"></div>
<div class="MiComponente"></div>
<div class="MiComponente"></div>
<div class="MiGaleria isActive"></div>
<div class="MiGaleria"></div>
<div class="MiGaleria"></div>
```

## Utilidades:

Es una clase que se puede aplicar a CUALQUIER ETIQUETA y que no tiene relación con el componente. Se escribe con una "u-" al frente.

```css
.u-textCenter{
    text-align: center;
    margin-left: auto;
    margin right: auto;
}
.u-bgRed{
    background-color: red;
}

.u-textRight{}

.u-textDanger{}
```

Incluso las utilidades poseen variantes resposive como "u-sm-textCenter", "u-md-textCenter", "u-lg-textCenter", para aplicar en diferentes tamaños de pantalla (sm:small, md:medium, lg:large)