// Declaracion de variable en JS
var nombre = "carlos";
// Declaracion de variable + TIPO DE DATO en TS
var cadenaTexto = "fernandez";
// tipo number
var numero;
// tipo boolean
var boolean = false;
// Declaracion de Array string
var arraycito = ["carlos", "samuel"];
// declaracion array numerico
var arrayNumerico = [12, 23, 45, 23];
// declaracion de array de tipo number or string
var arrNumString = ["carlos"];
// Declaracion de tupla
var datosUsuario;
// le pasamos los valores a nuestra tupla
datosUsuario = ["carlos", 12];
// Funciones en TS -> tipo void
function tipoVoid() {
    console.log("hola");
}
// funcion de tipo return (especificado)
function tipoReturn() {
    return 5 + 5;
}
// Funcion que retornara numero o string
function sumarOConcatenar() {
    return 4 + "3";
}
// Funcion con parametros y Template string (``)
function saludar(nombre) {
    return "Hola c\u00F3mo estas? ".concat(nombre); //template string
}
console.log(saludar("Carlos"));
