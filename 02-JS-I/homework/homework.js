// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 62;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {

    return str;// "Return" la string provista: str
    
    
}
devolverString("robert");

function suma(x, y) {
  
   var suma= x+y;// "x" e "y" son números
   return suma; // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}
suma(8,4);

function resta(x, y) {
   var resta= x+y; // Resta "y" de "x" y devuelve el valor
   return resta; // Tu código:
  
}
resta(47,22);

function multiplica(x, y) {
   var multiplica= x*y;// Multiplica "x" por "y" y devuelve el valor
   return multiplica;// Tu código:
  
}
multiplica(85,14);

function divide(x, y) {
   var divide= x/y;// Divide "x" entre "y" y devuelve el valor
   return divide;// Tu código:
  
}
divide(4,2);

function sonIguales(x, y) {
   if (x===y) { // Devuelve "true" si "x" e "y" son iguales
    return true;
   }
   else{
    return false // De lo contrario, devuelve "false"
          // Tu código:
    }
    sonIguales(24,24)
  }

function tienenMismaLongitud(str1, str2) {
   if (str1===str2) {// Devuelve "true" si las dos strings tienen la misma longitud
    return true;
   }

   return false// De lo contrario, devuelve "false"
  // Tu código:
}
tienenMismaLongitud(4,2);

function menosQueNoventa(num) {
   if (num<90) {
    return true;
   }// Devuelve "true" si el argumento de la función "num" es menor que noventa
  
   return false; // De lo contrario, devuelve "false"
  // Tu código: 
}
menosQueNoventa(50);

function mayorQueCincuenta(num) {
   if (num>50) {
    return true;
   }// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
   return false;// De lo contrario, devuelve "false"
  // Tu código:
  
}
mayorQueCincuenta(60);

function obtenerResto(x, y) {
   var resto= x%y; // Obten el resto de la división de "x" entre "y"
   return resto; // Tu código:
}
obtenerResto(8,6);


function esPar(num) {
  var par= num%2;
   if (par==0) {
    return true;
   }// Devuelve "true" si "num" es par
   else{
    return false;// De lo contrario, devuelve "false"
   }// Tu código:
  
}
esPar(6);

function esImpar(num) {
   var impar=num%2// Devuelve "true" si "num" es impar
   if (impar==1) {
    return true;
   } 
   else {
    return false;
   }// De lo contrario, devuelve "false"
  // Tu código:
  
}
esImpar(9);

function elevarAlCuadrado(num) {
   var result=Math.pow(num,2) // Devuelve el valor de "num" elevado al cuadrado
   return result;// ojo: No es raiz cuadrada!
   // Tu código:
  
}
elevarAlCuadrado(6)

function elevarAlCubo(num) {
   var result= Math.pow(num,3);// Devuelve el valor de "num" elevado al cubo
   return result;// Tu código:
  
}
elevarAlCubo(8);

function elevar(num, exponent) {
   var elevado= Math.pow(num, exponent); // Devuelve el valor de "num" elevado al exponente dado en "exponent"
   return elevado;// Tu código:
  
}
elevar(4,6);

function redondearNumero(num) {
   var redondea = Math.round(num);// Redondea "num" al entero más próximo y devuélvelo
   return redondea;// Tu código:
  
}
redondearNumero(8.5);

function redondearHaciaArriba(num) {
   var redondo= Math.ceil(num);// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
   return redondo;// Tu código:
  
}
redondearHaciaArriba(9.5543);

function numeroRandom() {
   var numrandom= Math.random();//Generar un número al azar entre 0 y 1 y devolverlo
   return numrandom; //Pista: investigá qué hace el método Math.random()
  
}
numeroRandom(2);

function esPositivo(numero) {
  

   if(numero>0) {
    return "Es positivo";
   }
   else if (numero<0) {
    return "Es negativo";
   }
   else {
    return false;
   }
   
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
}
esPositivo(20);

function agregarSimboloExclamacion(str) {
   return str;// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}
agregarSimboloExclamacion("Hello world!");

function combinarNombres(nombre, apellido) {
   var apellido= "delvaty";// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
   return apellido;// Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}
combinarNombres("Robert", +apellido);

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
