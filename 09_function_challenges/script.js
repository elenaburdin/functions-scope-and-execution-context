// Challenge 1
function getCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius
}
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// with the arrow function
const getCelsius2 = (fahrenheit) => (fahrenheit - 32) * (5 / 9);
console.log(`The temperature is ${getCelsius2(50)} \xB0C`);


// Challenge 2
const minMax = (array) => {
    const min = Math.min(...array);
    const max = Math.max(...array);
    return `The min number in array is ${min} and the max is ${max}`
}
console.log(minMax([1, 2, 3, 4, 5, 8, 45]));

// Challenge 3
(function (length, width) {
    const rect = length * width;
    console.log(`The area of a rectangle with a length of ${length} and width of ${width} is ${rect}`)
})(10, 5);