
# Lenguaje: BASIC MSX

Enlace de interés:
* https://es.wikipedia.org/wiki/MSX_BASIC

El BASIC es un lenguaje de tiene la instrucción GOTO para realizar saltos de forma explícita,
pero también tiene instrucciones para invocar o crear:

* Estructura condicional con IF-THEN-ELSE.
* Estructura iterativa/bucle con FOR-TO-STEP.
* Invocar a funciones/métodos llamadas "subrutinas" con GOSUB-RETURN pero sin argumentos.
* Todo son variables globales (creo, lo digo de memoria después de 40 años sin tocarlo).

De alguna formam también se podrían crear programas de código máquina dentro del programa BASIC,
puesto que se podían cargar números en zonas de memoria concretas y luego invocar la ejecución 
del código alojado en dicha zona.

Con un poco de paciencia:
1. Escribes el código ensamblador en papel.
2. Lo pasas a código máquina y lo pones en instrucciones DATA de un programa BASIC
3. El programa BASIC usa POKE para escribir los DATA en zona de memoria
4. Y ya tienes desde BASIC, la creación de un programa código máquina en memoria.

```
Si, lo tenemos pero... el camino ha sido duro!
```

Con todo esto... ¿podemos decir que BASIC es estructurado SI o NO?
¿Podemos decir si tiene saltos explícitos o implícitos?

Es más fácil, responder primero a la segunda pregunta:
* BASIC tiene saltos explícitos con GOTO
* BASIC tiene saltos implícitos con IF-THEN-ELSE, FOR-TO-STEP, GOSUB-RETURN, etc.

Entonces vuelvo a la primera pregunta ¿es o no es estructurado? mmmm

## Definición de estructurado


Enlaces de interés:
* https://www.edix.com/es/instituto/programacion-estructurada/

Programación estructurada es una corriente que nació con la vocación de **facilitar la vida de los programadores**.

En el año 1966, Böhm y Jacopini proponen el teorema, con el que demuestran que cualquier programa 
puede ser escrito utilizando solo tres instrucciones de control.

Implicaba la construcción de programas más sencillos en los que disminuía la complejidad 
de las pruebas y el testing para ponerlos en funcionamiento.

Utilizando únicamente: 
* Subrutinas o funciones. 
* Y 3 estructuras de control.

## No goto

Enlaces de interés:
* https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf

En 1968, Edsger Dijkstra publicó un célebre artículo que impactó en la computación moderna: 
Go To Statement Considered Harmful. 
* Promovió activamente el uso de lenguajes de programación estructurada, 
* fomentando la verificación formal de programas y la eliminación de la sentencia Goto. 
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
