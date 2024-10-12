export class Libros {
   private id: number;
   private titulo: string;
   private autor: string;
   private precio: number;
   private cantidad: number;

   getId(): number {
      return this.id;
   }

   getTitulo(): string {
      return this.titulo;
   }

   getAutor(): string {
      return this.autor;
   }

   getPrecio(): number {
      return this.precio;
   }

   getCantidad(): number {
      return this.cantidad;
   }

   constructor(
      idParam: number,
      tituloParam: string,
      autorParam: string,
      precioParam: number,
      cantidadParam: number
   ) {
      this.id = idParam;
      this.titulo = tituloParam;
      this.autor = autorParam;
      this.precio = precioParam;
      this.cantidad = cantidadParam;
   }
}
