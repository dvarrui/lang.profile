// go build FILE => compile
// go run   FILE => run

package main
 
import (
    "fmt"
)
 
type Character interface {
    greet() string
}
 
type Human struct {
    Name string
    Age int
}
 
func (h *Human)greet() string {
    return "[" + h.Name + "] Hello there!" 
}

type Robot struct {
    Name string
    Model string
}

func (r *Robot)greet() string {
    return "[" + r.Name + "] Beep, beep, beep." 
}

func greetPlease(h Character) {
    fmt.Println(h.greet())
}
 
func main() {
    var obiwan = Human{"Obywan", 52}
    var r2d2 = Robot{"R2-D2", "Astromech droid"}
     
    greetPlease(&obiwan) 
    greetPlease(&r2d2) 
}

