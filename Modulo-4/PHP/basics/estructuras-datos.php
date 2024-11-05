<?php

// Estructuras de datos 
// Arrays

// Declaraciones de array
$array = new ArrayObject(); //constructor de array
$array = array(); //declaracion a traves de un metodo

// Metodos de array
// Ingresa datos en un array
$array2 = []; //declaracion de array literal

// Ingresar datos sin utilizar metodos
$array2[] = "c";

// Ingresar en la ultima posicion de un array
array_push($array2, 5);
array_push($array2, "carlos");

// Eliminar la ultima posicion de un array
array_pop($array2);

// Ingresar en la primera posicion
array_unshift($array2, 'samuel');
array_unshift($array2, 20);

// Eliminar la primera posicion
array_shift($array2);

// Sirve para saber el tamaño de un array
echo count($array2);

// Array asociativo
$arrayzote = ["nombre" => 'carlos', "apellido" => "Fer"];
print_r($arrayzote);
print(count($arrayzote));

// traer la primera clave de un array asociativo
print_r(array_key_first($arrayzote));

// traer la ultima clave de un array asociativo
print_r(array_key_last($arrayzote));

// Traer el valor de una clave 
print_r($arrayzote[array_key_last($arrayzote)] . "\n");

// buscar si existe una llave 
print_r(array_key_exists('nombre', $arrayzote) . " \n");

// Imprimir un array (print_r)
print_r($array2);



// Clases y objetos

class Persona
{

   // Propiedades - atributos
   public $nombre;
   public $edad;

   // Constructor
   function __construct($nombreParam, $edadParam)
   {
      $this->nombre = $nombreParam;
      $this->edad = $edadParam;
   }

   // Metodos (funciones)
   function saludar($nombre)
   {
      return ("hola {$nombre}");
   }
}

// Creamos instancia de la clase
$personita = new Persona('carlos', 22);
print_r($personita);
print($personita->nombre . "\n");
print($personita->saludar("Samuel"));



// Estructura de datos  (pilas y colas)

// stack (pilas) -> LIFO

class Pila
{
   public $stack;

   // constructor que inicia un array vacio
   function __construct()
   {
      $this->stack = [];
   }

   // metodos 
   function add($value)
   {
      array_push($this->stack, $value);
   }

   // Eliminar la ultima posicion
   function delete()
   {
      array_pop($this->stack);
   }
}

$pilaRopa = new Pila();
$pilaRopa->add("camisa");
$pilaRopa->add("Centro");
$pilaRopa->add("pantalon");
$pilaRopa->delete();
print_r($pilaRopa);


// Fifo (first in first out)

class Queue
{
   public $queue;

   function __construct()
   {
      $this->queue = array();
   }

   // Metodo para agregar
   function enqueue($value)
   {
      array_push($this->queue, $value);
   }

   // Metodo para eliminar
   function dequeue()
   {
      return  array_shift($this->queue);
   }
}

$queuecito = new Queue();
$queuecito->enqueue("Hola mundo");
$queuecito->enqueue("php");
$queuecito->enqueue("js");
print_r("dato eliminado: {$queuecito->dequeue()} \n");
print_r($queuecito);


class Nodo
{

   public $value;
   public $next;

   function __construct($valueParam)
   {
      $this->value = $valueParam;
      $this->next = null;
   }
}

class ListaEnlazada
{
   public $head;

   function __construct()
   {
      $this->head = null;
   }

   // Insertar los nodos
   function insert($data)
   {
      $newNodo = new Nodo($data);

      if ($this->head === null) {
         // asignamos el nodo a la cabeza de la lista
         $this->head = $newNodo;
      } else {
         // Variable axuliar donde guardaremos el nodo
         $aux = $this->head;

         // creamos un bucle para que pase al nodo siguiente si next es distinto de null
         while ($aux->next !== null) {
            $aux = $aux->next;
         }

         // si ya existe un nodo, entonces el siguiente nodo lo guardamos en el valor "next".
         $aux->next = $newNodo;
      }
   }
}


$listita = new ListaEnlazada();
$listita->insert(4);
$listita->insert(10);
$listita->insert(100);
print_r($listita);
