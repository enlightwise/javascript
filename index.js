const circle = {
    radius: 1
};


for (let key in circle)
    console.log(key, circle[key]);

// for (let key of circle) // TypeError: circle is not iterable
    // console.log(key);

for (let key of Object.keys(circle)) // TypeError: circle is not iterable
    console.log(key);

for (let entry of Object.entries(circle)) // TypeError: circle is not iterable
    console.log(entry);