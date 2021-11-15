/* CLASE 3 */

/* F. Normal */

function sumar(a=0,b=0){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir (a,b){
    if(b==0){
        return 'No puedo dividir entre cero';
    }
    return a/b;
}

console.log(sumar(5,7));
console.log(restar(5,7));
console.log(multiplicar(5,7));
console.log(dividir(5,7));


/* F. Flecha */

const sumar_f = (a,b) => {
    return a-b;
}

const restar_f = (a,b) => a-b; //Otra forma de escribirlo SIEMPRE Y CUANDO solo utilice una linea de codigo.

const multiplicar_f = (a,b) => {
    return a*b;
}

const dividir_f = (a,b) => {
    if(b==0){
        return 'No puedo dividir entre cero';
    }
    return a/b;
}

console.log(restar_f(8,5));

