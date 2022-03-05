[<< back](problema) | [Indice](../README.md) | [Next >>](paradigmas/README.md)

# Objetivos

# El mundo de los lenguajes de programación

Este proyecto, es un intento de crear una especie de _"piedra roseta"_ para los lenguajes de programación.

```
No queremos decir que sabiendo un lenguaje X, gracias a la "piedra roseta"
vayamos por "arte de magia" a saber programar en el lenguaje Y.

¡No! ¡Esto no funciona así!
```

¿Se puede crear una "piedra roseta" para los lenguajes de programación que sea útil y práctica? Esto es, ¿ir más allá de un concepto teórico para tener "algo" que sea realmente útil?... ¡Vamos a intentarlo!

```
¡No! ¡No lo intentes!
¡Hazlo! o ¡No lo hagas! ¡Pero no lo intentes!

mmm ¡vale! ¡Lo hago! y... ya veremos los resultados...
```

Resultados esperados:
* Si se consigue: bien. Entonces tenemos respuesta positiva a la pregunta inicial.
* Si no se consigue: bien. Entonces tenemos respuesta negativa a la hipótesis inicial.

> Puede ser que se consigan estos objetivos, o también puede ser que se llegue a la conclusión de que no se pueden cumplir. En tal caso, al final del camino, habrá alguna respuesta (2022-02-26)


## Definiciones de las características

A veces tenemos definiciones o términos que se usan con diferente semántica por programadores de
lenguajes diferentes. Esto nos puede llevar problemas de comunicación/entendimiento.

¿Se podría llevar a un concenso en las definiciones entre programadores de lenguajes diferentes?
No lo sé. Pero vamos a:
1. intentar ir definiendo términos
1. buscar concenso y
1. ver qué va pasando.

## Conocimiento limitado del programador

_(Esto es una opinión personal)_

¿Se puede ser un buen programador?
1. Sin saber las características que SI tiene su lenguaje.
2. Sin saber las características que NO tiene su lenguaje.
3. Sin saber los términos correctos de su lenguaje.
4. Sin saber bian las definiciones de las características de su lenguaje.

(1) No harás código eficente en tu lenguaje, porque no aprovecharás las características
de tu lenguaje que te ayudan a resolver el problema mejor.
(2) Perderás tiempo buscándolas, pero al final lo averiguarás y tendrás que
implementarlo por ti mismo.
(3 y 4) No podrás comunicarte adecuadamente con los compañeros, ni hacerte entender bien.
No trabajarás bien en equipo.

Si eres un programador nóvel y estás empezando, es normal que no domines el lenguaje, pero si además dispones de una guía detallada (SOFA) de los que tiene o no tiene tu lenguaje... entonces perderás menos tiempo en el aprendizaje al no ir contracorriente en tu lenguaje, y no te darás "cabezazos contra la paredes" si sabes dónde están esas paredes de tu lenguaje.

Todos los lenguajes tienen "paredes" y "espacio abierto" pero... es diferente en cada lenguaje.

## Definir de forma no ambigua

**Establecer definiciones no ambiguas** de los términos asociados a los lenguajes de programación (en la medida de lo posible) que nos permitan unificar la visión que tenemos de los mismos. Si no conseguimos eliminar la ambigüedad de todos los términos, si por lo menos reducirla al máximo e identificar terminos "blanco-negro" y/o términos "grises".

## Perfilado

Una vez tengamos un conjunto de definiciones (features) para trabajar, podemos aplicarlas a los lenguajes de programación, de modo que podemos conseguir tener un perfil de cada uno.

> Vuelvo a insistir. El perfilado NO pone nota o valor a los lenguajes de programación para segregar o competir. ¡NO! El perfilado simplemente es una "foto" del lenguaje. Para valorar, ya cada uno que lo haga en su cabeza.

Este [conjunto de features](features) empezó con una lista (SOFA-v.1) y ahora estamos en SOFA-v2. Y me temo que seguirá aumentando. En el futuro siempre hay evolución, cambio y aparición de nuevas features... sólo espero que vaya más despacio que este proyecto para que no de tiempo a irlo cubriendo. :-)

Como adelanto, decir que el perfilado es como obtener una _"prueba genética de mi lenguaje de programación"_. Cada lenguaje debería tener 1 cromosoma-FKT . Y este cromosoma-FKT estar compuesto de genes-FKT. Cada gen debe decirnos o indicarnos si el lenguaje de programación tiene o no un determinado feature.

Por ejemplo: Hay un gen-FKT para la feature "goto".
* **Valor 1:** Si el cromosoma-FKT  tiene valor 1 en ese gen-FKT, entonces el lenguaje tiene "goto"  
* **Valor 0:** Si el cromosoma-FKT lenguaje tiene valor 0 en ese gen-FKT, entonces no tiene "goto".
* **Valor ?:** Este es valor desconocido. Esto quiere decir mucho. O bien la definición del feature asociado al gen-FKT no está bien definida, o bien los programadores no entienden o no conocen el feature asociado al gen-FKT. Esto daría lugar a otro paso muy interesante "La técnica fenicia" o "Frankenstein recursivo". Ya veremos.

## Similitudes y diferencias

**Identificar similitudes y diferencias** entre el lenguaje de programación X y el lenguaje Y. Esto nos puede dar una visión panorámica de un lenguaje Y antes de aprenderlo.

## Mejorar la comunicación

**Mejorar la comunicación** entre un programador del lenguaje X y otro del lenguaje Y. Con esto reducimos los tiempos de resolución de las discusiones/debates que se establecen entre programadores de ambos mundos. Normalmente las conversaciones suelen ser más fluídas entre programadores de mundos "cercanos" porque la forma de pensar es similar y usamos términos similares. Pero entre programadores de diferentes "mundos" ya la comunicación se vuelve lenta, pesada ... Se busca la felicidad de los programadores en estas charlas.

## Mejorar la formación

**Identificar que aspectos** del lenguaje X son más **difíciles de entender** por la propia comunidad X o por los nuevos aprendices. De esta forma una comunidad X puede aplicar el principio filosófico de "conócete a tí mismo". Esto es muy valioso, ya que nos permite reforzar nuestra comunidad y/o detectar problemas en la comunidad de forma prematura.
