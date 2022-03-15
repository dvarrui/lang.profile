
# Compilar

# 1. Definición de compilar y compilador

> Enlaces de interés:
> * https://es.wikipedia.org/wiki/Compilador

* Es un programa que **traduce código escrito en un lenguaje de programación (llamado fuente) a otro lenguaje (conocido como objeto)**.
*​ En este tipo de traductor, el lenguaje fuente es generalmente un lenguaje de alto nivel, y el objeto un lenguaje de bajo nivel (código máquina).
*​ A diferencia de los intérpretes, los compiladores reúnen diversos elementos o fragmentos en una misma unidad (un programa ejecutable o una biblioteca), que puede ser almacenada y reutilizada. Este proceso de traducción se conoce como compilación.

Un compilador realiza su cometido de traducción en 2 tareas que agrupan varias fases:
* Tarea 1: Análisis del programa fuente
* Tarea 2: Síntesis del programa objeto.

## 1.1 Tarea de Análisis y el analizador

Se trata de la comprobación de la corrección del programa fuente, según la definición del lenguaje en términos de teoría de lenguajes formales.

Incluye las fases correspondientes
* al análisis léxico (que consiste en la descomposición del programa fuente en componentes léxicos),
* análisis sintáctico (agrupación de los componentes léxicos en frases gramaticales ) y
* análisis semántico (comprobación de la validez semántica de las sentencias aceptadas en la fase de análisis sintáctico)

**Analizador o front-end**: es la parte que
* analiza el código fuente,​
* comprueba su validez,
* genera el árbol de derivación y
* rellena los valores de la tabla de símbolos.

Esta parte suele ser independiente de la plataforma o sistema para el cual se vaya a compilar, y está compuesta por las fases comprendidas entre el análisis léxico y la generación de código intermedio.

## 1.2 Tarea de Síntesis y el generador

Su objetivo es la generación de la salida expresada en el lenguaje objeto y suele estar formado por:
* Una o varias combinaciones de fases de generación de código (normalmente se trata de código intermedio o de código objeto) y de
* optimización de código (en las que se busca obtener un programa objetivo lo más eficiente posible, según su complejidad computacional o complejidad de Kolmogórov: tiempo de ejecución, espacio durante ejecución, espacio para ser almacenado fuera de ejecución, etc.).

**Generador o back-end**: es la parte que
* genera el código máquina,
* específico de una plataforma, a partir de los resultados de la fase de análisis.

Esta división permite que el mismo generador se utilice para crear el código máquina de varios lenguajes de programación distintos y que el mismo analizador que sirve para examinar el código fuente de un lenguaje de programación concreto sirva para producir código máquina en varias plataformas. Suele incluir la generación y optimización del código dependiente de la máquina.
