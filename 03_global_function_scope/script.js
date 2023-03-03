// console.log(window.innerWidth);

// global
const x = 100;
console.log(x, 'in global');



function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function');
}
run();

if (true) {
    console.log(x, 'in block');
}

function add() {
    const x = 1; // variable shadowing, will overwrite
    const y = 50; // function scope
    console.log(x + y); // we can add global scope to function scope
}
add();