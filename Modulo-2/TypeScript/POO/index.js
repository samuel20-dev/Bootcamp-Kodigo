// Programacion Orientada a Objetos (POO)
// conceptos principales de POO -> Clases y Objetos
// Clases: es basicamente crear un molde para luego crear algo (objeto)
// objeto: Es basicamente crear algo en base a el molde (clase)
// Declaracion de clases
var Auto = /** @class */ (function () {
    // Metodo constructor - instanciar objetos (se ejecutara al momento de crear objetos)
    function Auto(numChasisParam, motorParam, colorParam, cantKilometrajeParam, modeloParam, anioFabParam) {
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.transmicion = colorParam;
        this.cantKilometraje = cantKilometrajeParam;
        this.modelo = modeloParam;
        this.anioFab = anioFabParam;
    }
    // Metodos -> Acciones
    Auto.prototype.encender = function () {
        //void - no devolverá ningun valor
        console.log("Run Ruun");
    };
    Auto.prototype.apagar = function () {
        console.log("off off");
    };
    return Auto;
}());
// instanciar -> crear un objeto a partir de una clase
var autito = new Auto(84, "v8", "red", "21km", "honda", 2024);
console.log(autito);
// le asignamos un valo a nuestra propiedad del objeto
autito.motor = "v7";
console.log(autito);
