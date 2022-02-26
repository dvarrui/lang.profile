
# Instrucción goto en Lenguaje C

Enlace de interés:
* [Instrucción goto en C](http://www.carlospes.com/curso_de_lenguaje_c/04_03_instruccion_goto.php)





En lenguaje C, para escribir una instrucción de salto goto (ir a), se utiliza la sintaxis:
`goto <nombre_de_la_etiqueta>` 

## ¿Para qué sirve la instrucción goto?

La instrucción de salto goto se puede usar en un programa, para transferir incondicionalmente el control del mismo a la primera instrucción después de una etiqueta, o dicho de otra forma, al ejecutar una instrucción goto, el control del programa se transfiere (salta) a la primera instrucción después de una etiqueta. Una etiqueta se define mediante su nombre (identificador) seguido del carácter dos puntos (:).

Ejemplo: En el siguiente programa se utiliza la instrucción goto para resolver el mismo problema que el del ejemplo 1 del apartado Instrucción break en C:
#include <stdio.h>

int main()
{

   int n, a;

   a = 0;
   do
   {
     printf( "Introduzca un numero entero: " );
     scanf( "%d", &n );

     if ( n == 0 )
     {
      printf( "ERROR: El cero no tiene opuesto.\n" );
      goto etiqueta_1;
      /* En el caso de que n sea un cero,
         el control de programa salta a la
         primera instrucción después de
         etiqueta_1. */
     }
     printf( "El opuesto es: %d\n", -n );
     a += n;
   } while ( n >= -10 && n <= 10 );


   etiqueta_1:
   printf( "Suma: %d", a );

   return 0;
}
Los resultados por pantalla de este programa son idénticos a los de los programas de los ejemplos 1 y 2 del apartado Instrucción break en C.

En pantalla:

   Introduzca un número entero: -4

   El opuesto es: 4

   Introduzca un número entero: 12

   El opuesto es: -12

   Introduzca un número entero: 0

   ERROR: El cero no tiene opuesto.

   Suma: 8
La traza del programa es:

