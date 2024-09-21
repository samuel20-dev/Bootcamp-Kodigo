// Estructuras de control -> Condicionales

// IF

if (10 == "10") {
   console.log("ESTE CODIGO SE EJECUTA EN CASO TRUE");
} else {
   console.log("ESTE CODIGO SE EJECUTA EN CASO FALSE");
}

if (10 < 20) {
   console.log("Verdad");
} else {
   console.log("No lo es");
}

// operador ternario (reemplazo de sintaxis para if else
// sintaxis: condicion ? codigo true : codigo false

10 <= 10 ? console.log("afirmativo") : console.log("Negativo");

// condicional if else if

let numero = 10;

if (numero < 10) {
   console.log("afirmativo");
} else if (numero > 5) {
   console.log("Si es mayor");
} else {
   console.log("No cumple ninguna");
}

// Operador OR ||

if (10 == "10" || 10 === 10) {
   console.log("Verdad");
} else {
   console.log("No cumple");
}

// Metodo trim()
let email = " saymonlenny@gmail.com ";

if ("saymonlenny@gmail.com" == email.trim()) {
   console.log("Coinside");
} else {
   console.log("Error");
}

// Bucles - Estructuras repetitivas

// While (mientras)

// numero del 1 - 10
let n = 1;
let suma = 0;
while (n <= 20) {
   if (n % 2 == 0) {
      suma += n;
   }
   n++;
}
console.log("la suma total es: " + suma);

// Do While

let num = 1;

do {
   console.log(num);
   num++;
} while (num < 10 && num >= 2);

// Array

let alumno = ["carlos", 23, true, false, "hola"];
console.log(alumno);

// Acceder a un elemento de un array por su indice
console.log(alumno[0]);

// añadir un elemento al final de un array
alumno.push("Fernandez");
// verificamos el nuevo valor
console.log(alumno);

// let estudiante = [];
estudiante.push(true);
estudiante.push(10);
console.log(estudiante);

// Eliminar el ultimo elemento de una lista.
estudiante.pop();
console.log(estudiante);

// Añadir un elemento al principio de un array
let estudiante = [];
let nuevaLongitud = estudiante.unshift("Fresa");
estudiante.unshift("Melon");
console.log(estudiante);

// practica: Escribe un programa que recorra un array de números e imprima cada uno de ellos en la consola.

// let listaNumeros = [23,1,3,5,6,22,12,44];

// for (let i = 0; i < listaNumeros.length; i++){
//    // imprimir cada elemento del array.
//    console.log(listaNumeros[i]);
// }

// Crear una copia de una array
// Suma de los elementos de un array
// let listaNumeros = [23, 1, 3, 5, 6, 22, 12, 44];
// let copiaArray = listaNumeros.slice();
// let sumaArray = 0;

// for(let i = 0; i < copiaArray.length; i++){
//    sumaArray+= copiaArray[i];
//    console.log(sumaArray);
// }

// practica:  Encontrar el número máximo

let numeros = [1, 2, 5, 6, 4, 12, 35, 64, 100];
let maximo = numeros[0];

for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] > maximo) {
      maximo = numeros[i];
   }
}
console.log(maximo);
