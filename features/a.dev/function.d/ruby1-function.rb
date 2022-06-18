#!/usr/bin/env ruby

# Module acts as namespace. Do not allow instances.

module A
  def self.foo
    return "foo"
  end
end

puts A.class # => module
puts A.foo()   # => foo

