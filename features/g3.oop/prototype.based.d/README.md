
# Prototype-based

* In prototype-based languages the objects are the primary entities.
* No classes even exist.
* The prototype of an object is just another object to which the object is linked.
* Every object has one prototype link (and only one).
* New objects can be created based on already existing objects chosen as their prototype.
* You may call two different objects apple and orange a fruit, if the object fruit exists, and both apple and orange have fruit as their prototype. The idea of the fruit class doesn't exist explicitly, but as the equivalence class of the objects sharing the same prototype.
* The attributes and methods of the prototype are delegated to all the objects of the equivalence class defined by this prototype. The attributes and methods owned individually by the object may not be shared by other objects of the same equivalence class; e.g. the attribute sugar_content may be unexpectedly not present in apple. Only single inheritance can be implemented through the prototype.

> Take a look at [Class-based](../class.based.d/README.md)

# Enlaces de interés

* https://practicingruby.com/articles/adventure-in-prototypes
