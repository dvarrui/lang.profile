#!/usr/bin/env ruby

# Class-based example
class Person
  def initialize(name)
    @name = name
  end

  def to_s
    @name
  end
end

obiwan = Person.new("Obiwam Kenobi")

puts "[Class based Ruby example]"
puts "  * obiwan.to_s  = #{obiwan}"
puts "  * obiwan.class = #{obiwan.class}" 

yoda = Person.new("Yoda")

puts "  - obiwan.methods == yoda.methods? #{obiwan.methods == yoda.methods}"
puts "  - obiwan.class   == yoda.class?   #{obiwan.class == yoda.class}"
puts "  - Person.ancestors: " + Person.ancestors.to_s
 
