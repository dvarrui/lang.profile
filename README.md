
![CC_BY-NC-SA](images/by-nc-sa.svg)

```
EN CONSTRUCCIÓN!!!
(version 0.2)
```

# Advertencia al lector

Esto va de lenguajes de programación, su diseño y características. Es un poco largo. ¡Vamos allá!

* No soy experto de nada.
* No sé ni más, ni menos que nadie.
* No pretendo convencer a nadie.

Seguramente todo lo escrito aquí puede tener:
* Muchos fallos, inexactitudes, locuras.
* Reinvenciones de términos que ya existen.
* Valoraciones de juicio precipitadas o irreales.
* etc.

Todo esto trataré de irlo "puliendo" a medida que aprenda más cosas o mejore mi conocimiento sobre las que ya conozco.

Agradezco al lector:
1. Primero que sea lector de este "proyecto".
2. Se aceptan, por supuesto, comentarios y/o críticas constructivas positivas y negativas. Las positivas darán ánimo y recargarán las pilas. Las negativas darán ideas para mejorar y corregir. Y todo esto ayudará a pasar de la versión N a la N+1.
3. Si por alguna "confluencia extraña de los planetas" desea colaborar... primero mi asombro, segundo mi alegría, y tercero... ¡adelante!

Nada de lo que vaya a leer tiene porque creerlo o ser verdad. Sólo prometo... que lo que va a leer... yo lo creo, y es mi opinión...  hasta que deje de serlo si así debe ser.

¡Gracias!

# Introducción

Verás... los programadores conocemos varios lenguajes de programación... pero no los conocemos todos... En el proyecto [RossetaCode](https://rosettacode.org/wiki/Rosetta_Code) hay una lista de 870 lenguajes de programación. Y según Uncle Bob, aparece un lenguaje nuevo cada año.

En mi opinión es un "auto-engaño" cuando decimos que _hay que escoger el lenguaje adecuado para cada problema_. En realidad eso nunca nadie lo hace. Lo que hacemos es escoger el lenguaje más adecuado de entre los 4 o 5 que conocemos.  

> Conocer un lenguaje no es lo mismo que dominar un lenguaje.

**Punto 1: El mito de la mejor herramienta**

La "mejor" herramienta lo es... hasta que conocemos a otra "mejor" y a así "while(true)".
Pero SI es cierto, que tratamos de escogemos la "mejor" herramienta/lenguaje de entre las que conocemos.

> **El debate del mejor**
> Otro debate es definir "mejor". Lo dejamos para más adelante. Digo que el tema da para un debate porque genera muchos "flamewars". Para encontrar al "mejor" hay que definir el parámetro que establece el criterio de ordenación de mejor a peor. Por ejemplo supongamos que definimos mejor lenguaje aquel que genera un programa que al ejecutarse emplea o consume el menor tiempo posible. Esto es, lenguaje que genera el programa más rápido en ejecución. Bueno, entonces la forma de probarlo es tener un programa por cada lenguaje X y medir los tiempos. ¡Y listo! Tendremos una clasificación.
> Lo que suele pasar en que nuestra definición de "mejor" consiste en una lista de varios paraḿetros. Supongamos por ejemplo P1 (Tiempo de ejecución mínimo) y P2 (Número de bytes que ocupa el programa). Aquí aunque nos pongamos deacuerdo con la lista de parámetros P1, P2,, P3, etc. Otro problema sería darle pesos de importancia a cada uno.
> Vamos que el camino para encontrar "el mejor" se complica. Así que voy a dejar este asunto por ahora. y sigo...

Cada programador cuando aprende un nuevo lenguaje... inevitablemente debe adaptar su forma de pensar al estilo del lenguaje que quiere aprender, para usarlo ... si lo quiere hacer de forma apropiada.

> Una cosa es aprender un lenguaje de programación para resolver los problemas que me encuentre... y otra es conocerlo para hacerlo como un profesional del lenguaje. ;-)

Aprender un nuevo lenguaje... es como hablar otro idioma. Hay que pensar en ese idioma y cambia mucho o poco depende de cuanto se parezca ese idioma a tu idioma natal.

El idioma natal... da forma y estructura a nuestros pensamientos. Es bueno conocer otros idiomas/lenguajes para abrir la mente y tener varios puntos de vista. Los bilingües en eso nos llevan un poco de ventaja. Pero esto se puede alcanzar con tiempo, práctica y estudio de nuestra herramienta.

> Es interesante la lectura del "Libro de los cinco anillos" (o de las cinco esferas) de Miyamoto Musashi, en relación a la importancia de dominar las habilidades para ser un profesional.

**Punto 2: Aprender varios lenguajes**

Es bueno aprender varios lenguajes... a ser posible dominar al menos 2 (o 3). Pero imposible conocerlos todos.

Entre programadores hablamos de asuntos de programación (es divertido)... pero a veces el lenguaje de programación es una barrera para entendernos. Algunos forman "clanes" y "sectas cerradas" de pensamiento...

**Punto 3: Relacionarse en la variedad para mejorar**

