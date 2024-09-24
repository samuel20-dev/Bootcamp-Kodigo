/*
EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
*/

class Calculadora {
   // Atributos
   n1: number;
   n2: number;

   // Constructor para incializar parametros
   constructor(n1Param: number, n2Param: number) {
      this.n1 = n1Param;
      this.n2 = n2Param;
   }

   // Metodo Sumnar
   sumar() {
      let suma: number = this.n1 + this.n2;
      console.log(`suma: ${suma}`);
   }

   // Metodo Restar
   restar() {
      let resta: number = this.n1 - this.n2;
      console.log(`resta: ${resta}`);
   }

   // Metodo Multiplicacion
   multiplicar() {
      let multiplicar: number = this.n1 * this.n2;
      console.log(`multiplicación: ${multiplicar}`);
   }

   // Metodo Dividir
   dividir() {
      let dividir: number = this.n1 / this.n2;
      console.log(`division: ${dividir}`);
   }

   // Metodo Potencia

   potencia(base: number, exponente: number) {
      let potencia: number = Math.pow(base, exponente);
      console.log(`potencia: ${potencia}`);
   }

   // Metod Factorial
   factorial(numFactorial: number) {
      let factorial: number = 1;

      for (let i = numFactorial; i > 0; i--) {
         factorial = factorial * i;
      }

      console.log(`factorial de ${numFactorial} es: ${factorial}`);
   }
}

let calculadora: Calculadora = new Calculadora(5, 8);
calculadora.sumar();
calculadora.restar();
calculadora.potencia(2, 3);
calculadora.factorial(5);
