
<?php

/*
1. Problema de Ordenar Lista con Bubble Sort:
Escribe un programa que ordene una lista de números de forma descendente utilizando el algoritmo Bubble Sort. La lista puede contener duplicados y valores negativos. Asegúrate de manejar estos casos y muestra la lista antes y después de aplicar el algoritmo.
*/

# Ordenar lista de forma descendente con Bubble Sort
function bubbleSort($arr)
{
   for ($i = 0; $i + 1 < count($arr); $i++) {
      #buble para ordenar los elementos en pares
      for ($j = 0; $j + 1 < count($arr); $j++) {
         #capturamos el valor actual
         $temp = $arr[$j];

         #comparamos el valor actual con el siguiente
         if ($arr[$j] < $arr[$j + 1]) {
            $arr[$j] = $arr[$j + 1];
            $arr[$j + 1] = $temp;
         }
      }
   }

   #retornamos el resultado
   return $arr;
}

$arr = [6, -2, 5, 3, 1, 1, 8, 2, 7, 2, 4];

echo "lista sin ordenar: \n";
print_r($arr);

echo "lista ordenada: \n";
print_r(bubbleSort($arr));


/*
2. Problema de Ordenar Lista con Merge Sort:
Implementa una función que ordene una lista de palabras alfabéticamente utilizando el algoritmo Merge Sort. Muestra la lista antes y después de aplicar el algoritmo.
*/

#funcion para dividir el array
function mergeSortList($arr)
{
   #condicion base
   if (count($arr) <= 1) {
      return $arr;
   }

   #sacamos la mitad del array
   $mid = floor(count($arr) / 2);

   $left = array_slice($arr, 0, $mid); # primera mitad
   $right = array_slice($arr, $mid); # segunda mitad

   #seguimos dividiendo el array de forma recursiva
   $left = mergeSortList($left);
   $right = mergeSortList($right);

   #le pasamos left y right a nuetra otra funcion
   return merge($left, $right);
}

# funcion para unir y ordenar string
function merge($left, $right)
{
   #array para guardar el resultado
   $resul = [];

   #repetimos mientras left y right tenga valores 
   while (count($left) > 0 && count($right) > 0) {
      #compara cadenas alfabéticamente
      if ($left[0] < $right[0]) {
         array_push($resul, array_shift($left));
      } else {
         array_push($resul, array_shift($right));
      }
   }

   #guardamos los valores restantes
   while (count($left) > 0) {
      array_push($resul, array_shift($left));
   }
   while (count($right) > 0) {
      array_push($resul, array_shift($right));
   }

   #retornamos el resultado
   return $resul;
}

// Prueba:
$palabras = ["pera", "almendra", "manzana", "uva", "banano", "fresa"];

echo "lista sin ordenar: \n";
print_r($palabras);

echo "lista en orden alfabético: \n";
print_r(mergeSortList($palabras));


/*
3. Problema de Ordenar Lista con Insertion Sort:
Crea un script que ordene una lista de nombres en orden alfabético utilizando el algoritmo Insertion Sort. Muestra la lista antes y después de aplicar el algoritmo.
 */


function insertionSort($arr)
{
   #validamos la entrada de datos
   if (count($arr) <= 1) return "debe contener mas valores";

   #bucle para recorrer hacia adelante
   for ($i = 1; $i < count($arr); $i++) {

      #tomamos el valor en posicion i
      $key = $arr[$i];

      #tomamos la posicion 0
      $j = $i - 1;

      #bucle para realizar ordenar alfabético
      while ($j >= 0 && $arr[$j] > $key) {
         #cambiamos la posicion
         $arr[$j + 1] = $arr[$j];

         #recorremos hacia atras
         $j--;
      }

      #nos posicionamos dentro del arr y asignamos el valor de key
      $arr[$j + 1] = $key;
   }

   #retornamos el resultado
   return $arr;
}

$lista_nombres = ['juan', 'alan', 'sara', 'beto', 'carlos', 'elmer'];

echo "lista sin ordenar: \n";
print_r($lista_nombres);

echo "lista en orden alfabético: \n";
print_r(insertionSort($lista_nombres));

?>