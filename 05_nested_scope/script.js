// nested functions
// u can access parent variable, but you can't access child variable
function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }
    second(); // in order for second to run
}
first(); // in order for first to run

// nested block
if (true) {
    const x = 100;
    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }
    // console.log(y);
}