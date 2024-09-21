/* EJERCICIO 1: 
Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario
*/

function calcularEdad() {
   let edad = prompt("Ingresa tu edad");

   // validacion
   if (edad <= 0 || isNaN(edad)) {
      return alert("ingresa una edad valida!");
   }
   edad >= 18 ? alert("Eres MAYOR de edad!") : alert("Eres MENOR de edad.");
}

/* 
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/

function calcularNota() {
   // Ingreso y validacion Nombre alumno
   let nombreAlumno = prompt("Ingresa tu nombre");
   if (nombreAlumno == "") {
      return alert("no puedes dejar el campo vacio");
   }

   // Ingreso y validacion carnet
   let carnetAlumno = prompt("Ingresa tu carnet");
   if (carnetAlumno == "") {
      return alert("no puedes dejar el campo vacio");
   }

   // Ingreso y validacion Nota examen
   let notaExamen = parseFloat(prompt("Ingresa la nota del Examen"));
   if (isNaN(notaExamen) || notaExamen < 0 || notaExamen > 10) {
      return alert("Ingresa un valor válido");
   }

   // Ingreso y validacion Promedio tareas
   let tareasPromedio = parseFloat(
      prompt("Ingresa la nota promedio de las tareas")
   );
   if (isNaN(tareasPromedio) || tareasPromedio < 0 || tareasPromedio > 10) {
      return alert("Ingresa un valor válido");
   }

   // Ingreso y validacion Asistencias
   let clasesAsistidas = parseInt(
      prompt("Ingresa la cantidad de clases asistidas")
   );
   let totalClases = parseInt(prompt("Ingresa la cantidad total de clases"));
   if (isNaN(clasesAsistidas) || isNaN(totalClases)) {
      return alert("Ingresa un valor válido");
   }

   // Ingreso y validacion nota investigacion
   let notaInvestigacion = parseFloat(
      prompt("Ingresa la nota de investigación")
   );
   if (
      isNaN(notaInvestigacion) ||
      notaInvestigacion < 0 ||
      notaInvestigacion > 10
   ) {
      alert("ingresa un valor valido");
   }

   //  calculo asistencia
   let asistencia = (clasesAsistidas / totalClases) * 10;

   // formula nota final
   let notaFinal =
      notaExamen * 0.2 +
      tareasPromedio * 0.4 +
      asistencia * 0.1 +
      notaInvestigacion * 0.3;

   // html a insertar
   let resultado = `
   <p><strong>nombre: </strong> ${nombreAlumno}</p>
   <p><strong>carnet: </strong> ${carnetAlumno}</p>
   <p>El resultado de la nota final es: ${notaFinal}</p>
   `;

   // seleccionamos elemento del DOM
   const divResultado = document.getElementById("resultadoNota");

   divResultado.innerHTML = resultado;
}

/* 
Ejercicio 3
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. Deberá demostrar los datos del empleado y el aumento salarial.
*/

function calcularSalario() {
   // declaramos variables
   let nombre;
   let salario = 0;
   let categoria;
   let aumento = 0;

   // solicitamos y validamos nombre
   nombre = prompt("Ingresa tu nombre");
   if (nombre == "") {
      return alert("Ingresa un valor valido");
   }

   // solicitamos y validamos salario
   salario = parseFloat(prompt("Ingresa tu salario"));
   if (salario == "" || isNaN(salario) || salario < 0) {
      return alert("Ingresa un valor valido");
   }

   // solicitamos y validamos categoria
   categoria = prompt(
      "¿A que categoria perteneces? (A, B, C, D)"
   ).toUpperCase();
   // calculamos aumento segun la categoria
   switch (categoria) {
      case "A":
         aumento = salario * 0.15;
         break;
      case "B":
         aumento = salario * 0.3;
         break;
      case "C":
         aumento = salario * 0.1;
         break;
      case "D":
         aumento = salario * 0.2;
         break;
      default:
         return alert("Ingresa un valor válido");
   }

   // Seleccionamos el elemento del dom
   let divResultadoSalario = document.getElementById("resultadoSalario");

   // inyectamos el resultado
   divResultadoSalario.innerHTML = `
   <p>Nombre Empleado: ${nombre}</p>
   <p>Salario: $ ${salario}</p>
   <p>Categoría: ${categoria}</p>
   <p>Aumento salarial: $ ${aumento.toFixed(2)}</p>
   `;
}

