// Programacion Orientada a Objetos (POO)
// conceptos principales de POO -> Clases y Objetos
// Clases: es basicamente crear un molde para luego crear algo (objeto)
// objeto: Es basicamente crear algo en base a el molde (clase)

// Declaracion de clases

class Auto {
   // caracteristicas generales -> propiedas o atributos
   numChasis: number;
   motor: string;
   color: string;
   transmicion: string;
   cantKilometraje: string;
   modelo: string;
   anioFab: number;

   // Metodo constructor - instanciar objetos (se ejecutara al momento de crear objetos)
   constructor(
      numChasisParam: number,
      motorParam: string,
      colorParam: string,
      cantKilometrajeParam: string,
      modeloParam: string,
      anioFabParam: number
   ) {
      this.numChasis = numChasisParam;
      this.motor = motorParam;
      this.transmicion = colorParam;
      this.cantKilometraje = cantKilometrajeParam;
      this.modelo = modeloParam;
      this.anioFab = anioFabParam;
   }

   // Metodos -> Acciones
   encender(): void {
      //void - no devolverá ningun valor
      console.log("Run Ruun");
   }

   apagar(): void {
      console.log("off off");
   }
}

// instanciar -> crear un objeto a partir de una clase

let autito: Auto = new Auto(0o124, "v8", "red", "21km", "honda", 2024);
console.log(autito);

// le asignamos un valo a nuestra propiedad del objeto
autito.motor = "v7";

console.log(autito);

