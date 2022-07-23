puts 'Enter x, and then y: '
x = gets.to_i  # to check errors, use x=Integer(gets)
y = gets.to_i

puts "Sum: #{x+y}"
puts "Difference: #{x-y}"
puts "Product: #{x*y}"
puts "Quotient: #{x/y}" # truncates towards negative infinity
puts "Quotient: #{x.fdiv(y)}" # float
puts "Remainder: #{x%y}"      # same sign as second operand
puts "Exponentiation: #{x**y}"