/*
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.
*/

function numeroMayor() {
   // declaramos variables
   let n1 = 0;
   let n2 = 0;

   // pedimos los numeros
   n1 = parseInt(prompt("Digita un numero Entero"));
   n2 = parseInt(prompt("Digita un segundo numero Entero"));

   // validamos la entrada de datos
   if (isNaN(n1) || isNaN(n2) || n1 == "" || n2 == "") {
      return alert("Digita un valor valido");
   }

   // validamos con operador ternario le mayor
   n1 > n2
      ? alert(`el numero mayor es: ${n1}`)
      : alert(`el numero mayor es: ${n2}`);
}

/*
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario.
*/

function aplicarDescuentoAuto() {
   let descuento = 0;
   let nombreAuto = "";

   // pedimos el dato
   let opcionAuto = prompt(
      `Digita el numero del auto: 
      (1) FORD FIESTA
      (2) FORD FOCUS     
      (3) FORD ESCAPE
      `
   );

   switch (opcionAuto) {
      case "1":
         descuento = 5;
         nombreAuto = "FORD FIESTA";
         break;
      case "2":
         descuento = 10;
         nombreAuto = "FORD FOCUS";
         break;
      case "3":
         descuento = 20;
         nombreAuto = "FORD ESCAPE";
         break;
      default:
         return alert("Selecciona una opcion valida");
   }

   let contenedorP = document.getElementById("resultado-auto");

   // agreamos texto al contenedor "p"
   contenedorP.innerText = `Coche seleccionado: ${nombreAuto} 
   Descuento: ${descuento}%`;

   // damos estilo al texto
   contenedorP.style.color = "red";
}

/* 
EJERCICIO 6:Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.
*/

function descuentoViaje() {
   let descuentoDestino = 0;
   let nombreDestino = "";

   let opcionDestino = prompt(`
    Digita el numero de destino:
   (1) La costa del Sol
   (2) Panchimalco
   (3) Puerto el Triunfo
   `);

   // validacion de entrada
   if (isNaN(opcionDestino) || opcionDestino == "") {
      return alert("Ingresa un valor valido");
   }

   switch (opcionDestino) {
      case "1":
         descuentoDestino = 5;
         nombreDestino = "La costa del Sol";
         break;
      case "2":
         descuentoDestino = 10;
         nombreDestino = "Panchimalco";
         break;
      case "3":
         descuentoDestino = 15;
         nombreDestino = "Puerto el Triunfo";
         break;
      default:
         return alert("Digita una opcion valida");
   }

   // mostramos el resultado
   alert(`Viaje turístico:
      Destino: ${nombreDestino}
      Descuento: ${descuentoDestino}%
      `);
}

/*
EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
*/

function identificarNumeros() {
   let numero = 0;
   let numPositivos = 0;
   let numNegativos = 0;
   let numMultiplos = 0;
   let acumuladoPares = 0;

   // iteramos 10 veces
   for (let i = 1; i <= 10; i++) {
      // pedimos el numero
      numero = parseInt(prompt("Digita un numero"));

      // validamos que sea un numero
      if (isNaN(numero)) {
         return alert("Digita un valor valido");
      }

      // validamos si es multiplo de 15
      if (numero % 15 == 0) {
         numMultiplos++;
      }

      // validamos los numeros pares
      if (numero % 2 == 0) {
         acumuladoPares += numero;
      }

      // validamos positivos y negativos
      if (numero >= 0) {
         numPositivos++;
      } else {
         numNegativos++;
      }
   }

   // seleccionamos elemento del dom
   let resultadoNumeros = document.getElementById("resultadoNumeros");

   // Mostramos el resultado
   resultadoNumeros.innerHTML = `
   <p>Cantidad de valores <strong>positivos</strong> ingresados: ${numPositivos}</p>
   <p>Cantidad de valores <strong>negativos</strong> ingresados: ${numNegativos}</p>
   <p>Cantidad de <strong>múltiplos</strong> de 15 ingresados: ${numMultiplos}</p>
   <p>Valor acumulado de los números <strong>pares:</strong> ${acumuladoPares}</p>
   `;
}

/*
EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.
*/

