
<?php

#----------------EJERCICIOS DE LÓGICA--------------

/*
1.  Problema de Lista Invertida:
Escribe un programa que tome un array de números y devuelva una nueva lista que contenga los mismos elementos en orden inverso.
*/

#declaramos la lista
$my_array = [1, 2, 3, 4, 5];

#invertimos el orden de los valores del array.
$reversed = array_reverse($my_array);

#devolvemos la nueva lista con el orden inverso.
print_r($reversed);


/*
2. Problema de Suma de Números Pares:
Crea un script que sume todos los números pares en un array de números enteros.
*/

#Declaramos variable para obtener el total de la suma.
$total_suma = 0;

#Declaramos el array con numeros enteros 
$array = [1, 2, 3, 6, 8, 34, 23, 46, 28, 20, 22, 32, 21];

#Creamos un bucle para recorrer la lista
for ($i = 0; $i < count($array); $i++) {
   #validamos si el número es par
   if ($array[$i] % 2 === 0) {
      # realizamos la sumatoria de los numeros pares
      $total_suma += $array[$i];
   }
}

#Mostramos el total de la suma de los numeros pares.
print "El total de la suma de los números pares es: $total_suma";


/*
3. Problema de Frecuencia de Caracteres:
Implementa una función que tome una cadena de texto y devuelva un array asociativo que muestre la frecuencia de cada carácter en la cadena.
*/

#declaramos la funcion
function frecuenciaCaracteres($cadena_texto)
{
   #convertimos la cadena de texto en un array
   $array_str = str_split($cadena_texto);

   #generamos el array asociativo con su value y frecuencia.
   print_r(array_count_values($array_str));
}
// le pasamos la cadena a la funcion
frecuenciaCaracteres("abcdefabcdedefg");



/*
4. Problema de Bucle Anidado:
Escribe un programa que utilice bucles anidados para imprimir un patrón de asteriscos en forma de pirámide.
*/

$altura_piramide = 5;

# bucle para manejar las filas de la piramide
for ($i = 1; $i <= $altura_piramide; $i++) {

   # bucle para imprimir los espacios
   # los espacios serann la altura menos numero de fila.
   for ($j = 1; $j <= $altura_piramide - $i; $j++) {
      echo " ";
   }

   # bucle para imprimir los asteriscos
   # el numero de asteriscos van 2 por cada fila
   for ($a = 1; $a <= 2 * $i - 1; $a++) {
      echo "*";
   }

   # hacemos salto de linea despues de cada fila.
   echo "\n";
}
?>

