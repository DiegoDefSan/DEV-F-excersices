/*
Classes were added in last version of JavaScript (called ECMAScript 6 or just ES6). It's something similar to how classes work in other languages (Java, Ruby, etc). This is a very important concept in programming, so sooner or later you'll want to learn about it. (And I highly recommend you to do it before the Java modules).


Create a  Car class:

1) Add properties like model, so you can create a "Ford" with model "Mondeo". Add the properties you like in the constructor method.
2) Add a method to accelerate
3) Add a method to stop
4) Add a method turn directions
5) Add a method call status to display the information of the car (properties, methods, etc)
*/ 

class Cars {
    constructor (model, color, moving, speed, direction) {
        this.model = model;
        this.color = color;
        this.moving = moving;
        this.speed = speed;
        this.direction = direction;
    }

    accelerate(a, time) {
        let finalSpeed = a*time+this.speed;
        this.speed = finalSpeed;

        return `The current speed is ${this.speed}m/s`;
    }

    stop() {
        this.speed = 0;
        this.moving = false;
        return "The car is not moving.";
    }

    turnDirections(d) {
        if (d == 'N' || d == 'S' || d == 'E' || d == 'W') {
            this.direction = d;
            return `The current direction is ${d}`;
        } else {
            return 'The direction must be cardinal positions.';
        }
    }

    status() {
        let prop = `
        Properties:
        Model: ${this.model}
        Color: ${this.color}
        Moving: ${this.moving}
        Speed: ${this.speed}
        Direction: ${this.direction}
        Acceleration: ${this.acceleration}

        Methods:
        accelerate(aceleration, period of time),
        stop()
        turnDirections(direction)
        status()
        `;
        return prop;
    }

}

let mcQueen = new Cars("Ford", "Red", true, 3, 'N');

console.log(mcQueen.stop());
console.log(mcQueen.accelerate(5, 10));
console.log(mcQueen.turnDirections('S'));