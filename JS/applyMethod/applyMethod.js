

const Person = {
    fname: "ram",
    lname: "yadav",
    print: function (city, v) {
        console.log(this.fname, this.lname, city, v);
    }
}
// Person.print()
const Person2 = {

    fname: "somesh",
    lname: "yadav"
}
Person.print.apply(Person2, ["sidhi", "deosar"])

// ye apply ke jaisa hi bs arguments paass array ke form me pass hote hai
// jab bhi dusre object ke method ko call krna ho 


