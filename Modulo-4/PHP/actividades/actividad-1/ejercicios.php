
<?php
/*
1. Problema de la serie Fibonacci:
Escribe una función llamada generar Fibonacci que reciba un número n como parámetro y genere los primeros n términos de la serie Fibonacci. La serie comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores.
*/

function generarFibonacci($n)
{
   // comenzamos la serie con 0 y 1
   $a = 0;
   $b = 1;

   // mostramos los valores
   echo "{$a}, {$b}";

   // realizamos la suma para cada término subsiguiente
   for ($contador = 2; $contador < $n; $contador++) {
      $next = $a + $b;
      echo ", $next";

      // actulizamos los valores de a y b
      $a = $b;
      $b = $next;
   }
}
generarFibonacci(20);


/*
2. Problema de números Primos:
Crea una función llamada esPrimo que determine si un número dado es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo.
*/

function esPrimo($n)
{
   // hacemos la validacion si el numero NO es primo
   if ($n <= 1) {
      echo "El numero NO es primo";
      return;
   }

   // Si encontramos un divisor, NO es primo
   for ($i = 2; $i <= sqrt($n); $i++) {
      if ($n % $i == 0) {
         echo "El numero {$n} NO es primo";
         return;
      }
   }

   // Si no encontramos divisores, El numero es PRIMO
   echo "Es PRIMO";
}
esPrimo(4);

/*
3. Problema de Palíndromos:
Implementa una función llamada esPalindromo que determine si una cadena de texto dada es un palíndromo. Un palíndromo es una palabra, frase o secuencia que se lee igual en ambas direcciones.
*/

function esPalindromo($texto)
{
   // convertimos la cadena a minuscula
   $texto = strtolower($texto);

   // Validamos si la cadena de texto es igual en ambas direcciones.
   echo ($texto === strrev($texto))
      ? "Es palíndromo"
      : "NO es palíndromo";
}
// le pasamos el valor
esPalindromo("radar");
?>