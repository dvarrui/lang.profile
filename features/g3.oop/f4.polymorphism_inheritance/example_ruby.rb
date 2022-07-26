# Polymorphism

class Shape
  def area
    raise "Define this method!"
  end
end

class Rectangle < Shape
  def initialize(x, y)
    @x = x
    @y = y
  end

  def area
    @x * @y
  end

  def show
    puts "[Rectangle] Area=#{area.to_s}"
  end
end

class Circle < Shape
  def initialize(r)
    @r = r
  end

  def area
    Math::PI * @r**2
  end

  def show
    puts "[Circle   ] Area=#{area.to_s}"
  end
end

list = [ Rectangle.new(3, 4), Circle.new(2) ]

list.each { _1.show }
