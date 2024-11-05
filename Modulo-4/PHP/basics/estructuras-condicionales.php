<?php

// Estructuras condicionales (if, else if)
$condicion = false;
if ($condicion) {
   print('caso True');
} else {
   print("caso False \n");
}

$opcion = 1;

switch ($opcion) {
   case 1:
      print('opcion 1');
      break;

   default:
      print('opcion no valida');
}

// Operador ternario 
$ternario = 5 > 3 ? print('es mayor') : print('es menor');
print($ternario);
