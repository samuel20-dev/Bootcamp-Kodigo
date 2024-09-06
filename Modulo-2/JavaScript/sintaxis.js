console.log("Hola mundo!");

let suma = 5 + 5;
let resta = 10 - 4;
let division = 10 / 2;
let multiplicacion = 123 * 10;
let residuo = 20 % 2;
console.log(residuo);

// Concatenacion

let sumaFalsa = 5 + "10";
console.log(sumaFalsa);

// Igualdad -- compara solamente el valor de las cosas
let igualdad = 10 == "10";
console.log(igualdad);

// Igualdad estricta -- Compara el valor y el tipo de dato de las cosas.
let igualdadEstricta = 20 === "20";
console.log(igualdadEstricta);

// desigualdad
let desigualdad = 50 != 50;
console.log(desigualdad);

// Desigualdad estricta (compara si el valor y tipo de dato son desigual)

let n = 10;
let nString = "10";

let nigual = n !== nString;
console.log(nigual);

// operador AND (&&)

let operadorAnd = 10 == "10" && "10" === "10";
console.log(operadorAnd);

// Funciones

// Funciones expresadas

function funcionExpresada() {
   console.log("Hola mundo");
}
funcionExpresada();

// funcion saludar (ejercicio)
function saludar(name) {
   console.log("Hola " + name);
}
saludar("Carlos");

// Tipos de funciones

// Funcion tipo VOID - vacia

function tipoVoid() {
   console.log("Soy una funcion tipo void");
}
tipoVoid();

// Funcion tipo Return (devolver)

function tipoReturn() {
   return "Soy una funcion tipo return";
}
console.log(tipoReturn());

// Funciones con return con parámetros

function funcionSumar(n1, n2) {
   return n1 + n2;
}
let resul = funcionSumar(5, 10);
console.log(resul);

//  Funcion flecha

const funcionFlecha = (n1, n2) => {
   return n1 + n2;
};
console.log(funcionFlecha(20, 10));

// Funcion Callback

function funcionCallback(funcion) {
   // Ejecutamos la funcion que recibe como parametro
   funcion();
}

function funcionAuxiliar() {
   console.log("ejecutando desde el callback");
}

// Le pasamos la funcion axuliar como parametro al callback
// funcionCallback(funcionAuxiliar);

// funcion anonima
// function (){
//    // codigo
// }

// funcion flecha anonima
() => {}

// Callback con funcion flecha anonima

funcionCallback(() => {console.log("Te saludo desde una funcion flecha anonima");
})
funcionCallback(function () {console.log("desde funcion anonima");
})