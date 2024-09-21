console.log("Estoy andando");

// agarrar un elemento del DOM (id)
let elementoDom = document.getElementById('texto-saludo');

// vemos que nos esta arrojando
console.log(elementoDom);

// Va a extraer todo el contenido html de la etiqueta
console.log(elementoDom.innerHTML);

// innerTExt nos permite acceder al contenido de texto de la etiqueta
console.log(elementoDom.innerText);

// cambiamos el texto del elemento con la propiedad innerText
elementoDom.innerText = "Te cambié desde el JS";
console.log(elementoDom.innerHTML);

// asignar html y texto.
elementoDom.innerHTML = "<span>Cambié otra vez</span>";
console.log(elementoDom.innerHTML);

// agarrar otro elemento del html
const contenido = document.querySelector('#content')

console.log(contenido);

// Agregar un h1 dentro del contenedor
contenido.innerHTML = '<h1>agregando titulo desde el JS</h1>';


// seleccionamos el boton del html
const btnMagia = document.querySelector('#btn-magia');


// Evento addEventListener tipo (click): queda escuchando un evento y ejecuta el evento.
btnMagia.addEventListener('click', () => {
   alert("Acepta los terminos");
   console.log("despues del alert.");
});


// Evento tipo "focus" addEventListerner: Se ejecuta cuando pasa el cursor en un contenedor

const containerDiv = document.getElementById("container"); //agarramos el div

containerDiv.addEventListener('focus', () => {
   containerDiv.style.color = "red";
})


// funcion con alert

function apretandoBoton(){
   let nombre = prompt("Ingresa tu nombre");
   alert("hola" + " " + nombre);
}

// funcion sumar 

function sumarNumeros (){
   let n1 = prompt("Ingresa un numero");
   let n2 = prompt("Ingresa un segundo numero");

   let suma = parseInt(n1) + parseInt(n2); //convertimos de string a entero

   alert("la suma es: " + suma);
}

// funcion cambiando input
function cambiandoInput(e){
   console.log("cambié ");
   console.log(e.target.value);
}