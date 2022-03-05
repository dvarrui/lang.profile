[<< back](README.md) | [Paradigmas](README.md) | [next >>](README.md)

# Paradignma funcional

> Enlaces de interés:
> * https://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional
> * https://www.rubyguides.com/2018/01/functional-programming-ruby/

## Definición

La programación funcional es un paradigma de programación declarativa 
basado en el uso de funciones matemáticas.

## Historia

La programación funcional tiene sus raíces en el cálculo lambda, 
un sistema formal desarrollado en los años 1930 para investigar la naturaleza de las funciones, 
la naturaleza de la computabilidad y su relación con la recursión. 

## Características

* **Funciones de primera clase**: las funciones pueden ser asignadas a variables 
como se haría con cualquier otro tipo de datos o valor.
* **Funciones de orden superior**: Las funciones que reciben como argumentos otras funciones 
y pueden devolver también funciones.
* **Prioriza el uso de recursividad** para resolver problemas que en otros lenguajes 
se resolverían mediante estructuras de control (por ejemplo, ciclos). 
* **Inmutabilidad**: En los **lenguajes funcionales puros** las variables realmente no son variables,
son constantes porque son inmutables. No pueden cambiar su estado o valor. En contraste 
con la programación imperativa, que se basa en los cambios de estado 
mediante la mutación de variables). Dos o más expresiones sintácticas idénticas como dos llamadas 
a rutinas o dos evaluaciones, siempre devolverán el mismo resultado. 

Cuando existe la inmutablidad se consigue **transparencia referencial**, 
que se puede aprovechar para diseñar estrategias de evaluación que eviten repetir el cómputo de expresiones 
antes vistas, ahorrando tiempo de ejecución. O también para evitar race conditions en paralelismo.

## Lenguajes funcionales

Usados en la industria:
* Lisp (Scheme, Common Lisp, etc.)
* Erlang
* Rust
* Objective Caml
* Scala
* F#
* Haskell

## Los lenguajes van incorporando características funcionales

Lenguajes de programación no diseñados específicamente para seguir un estilo funcional, 
sin embargo lo ofrecen como alternativa. Por ejemplo, Perl, JavaScript y Python 
fueron diseñados con capacidades de programación funcional, además de incorporar otros paradigmas.

Versiones recientes de lenguajes originalmente sin capacidades funcionales, 
como C++ y Java, han ido incorporando algunos conceptos de la programación funcional.


