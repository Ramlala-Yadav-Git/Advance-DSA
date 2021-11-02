// var => globaly hot hai aur ye js me start se hai
// iska hoisting bhi hota hai


// Let =>  ye locally hota hai, es six me introduce hua hai
// ye hoisted nhi hota hai

function userDetails(username) {
    if (username) {
        console.log(salary); // undefined due to hoisting
        console.log(age); // ReferenceError: Cannot access 'age' before initialization
        let age = 30;
        var salary = 10000;
    }
    console.log(salary); //10000 (accessible to due function scope)
    console.log(age); //error: age is not defined(due to block scope)
}
userDetails('John');


// Decalring variable in switch block without any error
let counter = 1;
switch (x) {
    case 0:
        let name;
        break;

    case 1:
        let name; // SyntaxError for redeclaration.
        break;
}
let counter2 = 1;
switch (x) {
    case 0: {
        let name;
        break;
    }
    case 1: {
        let name; // SyntaxError for redeclaration.
        break;
    }
}


// What is the Temporal Dead Zone
// The Temporal Dead Zone is a behavior in JavaScript
// that occurs when declaring a variable with the let and
// const keywords, but not with var.In ECMAScript 6, accessing
//  a let or const variable before its declaration (within its scope)
//  causes a ReferenceError.The time span when that happens, between the
//  creation of a variable’s binding and its declaration, is called the
//  temporal dead zone.
function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
}


