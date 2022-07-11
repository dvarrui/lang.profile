
# Basado en clases

* En los lenguajes basados en clases, éstas se definen antes de que los objetos puedan ser instanciados.
* Si dos objetos `apple` y `orange` son instancias de la clase `Fruit`, entonces son frutas y se pueden manejar ambas instancias de forma indistinta.

## Ejemplo

```ruby
class Fruit
  def initialize(color, sugar_content, ripe)
    @color = color
    @sugar_content = sugar_content
    @ripe = @ripe
  end
end

apple = Fruit.new('red', 40, false)
orange = Fruit.new('orange', 60, false)
```

* Otro ejemplo [person.rb](person.rb)

> Take a look at [Prototype-based](../prototype.based.d/README.md)

# Class-based

* In class-based languages the classes are defined beforehand and the objects are instantiated based on the classes.
* If two objects apple and orange are instantiated from the class Fruit, they are inherently fruits and it is guaranteed that you may handle them in the same way.
* e.g. a programmer can expect the existence of the same attributes such as `color` or `sugar_content` or `is_ripe`.

## Ejemplo

```ruby
class Fruit
  def initialize(color, sugar_content, ripe)
    @color = color
    @sugar_content = sugar_content
    @ripe = @ripe
  end
end

apple = Fruit.new('red', 40, false)
orange = Fruit.new('orange', 60, false)
```

* Other example [person.rb](person.rb)

> Take a look at [Prototype-based](../prototype.based.d/README.md)

# Enlaces de interés

* https://medium.com/@crescenzojay/dont-objectify-me-or-do-class-based-vs-prototype-based-oop-e2eb6b7a5a57
