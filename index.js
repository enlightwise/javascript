// reference types: Object, Array, Function

let person = {
    name: 'John',
    age: 20
};

person.name = 'Joh'
let selection = 'name';
person[selection] = 'Mary'

console.log(person);