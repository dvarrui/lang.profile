package main
 
import "fmt"
 
type rectangle struct {
    x, y float64
}
 
type circle struct {
    r float64
}
 
type printer interface {
    print()
}
 
func (p *point) print() {
    fmt.Println(p.x, p.y)
}
 
func (c *circle) print() {
    fmt.Println(c.r)
}
 
func main() {
    var i  printer      // polymorphic variable
    i = Rectangle(3, 4) // assign one type
    i.print()           // call polymorphic function
    i = Circle(2)       // assign different type to same variable
    i.print()           // same call accesses different method now.
}
 
