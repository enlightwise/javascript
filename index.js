const first = [1, 2, 3];
const second = [4, 5, 6];


// combine - spread operator
const combined = [...first, 'a', ...second]
// slice
// const copy = combined.slice(2, 4);
const copy = [...combined];

console.log(combined);
console.log(copy);

