/*
EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.
*/
var Cancion = /** @class */ (function () {
    // Metodo constructor
    function Cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
    }
    // Metodo get (imprimir autor)
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Metodo set (obtener autor)
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    // Metodo para mostrar datos de la cancion
    Cancion.prototype.datosCancion = function () {
        console.log("Datos cancion: T\u00EDtulo: ".concat(this.titulo, ", G\u00E9nero: ").concat(this.genero, ", Autor: ").concat(this.autor));
    };
    return Cancion;
}());
// Creamos  objeto cancion
var cancion = new Cancion("Bailando", "Salsa");
cancion.setAutor("Marc Antony");
cancion.datosCancion();
