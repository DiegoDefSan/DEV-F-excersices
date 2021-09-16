class Queue {
    constructor () {
        this.storage = [];
    }

    enqueue (item) {
        return this.storage.push(item);
    }

    dequeue () {
        return this.storage.shift();
    }

    front () {
        return this.storage[0];
    }

    back () {
        return this.storage[this.storage.length-1];
    }

    print () {
        return this.storage;
    }

    isEmpty () {
        return (this.storage.length===0);
    }

}


var cola = new Queue ();
console.log(cola);

cola.enqueue('Diego')
cola.enqueue('Sabrina')
cola.enqueue('Kris')
cola.enqueue('Shir')

cola.dequeue()

console.log(cola.print())
console.log(cola.back())

