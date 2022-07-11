
# Compilar

Entendemos como leguaje compilado aquel que 
1. Primero el código fuente se compila para crear un fichero ejecutable.
2. Después se puede ejecutar el fichero ejecutable, pero éste solo sirve para la plataforma objetivo.

## Explicación

Estos lenguajes de programación requieren ser compilados con anterioridad a su ejecución.
No se tienen en cuenta los lenguajes con herramientas de compilación JIT (Just In Time).

* Ejemplos de lenguajes compilados: C/C++, Go, Rust, etc.
* Contra ejemplos: PHP, Python, Ruby, etc.

## Características 

* El fichero ejecutable se ejecuta más rápido que un fichero fuente que debe interpretarse en cada ejecución.
* El fichero ejecutable no es multiplataforma y debe ser compilado para cada plataforma diferente.
* Si hay mejoras en el compilador, el programa debe ser compilado nuevamente para aprovechar dichos cambios.
* En cierto modo esto también lo podríamos ver como "ofuscación forzosa". Esto es, el código que se ejecuta en la máquina destino está ofuscado y no es "legible".

## Ejemplo

Código fuente en C de `hello-world.c`:
```c
/* hello-world.c */

#include <stdio.h>

int main() {
    printf("Hello World!\n");
    return 0;
}
```

* Para compilar hacemos `gcc hello-world.ci -o hello-world`.
* Para ejecutar hacemos `./hello-world`.
