/*
Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
Salida: ['Manzana','Cebolla','Apio','Naranja']
*/

function miLista (arr, n) {
    while (true) {
        if (arr.length==n) {
            return arr
        } else {
            arr.pop()
        }
    }
}

console.log(miLista(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 5))
