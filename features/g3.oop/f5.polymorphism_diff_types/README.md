
# Polymorphism (no inheritance)

Polimorfismo

Propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos.
* Como requisito los objetos polimórficos deben saber responder al mensaje que se les envía.
* Además (en este caso), los objetos polimórficos son de tipos diferentes. Esto es, que no hay relación de herencia (padre-hijo) entre ellos.

# Ejemplos

* [Ruby example](example_ruby.rb)

# Más información

Comportamientos diferentes, asociados a objetos distintos, pueden compartir el mismo nombre; al llamarlos por ese nombre se utilizará el comportamiento correspondiente al objeto que se esté usando.

O, dicho de otro modo, las referencias y las colecciones de objetos pueden contener objetos de diferentes tipos, y la invocación de un comportamiento en una referencia producirá el comportamiento correcto para el tipo real del objeto referenciado.
* Cuando esto ocurre en "tiempo de ejecución", esta última característica se llama asignación tardía o asignación dinámica.
* Algunos lenguajes proporcionan medios más estáticos (en "tiempo de compilación") de polimorfismo, tales como las plantillas y la sobrecarga de operadores de C++.
