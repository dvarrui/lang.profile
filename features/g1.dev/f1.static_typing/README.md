
# Static typing

> Enlaces de interés:
> * https://rosettacode.org/wiki/Arithmetic/Integer

Un lenguaje de programación tiene tipado estático cuando:
* Es necesario especificar el tipo de dato que guardará cada variable.
* Es necesario especificar el tipo de dato que devuelve cada función.
* Es necesario conocer el tipo de dato de cada variable/función previamente a la ejecución del programa.

Hay lenguajes como por ejemplo Rust que son capaces de inferir el tipo de datos en algunas situaciones. Aún así se considera tipado estático porque se require "conocer" el tipo de dato de cada variable y/o función previo a la ejecución del programa.

# Aclaraciones

* Esta separación se suele confundir con la diferencia entre lenguajes fuertemente tipados y lenguajes débilmente o no tipados.
* La mayoría de lenguajes de tipado estático son lenguajes compilados, pero no tiene por qué ser así obligatoriamente. Tenemos de contraejemplo Typescript.
* Ejemplos de lenguajes con tipado estático: C, Rust, Typescript.

# Ejemplo

Arithmetic/Integer example:
* Get two integers from the user, and then (for those two integers), display their: sum, difference, product, integer quotient, remainder, exponentiation (if the operator exists)
* Don't include error handling.
* For quotient, indicate how it rounds   (e.g. towards zero, towards negative infinity, etc.).
* For remainder, indicate whether its sign matches the sign of the first operand or of the second operand, if they are different.

Ejemplos:
* [C](example_c.c)
* [Rust](example_rust.rs)
