// EJERCICIO PARA PRACTICAR 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nombreParam) {
        this.nombre = nombreParam;
    }
    Animal.prototype.comer = function () {
        console.log("estoy comiendo");
    };
    Animal.prototype.dormir = function () {
        console.log("estoy durmiendo");
    };
    return Animal;
}());
// clase hija
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.comer = function () {
        console.log("estoy comiendo croquetas");
    };
    return Perro;
}(Animal));
// clase hija
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // sobreescribimos metodo comer
    Gato.prototype.comer = function () {
        console.log("estoy comiendo pescado");
    };
    return Gato;
}(Animal));
// creamos objeto de tipo lista
var animales = [new Perro("Lester"), new Gato("Michi")];
// rrecorremos los metodos del array de las instancias
animales.forEach(function (animal) {
    animal.comer();
    animal.dormir();
});
// EJERCICIO PARA PRACTICAR 2
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marcaParam) {
        this.marca = marcaParam;
    }
    // metodos para acceder y modificar la marca
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marcaParam) {
        this.marca = marcaParam;
    };
    return Vehiculo;
}());
// clase heredad
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.mover = function () {
        console.log("EL carro marca ".concat(this.getMarca(), ", se mueve"));
    };
    return Carro;
}(Vehiculo));
// clase heredada
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // damos accion al metodo abstracto
    Moto.prototype.mover = function () {
        console.log("La moto marca ".concat(this.getMarca(), ", se mueve"));
    };
    return Moto;
}(Vehiculo));
// array de tipo vehiculo (que contendrá instancias)
var vehiculos = [new Carro("Toyota"), new Moto("Ninja")];
// recorremos los metodos de las instancias con foreach
vehiculos.forEach(function (vehiculo) {
    vehiculo.mover();
});
// EJERCICIO PARA PRACTICAR 3
var Producto = /** @class */ (function () {
    // metodo constructor
    function Producto(nombreParam, precioParam, cantidadParam, categoriaParam) {
        this.nombre = nombreParam;
        this.precio = precioParam;
        this.cantidad = cantidadParam;
        this.categoria = categoriaParam;
    }
    // metodos para acceder o modificar propiedades (abstraccion)
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.getCategoria = function () {
        return this.categoria;
    };
    // metodo
    Producto.prototype.informarDetalles = function () {
        console.log("Producto ".concat(this.getNombre(), ", Precio: ").concat(this.getPrecio(), ", Categoria: ").concat(this.getCategoria()));
    };
    return Producto;
}());
// objeto
var producto = new Producto('Celular', 200, 2, 'Tecnolocia');
producto.informarDetalles();
