/*
5.- Crear una clase llamada  Contacto con los siguientes datos
Nombre 
Apellidos
Telefono
 
Después crear una clase que sea ListaContactos la cual tendrá dos métodos
Agregar un contacto
Buscar un contacto por nombre
*/

class Contacto {
    constructor (nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos {
    constructor () {
        this.lista = new Array;
    }

    agregarContacto (nombre, apellidos, telefono) {
        let newContact = new Contacto(nombre, apellidos, telefono);
        this.lista.push(newContact);
    }

    buscarPorNombre (nombre) {
        for (let x of this.lista) {
            if (x.nombre===nombre) {
                return x;
            }
        } return -1;
    }

}

let l1 = new ListaContactos;
console.log(l1)

l1.agregarContacto('Diego', 'Defilippi', 999999999);
l1.agregarContacto('Elsa', 'Perez', 999999999);
l1.agregarContacto('Simon', 'Corpiño', 999999999);

console.log(l1)

console.log(l1.buscarPorNombre('Simon'))

