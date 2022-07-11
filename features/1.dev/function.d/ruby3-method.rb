#!/usr/bin/env ruby 

class Person
  def initialize(name)
    @name = name
  end

  def greet 
    puts "[#{@name}] This is an instance method"
  end
end

obiwan = Person.new('Obiwan')
obiwan.greet

