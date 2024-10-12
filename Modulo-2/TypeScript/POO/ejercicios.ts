// EJERCICIO PARA PRACTICAR 1

class Animal {
   private nombre: string;

   constructor(nombreParam: string) {
      this.nombre = nombreParam;
   }

   comer() {
      console.log("estoy comiendo");
   }

   dormir() {
      console.log("estoy durmiendo");
   }
}

// clase hija
class Perro extends Animal {
   comer(): void {
      console.log("estoy comiendo croquetas");
   }
}

// clase hija
class Gato extends Animal {
   // sobreescribimos metodo comer
   comer(): void {
      console.log("estoy comiendo pescado");
   }
}

// creamos objeto de tipo lista
let animales: Animal[] = [new Perro("Lester"), new Gato("Michi")];

// rrecorremos los metodos del array de las instancias
animales.forEach((animal) => {
   animal.comer();
   animal.dormir();
});

// EJERCICIO PARA PRACTICAR 2

abstract class Vehiculo {
   private marca: string;

   constructor(marcaParam: string) {
      this.marca = marcaParam;
   }

   // metodos para acceder y modificar la marca
   getMarca() {
      return this.marca;
   }

   setMarca(marcaParam: string) {
      this.marca = marcaParam;
   }

   // metodo abstracto
   abstract mover(): void;
}

// clase heredad
class Carro extends Vehiculo {
   mover(): void {
      console.log(`EL carro marca ${this.getMarca()}, se mueve`);
   }
}

// clase heredada
class Moto extends Vehiculo {
   // damos accion al metodo abstracto
   mover(): void {
      console.log(`La moto marca ${this.getMarca()}, se mueve`);
   }
}

// array de tipo vehiculo (que contendrá instancias)
let vehiculos: Vehiculo[] = [new Carro("Toyota"), new Moto("Ninja")];

// recorremos los metodos de las instancias con foreach
vehiculos.forEach((vehiculo) => {
   vehiculo.mover();
});

// EJERCICIO PARA PRACTICAR 3

class Producto {
   private nombre: string;
   private precio: number;
   private cantidad: number;
   private categoria: string;

   // metodo constructor
   constructor(
      nombreParam: string,
      precioParam: number,
      cantidadParam: number,
      categoriaParam: string
   ) {
      this.nombre = nombreParam;
      this.precio = precioParam;
      this.cantidad = cantidadParam;
      this.categoria = categoriaParam;
   }

   // metodos para acceder o modificar propiedades (abstraccion)
   getNombre() {
      return this.nombre;
   }
   getPrecio() {
      return this.precio;
   }
   getCategoria() {
      return this.categoria;
   }

   // metodo
   informarDetalles() {
      console.log(
         `Producto ${this.getNombre()}, Precio: ${this.getPrecio()}, Categoria: ${this.getCategoria()}`
      );
   }
}

// objeto
let producto = new Producto("Celular", 200, 2, "Tecnolocia");

producto.informarDetalles();

// clase heredad

class Electrodomestiso extends Producto {
   private garantia: number;

   constructor(
      nombreParam: string,
      precioParam: number,
      cantidadParam: number,
      categoriaParam: string,
      garantiaParam: number
   ) {
      super(nombreParam, precioParam, cantidadParam, categoriaParam);
      this.garantia = garantiaParam;
   }
}
