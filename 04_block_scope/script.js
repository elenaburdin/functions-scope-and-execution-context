const x = 100;
const foo = 1;
var bar = 2;

if (true) {
    const y = 200;
    console.log(x + y);
}

// console.log(x + y);

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// console.log(i);

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c); // block will show without errors, don't do that

function run() {
    var d = 100; // u can't access var if it is inside a function, 
    // but you can access with loops and if statements
    console.log(d);
}

// run();
// console.log(d);