
<?php
//comentario de una linea 

/*
Comentario 
Multilinea 
*/


// Variables ($)

$count = 1;
$message = 'Hello, World!';

// Imprimir datos
echo "Holiwis \n";
print("Llegamos a PHP \n");

// Variables
$nombre = "carlos";
$apellido = 'fernandez';
$number = 12;
$boolean = true;
$decimal = 4.3; //tipo float

// Concatenar en PHP (.)
print($nombre . " " . $apellido . "\n");

// Operadores Matematicos
$suma = $number + $decimal;
$resta = $number - $decimal;
$multi = $number * $decimal;
$divi = $number / $decimal;
$residuro = $number % $decimal;

// Template String en PHP ("")
$template = "{$nombre} {$apellido} \n";
$template2 = "{$apellido} {$nombre} \n";
print($template);
print($template2);


// Operadores de comparacion (== , ===, > (mayor que), < (menor que))
$igualdad = 5 == '5';
$igualdadEstricta = 5 === 5;

$desigualdad = 5 != 4;
$desigualdadEstricta = 4 !== 4;

$mayorQue = 5 > 3;
$menorQue = 4 < 3;
$mayorOIgual = 3 >= 4;
$menorOIgual = 3 <= 4;

// Operadores Lógicos (AND &&, OR ||)

// Funciones
// funcion expresada (void)
function saludar()
{
   print('holiwis');
}
$resultado = saludar();
print($resultado);

// Funcion tipo Return
function despedir()
{
   return (
      "Chauchis \n"
   );
}
$resulta2 = despedir();
print("este es el resultado: $resulta2");


// Funcion anonima
$funcioncita = function () {
   print("Soy anonima");
};
$funcioncita();


// Funcion flecha
$flechita = fn() => (print('Soy una function anonima flechita'));
$flechita();
?>