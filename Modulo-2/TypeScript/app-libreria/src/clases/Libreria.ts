import { Libros } from "./Libros";

export class Libreria {
   private listaDeLibros: Libros[] = [];

   constructor() {
      const listaLibrosLocalStorage = JSON.parse(
         localStorage.getItem("libros") || "[]"
      );

      this.listaDeLibros = listaLibrosLocalStorage.map(
         (libro: Libros) =>
            new Libros(
               libro.id,
               libro.titulo,
               libro.autor,
               libro.precio,
               libro.cantidad
            )
      );
   }

   guardarLibro(libroParam: Libros) {
      this.listaDeLibros.push(libroParam);
      this.refrescarLocalStorage();
   }

   refrescarLocalStorage() {
      localStorage.setItem("libros", JSON.stringify(this.listaDeLibros));
   }

   listarLibros() {
      return this.listaDeLibros;
   }
}
