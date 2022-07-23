
# Static typing

> Enlaces de interés:
> * https://rosettacode.org/wiki/Arithmetic/Integer

[Wikipedia]
_Se dice de un lenguaje de programación que usa un tipado estático cuando la comprobación de tipificación se realiza durante la compilación, y no durante la ejecución. Ejemplos de lenguajes que usan tipado estático son C, C++, Java y Haskell. Comparado con el tipado dinámico, el estático permite que los errores de tipificación sean detectados antes, y que la ejecución del programa sea más eficiente y segura._ 

_Hay frecuentemente conflictos entre aquellos que prefieren la tipificación fuerte y/o estática y aquellos que se inclinan por la tipificación dinámica, libre o débil. El primer grupo aboga por la detección temprana de errores durante la compilación y el aumento de rendimiento en tiempo de ejecución, mientras que el segundo grupo aboga por los prototipos rápidos que son posibles con un sistema de tipificación dinámico._

# Ejemplo: Arithmetic/Integer

* Get two integers from the user, and then (for those two integers), display their: sum, difference, product, integer quotient, remainder, exponentiation (if the operator exists) 
* Don't include error handling.
* For quotient, indicate how it rounds   (e.g. towards zero, towards negative infinity, etc.).
* For remainder, indicate whether its sign matches the sign of the first operand or of the second operand, if they are different.

Ejemplos:
* [C](static_typing.c)
* [Rust](static_typing.rs)

