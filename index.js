// finding elements reference types
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

// arrow function
const course = courses.find(course => course.name === 'a');

console.log(course);


// remove elements
const numbers = [1, 2, 3, 4];

// end
const last = numbers.pop();

// remove from beginning
numbers.shift();

// middle
numbers.splice(1, 1); // remove at index 1, 1 element

console.log(numbers);
