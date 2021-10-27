


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