Creo que es buena idea relacionarse en la variedad.  Sin malos rollos.

Por los puntos anteriores...  me pareció buena idea hacer algo al respecto... una especie de tabla roseta o perfilado de algunos lenguajes para ayudar a entendernos un poco mejor sin tener que gastar tanto tiempo en discusiones o aprendiendo muchos lenguajes que no vamos a usar, etc..

**Punto 4: El idioma no debe ser una barrera**

No debería ser necesario aprender polaco para entenderme con un polaco, o aprender chino para entenderme con un chino. Estaría bien. Pero no tenemos tiempo en la vida para aprender todos los lenguajes para poder entendernos con todos. Pues lo mismo en los lenguajes de programación.

La idea de mejorar la comunicación entre comunidades de pensamiento de lenguajes de programación diferentes me pareció un buen camino a recorrer (Seguramente largo, tortuoso y sin un final garantizado. Sólo hay garantías de que habrá que caminar mucho).

# ¿Qué se busca?

En este proyecto se propone:
* Buscar una forma de establecer definiciones de características de los lenguajes de programación, que sean claras, no ambiguas y aceptadas por todos los programadores (_Esto ya va a ser casi imposible_ ;-)).
* Identificar las características que tiene o que no tiene cada lenguaje de programación. Esto será el "perfilado" de lenguaje (Tener su perfil).

> **IMPORTANTE**: No se busca poner a los lenguajes un valor. Ni competir entre sí para tener un ganador. NO, NO y NO. Lo que se busca es hacer un "perfilado" o identificación de los atributos de los lenguajes. Ya cada cual... le buscará o no su utilidad (aunque aquí también se hará alguna propuesta en ese sentido).

**Punto 5: Si se te ocurre algo para mejorar... hazlo**

Se me ocurre que se podría definir un catálogo de "features v1", que podrá ir evolucionando con el tiempo, aunque espero que se llegue a estabilizar algún día.

Este catálogo de [features](features) irá recogiendo características que todos los programadores de todos los lenguajes entendamos de la misma forma. En caso de que alguna "feature" no esté clara o genere discusión... seguramente habrá revisarla y podrá eventualmente convertirse en 2 features más claras o mejor definidas. El catálogo evolucionará.

Cada programador conocedor del lenguaje X podrá ayudarnos a definir el "perfil X" para crear una base de datos de perfiles. Se está haciendo un [programa para ayudar a crear el perfil](bin), pero está en desarrollo todavía.   

Cada desarrollador DEV en la fecha TIMESTAMP podrá hacer el perfil PROFILE de su lenguaje LANGUAGE. Esto nos permitirá crear una base de datos de la forma (Ejemplo):

```
DEVELOPER_ID:TIMESTAMP:LANGUAJE:FEATURE_VERSION:PROFILE
obiwan:20220101-1200:Ruby:1:datos-del-perfil
yoda:20220102-1130:Java:1:datos-del-perfil
```

> Enlaces de interés:
> * [Roseeta Code - Basic language learning](https://rosettacode.org/wiki/Category:Basic_language_learning)

# Resultado final

Con esta base de datos espero que podamos conseguir:
* Identificar features de cada lenguaje y de esta forma permitir identificar forma sencilla que aspectos de X son iguales a Y y cuáles son diferentes. Esto (por lo menos a mí) nos ayudaría a tener una base clara para que un desarrollador de X se entienda mejor con un desarrollador de Y.
* Si resulta que en el perfilado se detecta que, por ejemplo para el lenguaje X... hay una feature fZ en la que los programadores de X no se ponen de acuerdo... esto hay que revisarlo. Es interesante porque querrá decir lo siguiente:
    1. La feature fZ no está bien definida y hay que mejorar el catálogo.
    2. La feature fZ es poco conocida o mal entendida. Los programadores de X tienen diferente nivel de conocimiento y la feature fZ es compleja y debe hacerse incapié en su enseñanza o mejorar la documentación. O quizás es una característica que tiene poca repercusión entre la mayoría de los programadores X.
    3. Se pueden detectar lenguajes A,B,C que tienen un alto grado de cercanía con X y por tanto me supondrán un mejor esfuerzo aprenderlos.
    4. Se pueden detectar lenguajes E,F,G que tienen un bajo grado de cercanía con X y por tanto me puede ser interesante aprenderlos para ampliar mi abanico de habilidades como desarrolador.


# Contenidos

1. [Licencia](LICENSE.md)
1. El [problema](docs/problema.md)
1. [Objetivos](docs/objetivos.md)
1. [Paradigmas de programación](docs/paradigmas/README.md)
1. [Características](docs/features/README.md)
1. [Lenguajes de programación](docs/langs/README.md)
1. [Utilidad](docs/utilidad.md)

# Instalar las utilidades de software

`EN CONSTRUCCIÓN!!!`

En desarrollo hay una aplicación para ayudar al usuario a crear el "perfil" de su lenguage favorito.

* Instalar Ruby.
* `bundle install`, para instalar las gemas de Ruby.

# Contacto

* Email: dvarrui@proton.me
