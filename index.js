function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName)
}

function square(number) {
    return number * number;
}

greet('John', 'Smith');

let number = square(2);
console.log(number);

console.log(number++)
console.log(++number)

console.log(number == '6')
console.log(number === '6')