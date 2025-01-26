// functions are objects
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(Circle.name);
console.log(Circle.length);

// new String();
// new Boolean();
// new Number();