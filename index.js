// let x = 10;
// let y = x;

// x = 20;

let x = {value: 10};
let y = x; // reference/address is copied, not value

x.value = 20;

// primities are copied by their value
// objects are copied by their reference

// let number = 10;

// function increase(number){
//     number++;
// }

// increase(number);
// console.log(number);

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);