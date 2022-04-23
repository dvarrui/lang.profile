
![CC_BY-NC-SA](images/by-nc-sa.svg)

```
EN CONSTRUCCIÓN!!!
(version 0.2)
```

# Advertencia al lector

Tengo un tema sobre lenguajes de programación que me gustaría comentar. Es un poco largo. ¡Vamos allá!

* No soy experto de nada.
* No sé ni más ni menos que nadie.
* No pretendo convencer a nadie.

Seguramente todo lo escrito aquí puede tener:
* Muchos fallos, inexactitudes, locuras.
* Aparentes reinvenciones de términos que ya existen.
* Valoraciones de juicio precipitadas o irreales.
* etc.

Agradezco al lector:
1. Primero que sea lector de este "proyecto".
2. Se aceptan, por supuesto, comentarios y/o críticas positivas y negativas. Las positivas darán ánimo y recargarán las pilas. Las negativas darán ideas para mejorar y corregir. Y pasar de la versión N a la N+1.
3. Si por alguna "confluencia extraña de los planetas" desea colaborar... primero mi asombro, segundo mi alegría, y tercero... ¡adelante!

Nada de lo que vaya a leer tiene porque creerlo o ser verdad. Sólo prometo... que lo que va a leer... yo lo creo, y es mi opinión...  hasta que deje de serlo si así debe ser.

¡Gracias!

# Introducción

Verás... los programadores conocemos varios lenguajes de programación... pero no los conocemos todos... En mi opinión es un "auto-engaño" cuando decimos que _hay que escoger el lenguaje adecuado para cada problema_. En realidad eso nunca nadie lo hace. Lo que hacemos es escoger el lenguaje más adecuado de los 4 o 5 que conocemos.  

**Punto 1: El mito de la mejor herramienta**

La "mejor" herramienta lo es... hasta que conocemos a otra "mejor" y a así "while(true)".
Pero SI es cierto que escogemos la "mejor" entre lo que conocemos.

> NOTA: Otro debate es definir "mejor". Lo dejamos para más adelante.

Cada programador cuando aprende bien un lenguaje... inevitablemente debe adaptar su forma de pensar al estilo del lenguaje que quiere usar ... si lo quiere hacer bien.

> Una cosa es aprender un lenguaje de programación para resolver los problemas que me encuentre... y otra es conocerlo para hacerlo como un profesional del lenguaje. ;-)

Aprender un nuevo lenguaje... es como hablar otro idioma. Hay que pensar en ese idioma y cambia mucho o poco depende de cuanto se parezca ese idioma a tu idioma natal.

El idioma natal... da forma y estructura a nuestros pensamientos..  es bueno conocer otros idiomas/lenguajes para abrir la mente. Los bilingües en eso nos llevan un poco de ventaja. Pero esto se puede alcanzar con tiempo, práctica y estudio de nuestra herramienta.

> Es interesante la lectura del "Libro de los cinco anillos" (o de las cinco esferas) de Miyamoto Musashi.

**Punto 2: Aprender varios lenguajes**

Es bueno aprender varios lenguajes... a ser posible dominar al menos 2 (o 3). Pero imposible conocerlos todos.

Entre programadores hablamos de asuntos de programación (es divertido)... pero a veces el lenguaje de programación es una barrera para entendernos. Algunos forman "clanes" y "sectas cerradas" de pensamiento...

**Punto 3: Relacionarse en la variedad para mejorar**

Creo que es buena idea relacionarse en la variedad.  Sin malos rollos.

Por los puntos 1  2 y 3..  me pareció buena idea hacer algo al respecto... una especie de tabla roseta o perfilado de algunos lenguajes para ayudar a entendernos un poco mejor sin tener que gastar tanto tiempo aprendiendo otro lenguaje.

**Punto 4: El idioma no debe ser una barrera**

No es necesario que aprenda polaco para entenderme con un polaco, o que aprenda chino para entenderme con un chino. Pues lo mismo en los lenguajes de programación.

Mejorar la comunicación entre comunidades de pensamiento de lenguajes de programación diferentes me pareció un buen camino a recorrer (Seguramente largo, tortuoso y sin un final de éxito garantizado. Sólo hay garantías de que habrá que caminar mucho).

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

* Email: dvarrui@protonmail.com
