const now = new Date();
const date1 = new Date('May 11 2020 09:00');
const date2 = new Date(2020, 1, 11, 9);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());