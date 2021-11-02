/*

In ES6, Javascript classes are primarily syntactic
sugar over JavaScript’s existing prototype-based inheritance.

*/

// For example, the prototype based inheritance written in function expression as below,

function Bike(model, color) {

    this.model = model;
    this.color = color;
}

Bike.prototype.getDetails = function (params) {
    return this.model + this.color
}

// Whereas ES6 classes can be defined as an alternative

class BikeClass {
    constructor(color, model) {
        this.model = model;
        this.color = color;

    }
    getDetails() {
        return this.model + this.color;
    }
}

// Conclusion
// construcor function se bhi object bnaya ja sakta hai
// jo ki properties ko inherit karengi
// aur class ki madad se bhi same kaam kiya ja sakta hai