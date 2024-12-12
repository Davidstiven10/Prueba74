1.
//Imprimir Números Pares del 1 al 20
//JavaScript
// Usa un bucle for para imprimir los números pares del 1 al 20

let numeros;

for (let i = 0; i <= 20; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
}


//2.Sumar los Primeros 10 Números Naturales

let sumar = 0;

//bucle
for(let i = 0; i <= 10; i++){
    sumar += i;  
}
console.log(sumar); 


//3.Imprimir los Elementos de un Array

let colores = ["rojo", "verde", "azul", "negro"];

//recorrer el arreglo

for(let i = 0; i < colores.length; i++){
    console.log("el color es el: "+ colores[i]);
}