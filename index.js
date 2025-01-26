
// Factory function
function createCircle(radius)
{
    return {
        radius, // same as radius: radius,
        draw() { // same as draw: function() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(1);
console.log(circle2);