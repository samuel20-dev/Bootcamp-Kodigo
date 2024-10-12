// Declaracion de variable en JS
let nombre = "carlos";

// Declaracion de variable + TIPO DE DATO en TS
let cadenaTexto: string = "fernandez";

// tipo number
let numero: number;

// tipo boolean
let boolean: boolean = false;

// Declaracion de Array string
let arraycito: string[] = ["carlos", "samuel"];

// declaracion array numerico
let arrayNumerico: number[] = [12, 23, 45, 23];

// declaracion de array de tipo number or string
let arrNumString: string[] | number[] = ["carlos"];

// Declaracion de tupla
let datosUsuario: [string, number];

// le pasamos los valores a nuestra tupla
datosUsuario = ["carlos", 12];

// Funciones en TS -> tipo void
function tipoVoid(): void {
   console.log("hola");
}

// funcion de tipo return (especificado)
function tipoReturn(): number {
   return 5 + 5;
}

// Funcion que retornara numero o string
function sumarOConcatenar(): number | string {
   return 4 + "3";
}

// Funcion con parametros y Template string (``)
function saludar(nombre:string):string{
   return `Hola cómo estas? ${nombre}` //template string
}

console.log( saludar("Carlos"));
