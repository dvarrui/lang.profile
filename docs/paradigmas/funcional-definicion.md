

# Paradignma funcional

Enlaces de interés:
* https://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional
* https://www.rubyguides.com/2018/01/functional-programming-ruby/

## Definición

La programación funcional es un paradigma de programación declarativa basado en el uso de verdaderas funciones matemáticas.

Características:
* **Las funciones son ciudadanas de primera clase**: sus expresiones pueden ser asignadas a variables como se haría con cualquier otro valor.
* Pueden crearse **funciones de orden superior**: Funciones que reciben como argumentos otras funciones y pueden devolver también funciones.

La programación funcional tiene sus raíces en el cálculo lambda, un sistema formal desarrollado en los años 1930 para investigar la naturaleza de las funciones, la naturaleza de la computabilidad y su relación con la recursión. 

* **Priorizar el uso de recursividad** para resolver problemas que en otros lenguajes se resolverían mediante estructuras de control (por ejemplo, ciclos). 
* **Lenguajes funcionales puros**: eliminar la mutabilidad o efectos secundarios (en contraste con la programación imperativa, que se basa en los cambios de estado mediante la mutación de variables). Dos o más expresiones sintácticas idénticas (por ejemplo, dos llamadas a rutinas o dos evaluaciones) siempre devolverán el mismo resultado. Es decir, se tiene **transparencia referencial**. Lo anterior también puede ser aprovechado para diseñar estrategias de evaluación que eviten repetir el cómputo de expresiones antes vistas, ahorrando tiempo de ejecución.

## Lenguajes funcionales

Usados en la industria:
* Lisp (Scheme, Common Lisp, etc.)
* Erlang
* Rust
* Objective Caml
* Scala
* F#
* Haskell

Lenguajes de dominio específico como 
* R (estadística)
* Mathematica (cómputo simbólico)
* J y K (análisis financiero)

Los lenguajes de uso específico usados comúnmente como SQL y Lex/Yacc, utilizan algunos elementos de programación funcional, especialmente al procesar valores mutables.

Las hojas de cálculo también pueden ser consideradas lenguajes de programación funcional.

## Otros lenguajes 

Lenguajes de programación no diseñados específicamente para seguir un estilo funcional, sin embargo lo ofrecen como alternativa. Por ejemplo, Perl, JavaScript y Python fueron diseñados con capacidades de programación funcional, además de incorporar otros paradigmas.

Versiones recientes de lenguajes originalmente sin capacidades funcionales, como C++ y Java, han ido incorporando algunos conceptos de la programación funcional.


