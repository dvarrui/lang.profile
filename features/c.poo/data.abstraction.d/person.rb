#!/usr/bin/env ruby 

class Person
  attr_accessor :name

  def initialize(birthdate)
    @birthdate = birthdate
  end

  def age
    (Time.now.year - @birthdate.year)
  end
end


date = Time.new(1970,11,16)
person = Person.new(date)
person.name = 'david'

puts "[INFO] Public methods"
puts "* person.name : #{person.name}"
puts "* person.age  : #{person.age}"

puts "\n[INFO] Private method"
begin
  puts "* person.birthdate : #{person.birthdate}"
rescue
  puts "[FAIL] Can't access hide data"
end
