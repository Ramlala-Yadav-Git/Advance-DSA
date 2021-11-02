// first way by using new keyword
var newObj = new Object()
console.log('newObj', newObj)


// Second way by using create method 
var object = Object.create({});
console.log('object', object)

// By using object literal
litralObject = {}
console.log('litralObject', litralObject)


// by using construnctor function
function Person(name) {

    this.name = name;
    this.age = 21
}
var constrObject = new Person("Ramlala")
console.log('constrObject', constrObject)


// by using function construcor with prototype
function PersonProto() { }
PersonProto.prototype.name = "Ramlala";
var objectProto = new PersonProto();
console.log('objectProto', objectProto)

// by using class
class PersonClass {
    constructor(name) {
        this.name = name
    }
}
var newPersonClass = new PersonClass("Ram")
console.log('newPersonClass', newPersonClass)

// by new function 
var objectNewFunction = new function () {
    this.name = "Sudheer";
}
console.log('objectNewFunction', objectNewFunction)

