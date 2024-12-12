//1.1. Declaración y Asignación de Variables
let nombre = "David";
console.log("Mi nombre es: " + nombre);

//2.Operaciones Matemáticas Básicas
let num1 = 1;
let num2 = 2;
//Suma, resta, multiplicacion y division
let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 * num2;
let division = num1 / num2;
//imprimir los resultados de la consola
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicacion: " + multi);
console.log("Division: " + division);

//3. Concatenación de Cadenas
let saludo = "Hola";
let nombre2 = "Stiven";
//concatenar las cadenas
let mensaje = saludo + " "+ nombre2;
//imprimir mensaje
console.log(mensaje);

//Booleanas
let esEstuduante = true;
//Usa una condicion para verificar el valor e la variable
if(esEstuduante) {
    console.log("Eres un estuduante");
} else {
    console.log("No eres un estudiante");
}

//4. Intercambio de Valores entre Variables
 let a =1;
 let b = 2;
 //imprime los valores originales antes del intercambio 
 console.log("Este es a : " + a + " " +"Este es b"+ b)
 //intercambio de valores
 let temp = a;
 a = b;
 b = a;
 //imprimir los valores despues del intercambio
 console.log("Despues del intercambio: a =" + a + "b ="+ b);

/*Ejercicios básicos de JavaScript para practicar
con constantes:*/
//declara una varaible 'PI' y asignale el valor pi
const PI = 3.141659;
//imprime el valor 
console.log(PI);

//2. Constantes y Operaciones Matemáticas
const radio = 5;
const altura = 10;
//-------------------------------------------------------------------------------------------//

//1. Condicional Simple
// Declara una variable numérica
let edad = 18;
// Usa una condición para verificar si la persona es mayor de edad
if (edad >= 18) {
 console.log("Eres mayor de edad.");
} else {
 console.log("Eres menor de edad.");
}

//2. Condicional con Múltiples Condiciones

let nota = 85;
// Usa condiciones para determinar la calificación
if(nota >= 90){
    console.log("Calificacion: A");
}else if(nota >= 80){
    console.log("Calificacion: B");
}else if( nota >= 70){
    console.log("Calificacion: C");
}else if(nota >= 60){
    console.log("Calificacion: D");
}else{
    console.log("Calificacion: F");
}

//uso de operado terniario

let temperatura = 30;

let clima = (temperatura > 25)? "Caluroso":"Fresco";

console.log(clima)