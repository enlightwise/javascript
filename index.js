// dynamic nature of objects

const circle = {
    radius: 1
};

circle.color = 'yellow';
delete circle.color; // delete a member from object

console.log(circle);