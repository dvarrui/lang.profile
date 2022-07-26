// go build FILE.go
package main
 
import (
    "fmt"
)
 
type Greeter interface {
    greet() string
}
 
type Human struct {
    Name string
}
 
func (h *Human)greet() string {
    return "[" + h.Name + "] Hello there!" 
}

type Robot struct {
    Model string
}

func (r *Robot)greet() string {
    return "[" + r.Model + "] Beep, beep, beep." 
}

func greetPlease(h Greeter) {
    fmt.Println(h.greet())
}
 
func main() {
    var obiwan = Human{"Obywan"}
    var r2d2 = Robot{"R2-D2"}
     
    greetPlease(&obiwan) 
    greetPlease(&r2d2) 
}

