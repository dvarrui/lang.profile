
# Dinamic typing

Un lenguaje de programación tiene tipado dinámico cuando:
* No es necesario especificar el tipo de dato que guardará cada variable.
* No es necesario especificar el tipo de dato que devuelve cada función.
* No es necesario conocer el tipo de dato de cada variable/función previamente a la ejecución del programa.

Hay lenguajes como por ejemplo Rust que son capaces de inferir el tipo de datos en algunas situaciones. Aún así se considera tipado estático porque se require "conocer" el tipo de dato de cada variable y/o función previo a la ejecución del programa.

# Observaciones

* La mayoría de lenguajes de tipado dinámico son lenguajes interpretados, como Python o Ruby.
* Un lenguaje que no es dinámicamente tipado se dice que es de tipado estático, o estáticamente tipado.

> Esta separación se suele confundir con la diferencia entre lenguajes fuertemente tipados y lenguajes débilmente o no tipados. Esta característica estuvo en el lenguaje de programación "SmallTalk".

Ejemplos de lenguajes con tipado dinámico: Bash, Python, Ruby, etc.

# Ejemplo

> Enlaces de interés:
> * https://rosettacode.org/wiki/Arithmetic/Integer

Arithmetic/Integer example:
* Get two integers from the user, and then (for those two integers), display their: sum, difference, product, integer quotient, remainder, exponentiation (if the operator exists)
* Don't include error handling.
* For quotient, indicate how it rounds   (e.g. towards zero, towards negative infinity, etc.).
* For remainder, indicate whether its sign matches the sign of the first operand or of the second operand, if they are different.

Ejemplos:
* [C](example_c.c)
* [Rust](example_rust.rs)


## Ejemplo

```ruby
name = "Obiwan"
puts name

name = 50
puts name
```
