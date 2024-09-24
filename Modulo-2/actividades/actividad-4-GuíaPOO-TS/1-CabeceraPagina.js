/*
EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.
*/
var CabeceraPagina = /** @class */ (function () {
    //Constructor para inicializar los atributos al crear el objeto
    function CabeceraPagina(tituloParam, colorParam, fuenteParam, alineacionParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
        this.alineacion = alineacionParam;
    }
    //Metodo 1: Permite asignar las propiedades de la fuente (titulo,color,fuente)
    CabeceraPagina.prototype.setPropiedades = function (tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    };
    // Metodo 2: Permite asignar la alineacion del titulo (centrado,derecha o izquierda)
    CabeceraPagina.prototype.setAlineacion = function (alineacionParam) {
        this.alineacion = alineacionParam;
    };
    // Metodo 3: Imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente, ", Alineacion: ").concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// creamos y asignamos los valores del objeto
var cabecera = new CabeceraPagina("hola mundo", "azul", "arial", "centrado");
cabecera.imprimirPropiedades();
