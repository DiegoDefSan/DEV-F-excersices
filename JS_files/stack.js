class Stack {
    constructor () {
        this.count = 0;
        this.storage = {};
    }

    push (item) {
        this.count += 1;
        this.storage[this.count] = item;
        return item;
    }

    pop () {
        let deleteItem = this.storage[this.count];
        delete this.storage[this.count];
        this.count--;
        return deleteItem;
    }

    size () {
        return this.count;
    }

    peek () {
        return this.storage[this.count];
    }
}

const pila = new Stack();
console.log(pila)

pila.push('Diego');
pila.push('Sabrina');
console.log(pila)

pila.pop()
console.log(pila)
console.log(pila.size())

pila.push('Jamaica');
pila.push('Perú');
pila.push('Colombia');
pila.push('Brasil');

console.log(pila);
console.log(pila.peek())
