/*
EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    // Metodo constructor
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    // Metodo para evaluar si es mayor de edad
    Persona.prototype.calcularEdad = function () {
        if (this.edad >= 18) {
            console.log("Eres MAYOR de edad");
        }
        else {
            console.log("Eres MENOR de edad");
        }
    };
    return Persona;
}());
// Creamos la clase Extra (clase hija) Empleado
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldoParam) {
        // metodo super
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    // Metodo para cargar sueldo
    Empleado.prototype.cargarSueldo = function (sueldoParam) {
        if (sueldoParam < 0) {
            console.log("Ingresa un valor valido");
        }
        this.sueldo = sueldoParam;
    };
    // Metodo para mostrar sueldo
    Empleado.prototype.mostrarSueldo = function () {
        return this.sueldo;
    };
    // utilizamos el metodo abstracto(aplicando polimorfismo)
    Empleado.prototype.mostrarDatos = function () {
        console.log("Datos personales:\n      Nombre: ".concat(this.nombre, ",\n      Apellido: ").concat(this.apellido, " \n      Direcci\u00F3n: ").concat(this.direccion, " \n      Tel\u00E9fono: ").concat(this.telefono, " \n      Edad: ").concat(this.edad, "\n      Sueldo: ").concat(this.sueldo));
    };
    return Empleado;
}(Persona));
// creamos un objeto de la clase Empleado
var empleado1 = new Empleado("Carlos", "Santos", "El Salvador", 73441211, 18, 100);
empleado1.cargarSueldo(200);
empleado1.mostrarDatos();
empleado1.calcularEdad();
