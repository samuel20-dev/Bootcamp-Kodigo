/*
Cuatro pilares de POO:

- Herencia 
- Polimorfismo

- Encapsulamiento:
nos permite limitar el acceso a una claseo atraves de modificadores de acceso
- Abstraccion
*/

/*
1.Encapsuma
Modificadores de acceso:
- public -> accesible desde cualquier lugar
- private -> solamente es accesible dentro de la clase
- protected -> va tener acceso la misma clase y sus hijos.

2. Abstraccion
La abstraccion nos proporcion metodos con los que podemos interactuar con algo(propiedad / metodos) que este limitado de una clase.

Estos metodos de abstraccion son: Getters y Setters

3. Herencia
La herencia es basicamente copiar o heredar las cosas de otra clase (clase principal) a la subclase (clase hija). 

Para heredar de una clase padre utilizamos la palabra : "extends"

4. Polimorfismo
Este pilar necesita de la herencia, esto basicamente porque el polimorfismo son muchas formas de hacer las cosas. Esto para darle muchos comportamientos a un mismo metodo.
*/

class Personaa {
   // propiedades
   private name: string;
   private age: number;
   private dui: string;

   // constructor
   constructor(nameParam: string, ageParam: number, duiParam: string) {
      this.name = nameParam;
      this.age = ageParam;
      this.dui = duiParam;
   }

   // metodos - > acciones
   respirar() {
      console.log("uff uff");
   }

   // Getters (returnan) y Setters (asignan valores)

   // obtener el nombre
   getName(): string {
      // retornamos el valor
      return this.name;
   }

   getDui() {
      return this.dui;
   }

   getAge() {
      return this.age;
   }

   // Metodo para modificar edad
   setAge(ageParam: number) {
      //recibimos la edad
      this.age = ageParam; //asignamos el valor que recibimos al objeto.
   }
}

// objeto
let personita: Personaa = new Personaa("carlos", 13, "fdsf23e");

console.log(personita);

console.log(personita.getName());

// Clase heredada
class Developer extends Personaa {
   // propiedades
   private exp: number;
   private techSkills: string[]; //array con strings
   private softSkills: string[];
   private gitUser: string;
   private area: string;
   private projects: string[];

   // metodo constructor
   constructor(
      nameParam: string,
      ageParam: number,
      duiParam: string,
      expParam: number,
      techSkillsParam: string[],
      softSkillsParam: string[],
      gitUserParam: string,
      areaParam: string,
      projectsParam: string[]
   ) {
      super(nameParam, ageParam, duiParam); //metodo reservado
      this.exp = expParam;
      this.techSkills = techSkillsParam;
      this.softSkills = softSkillsParam;
      this.gitUser = gitUserParam;
      this.area = areaParam;
      this.projects = projectsParam;
   }

   // metodos de abstraccion (getters y setters)
   getArea() {
      return this.area;
   }

   // aplicando polimorfismo (reutilizar metodo)
   respirar(): void {
      console.log("sniff sniff");
      super.getName;
   }
}
// creamos un objeto de la subclase heredada
let developercito = new Developer(
   "Juan",
   34,
   "032241sd",
   4,
   ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "BOOTSTRAP"],
   ["Comunicacion efectiva", "proactivo", "Liderazco", "Autocritica"],
   "JuanGit123",
   "Backend Developer",
   ["APIS"]
);

// obtenemos la edad de Juan (Developercito), no la edad de la clase Persona.
developercito.getAge();

developercito.getAge();
