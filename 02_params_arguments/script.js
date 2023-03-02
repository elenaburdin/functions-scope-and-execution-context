// simple declaration
function getUser(user) {
    return user + ' is registered';
}

console.log(getUser('John'));

// second example
function getFullName(fullName) {
    return fullName + ' is at work today!'
}
console.log(getFullName('Jake Smith'));



// default declaration
function getUserTwo(user = 'Emma') {
    return user + ' is registered';
}
console.log(getUserTwo());

// second default
function employeeName(firstName = 'Brad', lastName = 'Jonson') {
    return firstName + ' ' + lastName + ' is at work today!'
}
console.log(employeeName());



// Rest Params
function addNum(...numbers) {
    return numbers;
}
console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 2
function coffeeTime(...coffee) {
    return coffee;
}
console.log(['latte', 'machiato', 'espresso']);

// 3
function someNum(...num) {
    return num;
}
console.log(someNum(1, 2, 3));


// for loop
function sumNumbers(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumNumbers(1, 2, 3));



// function object
function login(user) {
    return `The user with the name ${user.name} and id: ${user.id} is logged in.`
}

const user = {
    id: 1,
    name: 'John'
}

console.log(login(user));
console.log(login({
    id: 2,
    name: 'Samantha'
}));


// 2
function todois(todo) {
    return `In my todois are to: ${todo.itemOne}, ${todo.itemTwo} and ${todo.itemThree}`
}

const todo = {
    itemOne: 'Buy a new gaming laptop',
    itemTwo: 'Complete a previous task',
    itemThree: 'Create a new portfolio site'
}

console.log(todois(todo));



function randomNumber(num) {
    const randomIndex = Math.floor(Math.random() * num.length);
    const rndNum = num[randomIndex]
    console.log(rndNum);
}
randomNumber([1, 2, 3, 4])



