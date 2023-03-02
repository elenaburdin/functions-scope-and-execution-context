// to declare a function
function sayHello() {
    console.log('Hello World');
}

// to run a function
// to call a function
sayHello();

// to run function with paramaters
function add(num1, num2) {
    console.log(num1 + num2);
}

// there are arguments 5 and 10
// declare a function
add(5, 10);

function substract(num1, num2) {
    return num1 - num2;
    console.log('After the return'); // will not run
}

// the reason why we return is that we want to do something with that value
const result = substract(10, 2);
console.log(result, substract(20, 5));