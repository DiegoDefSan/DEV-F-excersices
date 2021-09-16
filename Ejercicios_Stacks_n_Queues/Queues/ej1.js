/*
1. Se tiene una cola de colores y se tiene que dividir en dos colas, 
respetando el orden y alternando a partir de su índice. los pares en una y 
los nones en otra

Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/

function misColores (arr) {
    let res1 = [];
    let res2 = [];
    for (let i = 0; i<arr.length; i++) {
        if (i%2==0) {
            //i = 0 -> arr[i] = amarillo
            // i= 2 -> arr[i] = rojo
            res1.push(arr[i]);
        } else {
            res2.push(arr[i]);
        }
    }
    console.log('Cola 1: ', res1);
    console.log('Cola 2: ', res2);
}

misColores(['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'])

