
[<< back](README.md) | [Indice](../../README.md) | [next >>](estructurado-niveles.md)

# Paradigma de programación estructurada

_Al principio... teníamos la CPU... y el código máquina. Del código máquina... al ensamblador y seguía la vida programando y programando._

# 1. Un poco de historia

Empezamos programando en código máquina, y como es un rollo recordar tanto número tenemos la programación en ensamblador.

* Es imperativa
* Secuencial y
* tiene saltos para poder implementar los algoritmos.

## 1.1 Programación estructurada

> Enlaces de interés:
> * https://www.edix.com/es/instituto/programacion-estructurada/

La programación estructurada es una corriente que nació con la vocación de **facilitar la vida de los programadores** (_es curioso porque éste el motivo de la creación de todos los lenguajes de programación más o menos_)

En el año 1966, Böhm y Jacopini proponen el teorema con el que demuestran que cualquier programa
puede ser escrito utilizando solo tres instrucciones de control.

Utilizando únicamente:
* Subrutinas o funciones.
* Y 3 estructuras de control.

Implicaba la construcción de programas más sencillos en los que disminuía la complejidad
de las pruebas y el testing para ponerlos en funcionamiento.

## 1.2 No goto

> Enlaces de interés:
> * https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf

En 1968, Edsger Dijkstra publicó un célebre artículo que impactó en la computación moderna:
Go To Statement Considered Harmful.
* Promovió activamente el uso de lenguajes de programación estructurada.
* Fomentando la verificación formal de programas y la **eliminación de la sentencia Goto**.
* Participó en el comité que diseñó **Algol 60, el primer lenguaje de programación estructurado**.

## 1.3 Características de la programación estructurada

**El teorema del programa estructurado** es la base teórica sobre la que se construyó
esta nueva forma de programar, ya que nos da la característica fundamental de la programación estructurada. **Postula que, simplemente con la combinación de tres estructuras básicas, es suficiente para expresar cualquier función computable**.

| Ventajas |
| -------- |
| Los programas son más sencillos de entender. Desaparece la necesidad de rastrear los complejos saltos de líneas |
| Los programas resultantes tendrán una estructura clara |
| La fase de prueba y depuración de los programas se optimiza |
| El coste del mantenimiento de los programas que usan la programación estructurada es más reducido |
| Al ser más sencillos los programas, son más rápidos de crear y los programadores aumentan su rendimiento |

O sea, que se mejora en:
* Se reduce el tiempo de programación del humano.
* Se reducen costes.
* Se mejora la calidad del resultado.

## 1.4 Conclusiones

Para evitar que el programador use explícitamente los saltos se crean las estructuras: Secuencial, Condicional, Iterativa (bucles) de forma explícita en las instrucciones del propio lenguaje de programación.

Esto quiere decir que desaparecen los saltos? mmm Sí a y no. Veamos
* Sí a nivel del lenguaje de programación estructurado y
* No porque a más bajo nivel en el código máquina siguen existiendo los saltos, pero ahora, estos saltos NO los escribe el programador directamente sino que es el compilador/intérprete el que los crea y/o gestiona para "ayudar" o facilitar el trabajo del humano.

Entonces a nivel de lenguaje estructurado Si desaparecen los saltos de forma explícita, pero a bajo nivel de forma implícita siguen existiendo.

# 2. Estructuras de control

Las 3 estructuras básicas son:
1. secuencial
2. condicional
3. iterativa

## 2.1 Secuencial

Las sentencias se ejecutan en el orden en el que aparecen en el programa, es decir,
una detrás de la otra. Ejemplo:

```
name = gets
puts "Hello #{name}!"
puts "Have a good day!"
```

## 2.2 Selección o condicional

Una sentencia se ejecuta según el valor que se le atribuye a una variable booleana.
¡Un pequeño inciso! Una variable booleana es aquella que tiene dos valores posibles. Por tanto, esta estructura se puede ejecutar de dos formas distintas, dependiendo del valor que tenga su variable. Ejemplos:

```
# Ejemplo 2.2.1: Control de edad

if age>=18
  puts "Your are an adult!"
else
  puts "Sorry! You have to wait to be an adult."
end
```

```
# Ejemplo 2.2.2: Colegio

if (rol == 'profesor') then
  puts "Ha corregir!"
elsif (rol == 'alumno') the
  puts "Ha hacer las actividades/tareas"
else
  puts "¿Tu qué haces aquí?"
end
```

## 2.3 Iteración (ciclo o bucle)

La estructura de repetición ejecuta una o un conjunto de sentencias
siempre que una variable booleana sea verdadera. Ejemplo:

```
# Ejemplo 2.3.1: Bucle while clásico

mylove = 9
kisses = 0
while (kisses < mylove)
  puts "I love ruby! (Kiss)"
  kisses +=1
end
```

```
# Ejemplo 2.3.2: Iterador con for

for name in ['obiwan', 'yoda', 'quigon']
  puts "Hola #{name}!"
end
```
