/* ******CLASE 2: Variables JavaScript****** */



/* ****** VARIABLES ****** */

/*
var nombre;
nombre = 'Jennifer';
*/

let nombre;
nombre = 'Jennifer';

/* Forma correcta de re-asignar valor a una variable */

nombre = 'Ross';

/* Declaracion de funcion */

function imprimeNombre(){

    console.log(nombre);

}

/* Llamada de la funcion */

imprimeNombre();

/* 
    No se recomienda usar la variable var, ya que se puede caer en
    inconsistencias (se puede inicializar antes de ser declarada);
    ademas de ser insegura, es mejor utilizar let. 
*/



/* ****** CONSTANTES ****** */

const num = 5900; 
// num = 3000; 

console.log(num);

/* No es posible modificar una constante */



/* ****** CONTROL DE FLUJO ****** */

let edad = 20;

if (edad > 18){

    console.log('Tu eres mayor de edad');

}else{

console.log('Tu eres menor de edad');

}



let fruta = 'Manzana';

switch(fruta){
    case 'Manzana':
        console.log('Elegiste manzana');
        break;
    
    case 'Naranja':
        console.log('Elegiste naranja');
        break;
    
    default:
        console.log('No elegiste ninguna fruta');
        break;
}



for(let i = 1; i <= 5; i++){

    console.log('For = ', i);

}

let k = 1;



while(k <= 5){

    console.log('Soy el while numero:', k);
    k++;

}



let n = 1;
do{

    console.log('Soy el do while numero:', n);
    n++;

}
while( n <= 5 )
