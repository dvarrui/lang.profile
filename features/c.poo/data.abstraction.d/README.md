

# Data Abstraction

* Data are visible only to semantically related functions, so as to prevent misuse.
* Data abstraction leads to frequent incorporation of data hiding as a design principle.
* If a class does not allow calling code to access internal object data and permits access through methods only, this is a **strong form of abstraction** or information hiding known as abstraction.
* Some languages (Java, for example) let classes enforce access restrictions explicitly, for example denoting internal data with the private keyword and designating methods intended for use by code outside the class with the public keyword. Methods may also be designed public, private, or intermediate levels such as protected (which allows access from the same class and its subclasses, but not objects of a different class).
* In other languages (like Python) this is enforced only by convention (for example, private methods may have names that start with an underscore).

* [Ruby Example](person.rb): @birthdate data is hidden.
