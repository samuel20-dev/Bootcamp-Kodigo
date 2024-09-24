/*
EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.
*/

class CabeceraPagina {
   // definimos los atributos
   titulo: string;
   color: string;
   fuente: string;
   alineacion: string;

   //Constructor para inicializar los atributos al crear el objeto
   constructor(
      tituloParam: string,
      colorParam: string,
      fuenteParam: string,
      alineacionParam: string
   ) {
      this.titulo = tituloParam;
      this.color = colorParam;
      this.fuente = fuenteParam;
      this.alineacion = alineacionParam;
   }

   //Metodo 1: Permite asignar las propiedades de la fuente (titulo,color,fuente)
   setPropiedades(
      tituloParam: string,
      colorParam: string,
      fuenteParam: string
   ) {
      this.titulo = tituloParam;
      this.color = colorParam;
      this.fuente = fuenteParam;
   }

   // Metodo 2: Permite asignar la alineacion del titulo (centrado,derecha o izquierda)
   setAlineacion(alineacionParam: string) {
      this.alineacion = alineacionParam;
   }

   // Metodo 3: Imprimir todas las propiedades
   imprimirPropiedades() {
      console.log(
         `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}, Alineacion: ${this.alineacion}`
      );
   }
}

// creamos y asignamos los valores del objeto
const cabecera = new CabeceraPagina("hola mundo", "azul", "arial", "centrado");
cabecera.imprimirPropiedades();
