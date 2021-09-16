/*
3.- Un conductor maneja de un pueblo origen a un pueblo 
destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe 
regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 

Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/

function deViaje (str) {
    let arr = str.split('→'); //[Pueblo Origen, pueblo 1, pueblo 2, destino]
    arr.reverse(); //[destino, pueblo 2, pueblo 1, Pueblo Origen]
    let word = arr.join('→'); //destino → pueblo 2 → pueblo 1→ Pueblo Origen
    return word
}

console.log(deViaje('Pueblo Origen → pueblo 1 → pueblo 2 → destino'))