/* Realiza una función que reciba un array NUMÉRICO y retorne un array completamente nuevo solamente con los números que sean múltiplo de 3 y que la suma de todos sus números de menos de 100
 */

function multiploDeTres(arrNumerico) {
   let arrMultiplos = [];
   let sumaMultiplos = 0;

   for (let i = 0; i < arrNumerico.length; i++) {
      if (arrNumerico[i] % 3 == 0) {
         if (sumaMultiplos + arrNumerico[i] < 100) {
            arrMultiplos.push(arrNumerico[i]);
            sumaMultiplos += arrNumerico[i];
         } else {
            return arrMultiplos;
         }
      }
   }

}

let arrNumerico = [3, 6, 9, 12, 15, 18, 21, 24];
console.log(multiploDeTres(arrNumerico));



const btnApretable = document.getElementById('btnMagia')