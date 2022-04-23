#!/usr/bin/env ruby

# Prototype-based example

class Person
  def initialize(name)
    @name = name
  end

  def to_s
    @name
  end
end

obiwan = Person.new("Obiwam Kenobi")
yoda = Person.new("Yoda")

class << yoda
  def color
    "green"
  end
end

puts "[Prototype based Ruby example]"
puts "  * obiwan.class     = #{obiwan.class}" 
puts "  * yoda  .class     = #{obiwan.class}" 
puts "  * Person.class     = #{Person.class}" 
puts "  * Class .class     = #{Person.class}" 
puts "  * Person.ancestors = #{Person.ancestors}" 
puts "  * obiwan.respond_to? :color = #{obiwan.respond_to? :color}"
puts "  * yoda  .respond_to? :color = #{yoda.respond_to? :color}"

