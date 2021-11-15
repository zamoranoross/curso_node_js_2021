const fs = require('fs'); // Parecido al include o import.
const texto = 'Hola mundo';

fs.writeFile('Prueba.txt', texto, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('El archivo se creo!');
    }
})