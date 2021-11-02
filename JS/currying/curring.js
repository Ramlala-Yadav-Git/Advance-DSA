


// 1. first method of function currying by using bind method

let mul = function (x, y) {

    let data = x * y
    console.log(data);
}

let mult2 = mul.bind(this, 2) // ye mul function ka copy bna ke dega jisme x ke sthan per 2 phle se set ho jayega
// ise is function curring kahte hai

mult2(5)

let mult3 = mul.bind(this, 3)
mult3(5)


// 2. Method of function curring by using  closer of javascript

let multiply = function (x) {

    return function (y) {
        console.log(x * y);
    }
}
let multi2 = multiply(2) // 2 x me set ho jayega
multi2(3) //3 y me set ho jayega


/*
Currying is the process of taking a function with multiple arguments
 and turning it into a sequence of functions each with only a single 
 argument. Currying is named after a mathematician Haskell Curry. By 
 applying currying, a n-ary function turns it into a unary function.

*/

const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3));

const curryUnaryFunction = a => b => c => a + b + c
// yaha pe teen function hai
const alter = function First(a) {

    return function Second(b) {
        return function Third(c) {
            return a + b + c
        }
    }
}
console.log('curryUnaryFunction', curryUnaryFunction(1)(2)(3))
console.log('alter', alter(1)(2)(3))

// Note => jab bhi ek function dusre function ko return karta hai to
// hm kehte hai ki wah function dusre function ko carry kar rha hai