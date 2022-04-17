
# Class-based

* In class-based languages the classes are defined beforehand and the objects are instantiated based on the classes.
* If two objects apple and orange are instantiated from the class Fruit, they are inherently fruits and it is guaranteed that you may handle them in the same way; e.g. a programmer can expect the existence of the same attributes such as color or sugar_content or is_ripe.

Ruby example:

```
class Person
  def initialize(name)
    @name = name
  end
end

obiwan = Person.new("Obiwam Kenobi")
```

> Take a look at [Prototype-base](../prototype.base.d/README.md)
