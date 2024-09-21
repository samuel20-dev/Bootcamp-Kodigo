// Funcion para imprimir los elementos de un array
function recorrerArray(array) {
   // Validar que un array no este vacio para ahorrar recursos
   if (array.length == 0) {
      return "ingresa valores en el array";
   }

   for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
   }
}

let array = [1, 2, 3, 4, 5];
recorrerArray(array);

// Recorrer un array y devolver los numeros pares.

function numParesArray(arr) {
   let arrayPares= [];

   // Validamos si el array viene vacio
   if (arr.length == 0) {
      return arr; //devolvemos un array vacio
   }

   // Recorremos el array
   for (let i = 0; i < arr.length; i++) {
      // validamos si los numeros son pares
      if (arr[i] % 2 == 0) {
         arrayPares.push(arr[i]);
      }
   }
   return arrayPares;
}

let arraicito = [1, 2, 3, 4, 5, 6];
console.log(numParesArray(arraicito));