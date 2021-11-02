/*

When we make multiple object using constructor or other method that 
inherit the properties of parent object call as prototype chaining

>> it is also called as inheritence

*/

function Factory(name, age) {
    this.name = name;
    this.age = age
}
Factory.prototype.gender = "male"
let emp1 = new Factory("ram", 24)
console.log('emp1', emp1.gender)// here gender is inherited 
let emp2 = new Factory("somesh", 24)
console.log('emp2', emp2)