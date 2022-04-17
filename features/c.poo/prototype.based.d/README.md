
# Prototype-based 

* In prototype-based languages the objects are the primary entities.
* No classes even exist.
* The prototype of an object is just another object to which the object is linked.
* Every object has one prototype link (and only one).
* New objects can be created based on already existing objects chosen as their prototype.
* You may call two different objects apple and orange a fruit, if the object fruit exists, and both apple and orange have fruit as their prototype. The idea of the fruit class doesn't exist explicitly, but as the equivalence class of the objects sharing the same prototype.
* The attributes and methods of the prototype are delegated to all the objects of the equivalence class defined by this prototype. The attributes and methods owned individually by the object may not be shared by other objects of the same equivalence class; e.g. the attribute sugar_content may be unexpectedly not present in apple. Only single inheritance can be implemented through the prototype.

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
