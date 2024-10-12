/*
Cuatro pilares de POO:

- Herencia
- Polimorfismo

- Encapsulamiento:
nos permite limitar el acceso a una claseo atraves de modificadores de acceso
- Abstraccion
*/
/*
1.Encapsuma
Modificadores de acceso:
- public -> accesible desde cualquier lugar
- private -> solamente es accesible dentro de la clase
- protected -> va tener acceso la misma clase y sus hijos.

2. Abstraccion
La abstraccion nos proporcion metodos con los que podemos interactuar con algo(propiedad / metodos) que este limitado de una clase.

Estos metodos de abstraccion son: Getters y Setters

*/
var Persona = /** @class */ (function () {
    // constructor
    function Persona(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    // metodos - > acciones
    Persona.prototype.respirar = function () {
        console.log("uff uff");
    };
    // Getters (returnan) y Setters (asignan valores)
    // obtener el nombre
    Persona.prototype.getName = function () {
        // retornamos el valor
        return this.name;
    };
    // Metodo para modificar edad
    Persona.prototype.setAge = function (ageParam) {
        this.age = ageParam; //asignamos el valor que recibimos al objeto.
    };
    return Persona;
}());
// objeto
var personita = new Persona("carlos", 13, "fdsf23e");
console.log(personita);
console.log(personita.getName());
// modifico la edad
personita.setAge(24);
console.log(personita);
