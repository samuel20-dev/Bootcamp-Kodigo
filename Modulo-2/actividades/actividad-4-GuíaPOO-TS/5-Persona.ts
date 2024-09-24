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

abstract class Persona {
   // atributos
   protected nombre: string;
   protected apellido: string;
   protected direccion: string;
   protected telefono: number;
   protected edad: number;

   // Metodo constructor
   constructor(
      nombreParam: string,
      apellidoParam: string,
      direccionParam: string,
      telefonoParam: number,
      edadParam: number
   ) {
      this.nombre = nombreParam;
      this.apellido = apellidoParam;
      this.direccion = direccionParam;
      this.telefono = telefonoParam;
      this.edad = edadParam;
   }

   // Metodo para evaluar si es mayor de edad
   calcularEdad() {
      if (this.edad >= 18) {
         console.log("Eres MAYOR de edad");
      } else {
         console.log("Eres MENOR de edad");
      }
   }

   // Metodo abstracto para mostrar todos los datos personales
   abstract mostrarDatos(): void;
}

// Creamos la clase Extra (clase hija) Empleado

class Empleado extends Persona {
   // atributo
   private sueldo: number;

   constructor(
      nombreParam: string,
      apellidoParam: string,
      direccionParam: string,
      telefonoParam: number,
      edadParam: number,
      sueldoParam: number
   ) {
      // metodo super
      super(
         nombreParam,
         apellidoParam,
         direccionParam,
         telefonoParam,
         edadParam
      );
      this.sueldo = sueldoParam;
   }

   // Metodo para cargar sueldo
   cargarSueldo(sueldoParam: number) {
      if (sueldoParam < 0) {
         console.log("Ingresa un valor valido");
      }
      this.sueldo = sueldoParam;
   }

   // Metodo para mostrar sueldo
   mostrarSueldo() {
      return this.sueldo;
   }

   // utilizamos el metodo abstracto(aplicando polimorfismo)
   mostrarDatos(): void {
      console.log(`Datos personales:
      Nombre: ${this.nombre},
      Apellido: ${this.apellido} 
      Dirección: ${this.direccion} 
      Teléfono: ${this.telefono} 
      Edad: ${this.edad}
      Sueldo: ${this.sueldo}`);
   }
}

// creamos un objeto de la clase Empleado
let empleado1: Empleado = new Empleado(
   "Carlos",
   "Santos",
   "El Salvador",
   73441211,
   18,
   100
);

empleado1.cargarSueldo(200);
empleado1.mostrarDatos();
empleado1.calcularEdad();
