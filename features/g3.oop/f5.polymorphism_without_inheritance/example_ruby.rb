# Polymorphism no inheritance
#
# La clase Person y Cat respoden ambas al mñetodo `greet`, por tanto,
# Se puede invocar el método de forma polimórfica.
#
class Person
  def initialize(name)
    @name = name
  end

  def greet
    puts "[#{@name}] Hi! My name is #{@name}"
  end
end

class Cat
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "[#{@name}] Miau, miau"
  end
end

list = [ Person.new("Obiwan"), Cat.new("Akane ") ]

list.each { _1.greet }
