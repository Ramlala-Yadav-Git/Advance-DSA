

const Person = {
    fname: "ram",
    lname: "yadav",
    print: function (city) {
        console.log(this.fname, this.lname, city);
    }
}

let p = Person.print.bind(Person);
p("sidhi")



