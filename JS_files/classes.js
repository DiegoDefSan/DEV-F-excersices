class Person {
    constructor (name, lastname, age, gender) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
    }

    getAge() {
        return this.age;
    }
}

class Polygon {
    constructor (arr) {
        this.arr = arr;
    }
    
    perimeter() {
        let result = 0;
        for (let x of this.arr) {
            result += x;
        }
        return result
    }
}

let person1 = new Person("Diego", "Defilippi", 18, 'M');
console.log(person1.getAge())