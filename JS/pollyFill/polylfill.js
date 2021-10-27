

let name = {
    fname: "ram",
    lname: "yadav"
}

function print(state, hm) {
    let data = this.fname + this.lname + state + hm
    console.log(data);
}

Function.prototype.myBind = function (...args) {
    let obj = this;    // parent function ko represent karega is case me
    let data = args.slice(1) //pehla argument le lenge jo ki object hoga[]

    return function (...data2) {
        // obj.call(args[0],)      // function ko call krte waqt ke arguments ko data me store krenge
        obj.apply(arr[0], [...data, ...data2]) // multiple arguments ko pass krne ke liye hme aplly ka use karna padega
    }
}

let printName = print.bind(name) //js bind
printName("mp")
let printName2 = print.myBind(name, "sidhi")   //our own bind method
printName2("mpfdlskf")