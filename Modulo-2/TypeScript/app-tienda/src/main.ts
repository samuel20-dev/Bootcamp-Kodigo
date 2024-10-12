import { Producto } from "./clases/Producto";
import { Tienda } from "./clases/Tienda";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Gestion de Tiendita</h1>
    
    <form id="formProducto">
       <section>
         <label>Nombre Producto</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre del producto">
       </section>

       <section>
         <label>Precio</label>
         <input type="text" id="precio" name="precio" placeholder="Ingresa el precio">
       </section>

        <section>
         <label>Cantidad</label>
         <input type="number" id="cantidad" name="cantidad" placeholder="Ingresa la cantidad">
       </section>

       <ul id="productsList">
       </ul>

       <button type="submit">Agregar Producto</button>
    </form>
  </div>
`;

/* seleccionamos el parrafo
 document.querySelector<HTMLElement>("#parrafo")!.innerText = "Esto es texto desde el p";
*/

// instanciamos la clase Tienda para manipular los productos
const tienda = new Tienda();

// Agarramos el elemento form
const formElemento = document.getElementById("formProducto") as HTMLFormElement;

const productList = document.getElementById("productsList") as HTMLUListElement;

formElemento.addEventListener("submit", (e: SubmitEvent) => {
   e.preventDefault();

   // creamos un id ramdom (para que no se repita)
   const id = Date.now();

   // seleccionamos los inputs y obtenemos los valores de los elementos
   const nombreInput = (document.getElementById("nombre") as HTMLFormElement)
      .value;
   const precioInput = parseFloat(
      (document.getElementById("precio") as HTMLFormElement).value
   );
   const cantidadInput = parseInt(
      (document.getElementById("cantidad") as HTMLFormElement).value
   );

   console.log(nombreInput);
   console.log(precioInput);
   console.log(cantidadInput);
   console.log(id);

   // Creamos un producto
   let productito = new Producto(id, nombreInput, precioInput, cantidadInput);
   console.log(productito);

   tienda.agregarProducto(productito);
   // refrescamos la lista con los productos
   renderProductos();
});

// funcion para que se muestre los productos al nomas cargar el main
function renderProductos() {

   // vaciamos la lista antes de llenarla para no duplicar la lista
   productList.innerHTML = "";

   tienda.listarProductos().map((producto: Producto) => {

      // creamos un elemento li por cada producto
      const productoItem = document.createElement("li");

      // muestre los datos
      productoItem.textContent = `
      Producto: ${producto.getNombre()} - 
      Stock: ${producto.getCantidad()} - 
      Precio: $${producto.getPrecio()}`;

      // agrega el li (hijo) a la lista ul
      productList.appendChild(productoItem);

   });
}
renderProductos();
