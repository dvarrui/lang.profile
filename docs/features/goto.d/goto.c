
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
