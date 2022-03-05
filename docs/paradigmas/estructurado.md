
# Paradigma de programación estructurada

Enlaces de interés:
* https://www.edix.com/es/instituto/programacion-estructurada/

Programación estructurada es una corriente que nació con la vocación de **facilitar la vida de los programadores**.

En el año 1966, Böhm y Jacopini proponen el teorema, con el que demuestran que cualquier programa
puede ser escrito utilizando solo tres instrucciones de control.

Utilizando únicamente:
* Subrutinas o funciones.
* Y 3 estructuras de control.

Implicaba la construcción de programas más sencillos en los que disminuía la complejidad
de las pruebas y el testing para ponerlos en funcionamiento.

## No goto

Enlaces de interés:
* https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf

En 1968, Edsger Dijkstra publicó un célebre artículo que impactó en la computación moderna:
Go To Statement Considered Harmful.
* Promovió activamente el uso de lenguajes de programación estructurada.
* Fomentando la verificación formal de programas y la **eliminación de la sentencia Goto**.
* Participó en el comité que diseñó **Algol 60, el primer lenguaje de programación estructurado**.

## Programación estructurada

**El teorema del programa estructurado** es la base teórica sobre la que se construyó
esta nueva forma de programar, ya que nos da la característica fundamental de la programación estructurada.
Postula que, simplemente con la combinación de tres estructuras básicas,
es suficiente para expresar cualquier función computable.

Ventajas
* Los programas son más sencillos de entender. Deesaparece la necesidad de rastrear los complejos saltos de líneas.
* Los programas resultantes tendrán una estructura clara.
* La fase de prueba y depuración de los programas se optimiza.
* El coste del mantenimiento de los programas que usan la programación estructurada es más reducido.
* Al ser más sencillos los programas, son más rápidos de crear y los programadores aumentan su rendimiento.

Las 3 estructuras básicas son: secuencial, condicional e iterativa

### Secuencial

Las sentencias se ejecutan en el orden en el que aparecen en el programa, es decir,
una detrás de la otra.

```
name = gets
puts "Hello #{name}!"
puts "Have a good day!"
```

### Selección o condicional

Una sentencia se ejecuta según el valor que se le atribuye a una variable booleana.
¡Un pequeño inciso! Una variable booleana es aquella que tiene dos valores posibles. Por tanto, esta estructura
se puede ejecutar de dos formas distintas, dependiendo del valor que tenga su variable.

```
if age>=18
  puts "Your are an adult!"
else
  puts "Sorry! You have to wait to be an adult."
end
```

### Iteración (ciclo o bucle)

La estructura de repetición ejecuta una o un conjunto de sentencias
siempre que una variable booleana sea verdadera.

```
mylove = 9
kisses = 0
while (kisses < mylove)
  puts "I love ruby! (Kiss)"
  kisses +=1
end
```
