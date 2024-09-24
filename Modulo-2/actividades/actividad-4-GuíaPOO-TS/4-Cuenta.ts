/*
EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:

Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.

Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienesque restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos
*/

class Cuenta {
   // atributos
   private nombre: string;
   private cantidad: number;
   private tipoDeCuenta: string;
   private numeroCuenta: number;

   // Metodo constructor
   constructor(
      nombreParam: string,
      cantidadParam: number,
      tipoDeCuentaParam: string,
      numeroCuentaParam: number
   ) {
      this.nombre = nombreParam;
      this.cantidad = cantidadParam;
      this.tipoDeCuenta = tipoDeCuentaParam;
      this.numeroCuenta = numeroCuentaParam;
   }

   // Metodo depositar
   depositar(cantidadParam: number) {
      if (cantidadParam < 5) {
         console.log(`el valor a depositar debe ser mayor a $5.00`);
      } else {
         this.cantidad += cantidadParam;

         console.log(
            `se ha depositado correctamente la cantidad: $${cantidadParam}, tu nuevo saldo es: $${this.cantidad}`
         );
      }
   }

   // Metodo retirar
   retirar(valorParam: number) {
      // validamos que hay saldo en la cuenta
      if (this.cantidad === 0) {
         console.log("No hay nada en la cuenta");
         return;
      }
      // validamos que el retiro sea mayor a $5
      if (valorParam <= 5) {
         console.log("El valor a retirar debe ser mayor a $5.00");
         return;
      }

      //   validamos si la cantidad es suficiente para retirar el valor solicitado
      if (valorParam > this.cantidad) {
         console.log("No cuentas con la cantidad suficiente");
      } else {
         this.cantidad -= valorParam;
         console.log(
            `Haz retirado: $${valorParam}, tu nuevo saldo es: $${this.cantidad}`
         );
      }
   }

   // Metodo para mostrar los detalles de la cuenta
   mostrarDatos() {
      console.log(
         `Datos de la cuenta - Nombre: ${this.nombre}, Tipo de cuenta: ${this.tipoDeCuenta}, Numero cuenta: ${this.numeroCuenta}`
      );
   }
}

let cuentita = new Cuenta("carlos", 5, "ahorro", 212332);
cuentita.depositar(10);
cuentita.retirar(6);
cuentita.mostrarDatos();
