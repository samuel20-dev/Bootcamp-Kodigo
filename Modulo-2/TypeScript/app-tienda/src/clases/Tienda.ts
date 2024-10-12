// administrar todos los productos creados

import { Producto } from "./Producto";

export class Tienda {
   private listaProductos: Producto[] = [];

   constructor() {
      // vemos si hay algo en el localstorage y lo guarde
      // Sino encuentra nada, que nos devuelva un array vacio
      const productosLocalStorage = JSON.parse(
         localStorage.getItem("productos") || "[]"
      );

      // Reconvertir los datos que tenemos en el localStorage a instancias de producto
      this.listaProductos = productosLocalStorage.map(
         (producto: Producto) =>
            new Producto(
               producto.id,
               producto.nombre,
               producto.precio,
               producto.cantidad
            )
      );
   }

   agregarProducto(producto: Producto) {
      this.listaProductos.push(producto);
      // despues de guardarlo en el array, lo actualizamos en el localstorage
      this.refrescarLocal();
   }

   /*
      Guardamos todos los productos del array, dentro del localStorage
   */
   refrescarLocal() {
      // Este guardado lo que hace es actualizar la lista de productos en el locaSto
      localStorage.setItem("productos", JSON.stringify(this.listaProductos));
   }

   //Metodo para traer los productos del localstorage
   listarProductos() {
      return this.listaProductos;
   }
}
