
# Encapsulation

* Prevents external code from being concerned with the internal workings of an object. This facilitates code refactoring, for example allowing the author of the class to change how objects of that class represent their data internally without changing any external code (as long as "public" method calls work the same way).
* It also encourages programmers to put all the code that is concerned with a certain set of data in the same class, which organizes it for easy comprehension by other programmers. Encapsulation is a technique that encourages decoupling.


Example [profiler.rb](profiler.rb)

Cuando se crea una instancia de Profiler se invoca un método privado para construir el dato de "features", pero son métodos privados que el usuario de la clase no tiene por qué conocer.

De esta forma se desacopla la implementación del uso de la clase.
