
# Función vs método

Empecemos por tratar de poner definiciones.

Coincidencias entre función y método:
* Fragmento de código que normalmente tiene asociado un nombre que se usa para ser invocado.
* Se le pueden pasar datos de entrada (es decir, los parámetros).
* Puede devolver datos de salida (el valor de retorno).

**Función**
* No está asociado a ningún objeto.
* Todos los datos que se pasan a una función se pasan explícitamente.

**Lambda**
* Es una función anónima.

**Método**
* Está asociado con un objeto.
* A un método tiene acceso implícitamente al objeto al cual pertenece.
* Puede operar en datos contenidos dentro de la clase.

En muchos aspectos, un método es idéntico a una función.
De hecho, excepto por la pertenencia a un objeto o no, un método es un superconjunto de la función.

Veamos ejemplos:

* [ruby1-function.rb](ruby1-function.rb): Function
* [ruby2-lambda.rb](ruby2-lambda.rb): Lambda function
* [ruby3-method.rb](ruby3-method.rb): Instance method
* [ruby4-method.rb](ruby4-method.rb): Class method or static method.
