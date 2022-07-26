// go build FILE => compile
// go run   FILE => run

package main
 
import (
    "fmt"
)
 
type Human struct {
    Name string
    Age int
}
 
func (h *Human)greet() string {
    return "[" + h.Name + "] Hello there!" 
}


func main() {
    obiwan := Human{"Obywan", 52}

    fmt.Println(obiwan.greet())
}

