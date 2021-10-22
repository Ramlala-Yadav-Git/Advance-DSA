

const Person = {
    fname: "ram",
    lname: "yadav",
    print: function (city) {
        console.log(this.fname, this.lname, city);
    }
}
// Person.print()
const Person2 = {

    fname: "somesh",
    lname: "yadav"
}
Person.print.call(Person2, "sidhi")

// jab bhi dusre object ke method ko call krna ho


