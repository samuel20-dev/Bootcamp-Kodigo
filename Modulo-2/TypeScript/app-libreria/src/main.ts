import { Libreria } from "./clases/Libreria";
import { Libros } from "./clases/Libros";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>Sistema de Libreria</h1>

  <form id='formLibreria'>

      <section>
         <label>Título</label>
         <input type="text" id='titulo' name='titulo'>
      </section>
      
      <section>
      <label>Autor</label>
      <input type="text" id='autor' name='autor'>
      </section>

      <section>
      <label>Precio</label>
      <input type="number" id='precio' name='precio'>
      </section>

      <section>
      <label>Cantidad</label>
      <input type="number" id='cantidad' name='cantidad'>
      </section>

      <ul id='listaLibrosUl'></ul>


      <button type="submit">Guardar Libro</button>
  
  </form>
  </div>
`;
const libreria = new Libreria();

const listaLibrosUl = document.getElementById(
   "listaLibrosUl"
) as HTMLUListElement;

const formElement = document.getElementById("formLibreria") as HTMLFormElement;


formElement.addEventListener("submit", (e: SubmitEvent) => {
   e.preventDefault();

   const idRandom = Date.now();

   const titulo = (document.getElementById("titulo") as HTMLFormElement).value;
   console.log(titulo);

   const autor = (document.getElementById("autor") as HTMLFormElement).value;

   const precio = (document.getElementById("precio") as HTMLFormElement).value;

   const cantidad = (document.getElementById("cantidad") as HTMLFormElement)
      .value;

   let libro = new Libros(idRandom, titulo, autor, precio, cantidad);

   libreria.guardarLibro(libro);

   console.log(libreria.listarLibros());

   renderLibros();
});

function renderLibros() {
   listaLibrosUl.innerHTML = "";

   libreria.listarLibros().map((libro: Libros) => {
      const libroItem = document.createElement("li");

      libroItem.textContent = `
      Titulo: ${libro.getTitulo()}
      Autor: ${libro.getAutor()}
      Precio: ${libro.getPrecio()}
      Cantidad: ${libro.getCantidad()}
      `;

      listaLibrosUl.appendChild(libroItem);
   });
}

renderLibros();
