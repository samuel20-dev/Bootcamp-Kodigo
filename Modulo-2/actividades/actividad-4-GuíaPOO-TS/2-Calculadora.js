/*
EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
*/
var Calculadora = /** @class */ (function () {
    // Constructor para incializar parametros
    function Calculadora(n1Param, n2Param) {
        this.n1 = n1Param;
        this.n2 = n2Param;
    }
    // Metodo Sumnar
    Calculadora.prototype.sumar = function () {
        var suma = this.n1 + this.n2;
        console.log("suma: ".concat(suma));
    };
    // Metodo Restar
    Calculadora.prototype.restar = function () {
        var resta = this.n1 - this.n2;
        console.log("resta: ".concat(resta));
    };
    // Metodo Multiplicacion
    Calculadora.prototype.multiplicar = function () {
        var multiplicar = this.n1 * this.n2;
        console.log("multiplicaci\u00F3n: ".concat(multiplicar));
    };
    // Metodo Dividir
    Calculadora.prototype.dividir = function () {
        var dividir = this.n1 / this.n2;
        console.log("division: ".concat(dividir));
    };
    // Metodo Potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        var potencia = Math.pow(base, exponente);
        console.log("potencia: ".concat(potencia));
    };
    // Metod Factorial
    Calculadora.prototype.factorial = function (numFactorial) {
        var factorial = 1;
        for (var i = numFactorial; i > 0; i--) {
            factorial = factorial * i;
        }
        console.log("factorial de ".concat(numFactorial, " es: ").concat(factorial));
    };
    return Calculadora;
}());
var calculadora = new Calculadora(5, 8);
calculadora.sumar();
calculadora.restar();
calculadora.potencia(2, 3);
calculadora.factorial(5);
