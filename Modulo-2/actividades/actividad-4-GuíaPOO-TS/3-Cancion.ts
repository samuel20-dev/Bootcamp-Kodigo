/*
EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción. 
*/

class Cancion {
   // atributos
   titulo: string;
   genero: string;
   private autor: string;

   // Metodo constructor
   constructor(tituloParam: string, generoParam: string) {
      this.titulo = tituloParam;
      this.genero = generoParam;
   }

   // Metodo get (imprimir autor)
   getAutor() {
      return this.autor;
   }

   // Metodo set (obtener autor)
   setAutor(autorParam: string): void {
      this.autor = autorParam;
   }

   // Metodo para mostrar datos de la cancion
   datosCancion() {
      console.log(
         `Datos cancion: Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`
      );
   }
}

// Creamos  objeto cancion
const cancion: Cancion = new Cancion("Bailando", "Salsa");
cancion.setAutor("Marc Antony");
cancion.datosCancion();
