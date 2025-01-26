
const person = {
    name: 'John',
    age: 20
};

for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color)