
[<< back](origen.md) | [HOME](../README.md) | [Objetivos >>](objetivos.md)


## Mejorar en la programación

**El guitarrista**

Un guitarrista puede ser muy bueno y tocar muy bien su instrumento, pero será aún mejor si
conoce las características de su guitarra. Los límites hasta donde puede llegar con dicho instrumento.
Este guitarrista no tiene por qué conocer afondo las características del piano... puede ser
que un pianista le diga... aprende el piano y así sabrás. Tiene razón pero
¿realmente me merece la pena dedicar tanto tiempo a aprender el piano si sólo quiere conocer
las características y límites del intrumento? Quizás bastaría con hablar con un pianista y preguntar.

Quizás le guste lo que oye y se decida a aprender el piano.

**El Samurai**

De la misma forma que un Samurai usa su Katana en la lucha y puede ser buen luchador.
Pero será aún mejor Samurai... si conoce afondo las características de su herramienta (la Katana).
Si entiende y comprende sus límites, sus pros y contras. Podrá aprovechar todo ese conocimiento en combate.

Quizás un Samurai se pregunte ¿me merece la pena gastar X tiempo en aprender sobre el arco y la flecha?
Para aprenderlo realmente ... no queda otro camino. Pero antes podría informarme. Preguntar. Conocer las
características del arco y evaluar si me interesa realmente antes de emplear ese tiempo.

**El programador**

Lo mismo para el programador. Puedo programar bien sin dominar mi herramienta (El lenguaje de programación)...
Puede ser. ¿Seré aún mejor si conozco bien y afondo las caracteríticas de mi lenguaje? Si, sin duda.
¿Me merece la pena dedicar tiempo a profundizar en el conocimiento de mi lenguaje de programación... cuando es posible que sólo vaya a usar un 60% del mismo?

Ahí no hay una respuesta única. Cada uno debe evaluar si le compensa y le merece o no la pena.

¿Me merece la pena emplear tiempo para aprender un nuevo lenguaje? Depende de cada uno.
Quizás podría ayudar el tener un poco más de informacion acerca del nuevo lenguaje
que se quiere aprender antes de decidirse.

En esta documentacion vamos a tratar de ir poco a poco poniendo información acerca de
[las características](features/README.md) de cada [lenguaje de programación](langs/README.md).

[Unidad SOFA <<](sofa.md) | [HOME](../README.md) | [>> El Futuro](futuro.md)

# Conclusiones

_Bueno..a ver... todavía no hay conclusiones... estamos en la v0.2 pero algo podemos decir..._

```
no-goto-san: ¿Qué conclusiones esperas poder obtener de este proyecto?
Crasidea: Quiero saber SI esto puede ser útil o NO. Pero ¿útil en qué sentido?

no-goto-sab: mmm vale... sigamos..
```

## Base de datos SOFA

Al aumentar la base de datos de genes SOFA entiendo que podremos sacar conclusiones interesantes al respecto. Por ejemplo:

Supongamos estoy analizando los datos de genes SOFA para Ruby.

## 1. Coincidencia en los genes del cromosoma SOFA (bits con valor 0 o 1)

En principio, si todo fuera perfecto (que no lo es) debería salir que la base de datos de cromosomas SOFA recogida de todos los programadores del lenguaje (Por ejemplo Ruby) deberían ser "iguales" pero... no lo van a ser.

Si es posible que tengamos una base genérica donde haya coincidencia de genes (bits 0 o 1) en cuyo caso concluiremos que sus correspondientes "features" están bien definidas y entendidas por el conjunto de los programadores de Ruby.

_¡Bien! ¡Ya tenemos algo!_

**Conclusión 1**: Hemos localizado las "features" que están claras, bien definidas y bien entendidas por el conjunto de programadores Ruby:
* Los rubistas sabemos lo que SI tiene nuestro lenguaje (bit 1).
* Los rubistas sabemos lo que NO tiene nuestro lenguaje (bit 0).

## 2. Genes indefinidos (bit con valor ?)

Si detectamos coincidencias de genes SOFA con valor ?, esto indica que los programadores de Ruby:
1. No han entendido la "feature" correspondiente a es bit o
1. No tienen claro si dicha "feature" la tiene su propio lenguaje, por lo que, entonces se entiende que el programador NO domina su lenguaje lo suficiente para tener ese conocimiento.

**Conclusión 2**: Hemos localizado
* Hay características que se deben explicar mejor a los rubistas. Quizás con ejemplos.
* Hay que mejorar la formación/enseñanza de los rubistas para que conozcan su lenguaje.

Esto se soluciona ampliando y mejorando las definiciones de las features en SOFA, con ejemplos más claros y precisos.

## 3. Contradicciones (bits 0 contra bits 1)