function tablaMultiplicar() {
   // variable para calcular multiplicacion
   let result = 0;

   // accedemos al valor ingresado en el input
   let numTabla = parseInt(document.getElementById("input-numero").value);

   // seleccionamos el elemento del html
   let resultadoTablaDiv = document.getElementById("resultadoTablaMult");

   // variable para mostrar los resultados de la tabla
   let listaResultados = "<ul>";

   // Bucle para crear tabla multiplicar
   for (let i = 1; i <= 10; i++) {
      // multiplicamos
      result = numTabla * i;
      listaResultados += `<li>${numTabla} x ${i} = ${result}</li>`;
   }

   listaResultados += "</ul>";

   // inyectamos el resultado en el html
   resultadoTablaDiv.innerHTML = listaResultados;
}

/*
EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/

function calcularTemperatura() {
   let tempCelcius = 0;
   let tempFahrenheit = 0;

   // pedimos el dato
   tempCelcius = parseInt(prompt("introduce una temperatura en Celsius"));

   if (isNaN(tempCelcius) || tempCelcius == "") {
     return alert("Digita un valor valido");
   }

   // hacemos la conversion de C° a F°
   tempFahrenheit = (tempCelcius * 9) / 5 + 32;

   if (tempFahrenheit > 68 && tempFahrenheit <= 96) {
      alert(
         `Temperatura alta: ${tempFahrenheit} °F
         `
      );
   } else if (tempFahrenheit > 32) {
      alert(
         `Temperatura adecuda: ${tempFahrenheit} °F
         `
      );
   } else if (tempFahrenheit >= 14) {
      alert(
         `Temperatura baja: ${tempFahrenheit} °F
         `
      );
   } else {
      alert(
         `Temperatura desconocida: ${tempFahrenheit} °F
         `
      );
   }
}

/*
EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
*/

function calcularPromedioEdad() {
   let edad = 0;
   let edadesTurnM = 0;
   let edadesTurnT = 0;
   let edadesTurnN = 0;
   let promTurnM = 0;
   let promTurnT = 0;
   let promTurnN = 0;

   // edades turno mañana
   for (let i = 1; i <= 5; i++) {
      //pedimos las edades (5)
      edad = parseInt(
         prompt(`Digita edades de 5 estudiantes del turno MAÑANA (${i})`)
      );
      if (isNaN(edad) || edad == "") {
         return alert("Ingresa un valor valido!");
      } else {
         // acumulamos las edades turno mañana
         edadesTurnM += edad;
      }
   }
   promTurnM = edadesTurnM / 5; //promedio mañana

   // edades turno tarde
   for (let i = 1; i <= 6; i++) {
      // pedimos las edades (6)
      edad = parseInt(
         prompt(`Digita edades de 6 estudiantes del turno TARDE (${i})`)
      );
      // validamos lo que se ingresó
      if (isNaN(edad) || edad == "") {
         return alert("Ingresa un valor valido!");
      } else {
         // Acumulamos las edades turno tarde
         edadesTurnT += edad;
      }
   }
   promTurnT = edadesTurnT / 6; //promedio tarde

   // edades turno noche
   for (let i = 1; i <= 11; i++) {
      //pedimos las edades (11)
      edad = parseInt(
         prompt(`Digita edades de 11 estudiantes del turno NOCHE (${i})`)
      );
      if (isNaN(edad) || edad == "") {
         return alert("Digita un valo valido!");
      } else {
         // acumulasmos las edades turno noche
         edadesTurnN += edad;
      }
   }
   promTurnN = edadesTurnN / 11; //promedio noche

   // Seleccionamos el elemento html y mostramos resultado
   const resultadoDiv = (document.getElementById(
      "resultadoPromEdades"
   ).innerHTML = `
   <h4>Resultado:</h4>

   <p>El promedio de edad del turno Mañana es: ${promTurnM.toFixed(2)}</p>
   <p>El promedio de edad del turno Tarde es: ${promTurnT.toFixed(2)}</p>
   <p>El promedio de edad del turno Noche es: ${promTurnN.toFixed(2)}</p>
   `);

   // Mostramos el promedio mayor
   let promedioMayor = promTurnM;
   let turno = "Mañana";

   if (promTurnT > promedioMayor) {
      promedioMayor = promTurnT;
      turno = "Tarde";
   }
   if (promTurnN > promedioMayor) {
      promedioMayor = promTurnN;
      turno = "Noche";
   }

   alert(
      `El promedio de edad mayor es: ${promedioMayor.toFixed(2)} (${turno})`
   );
}
