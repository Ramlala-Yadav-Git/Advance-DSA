

const Person = {
    fname: "ram",
    lname: "yadav",
    print: function (city) {
        console.log(this.fname, this.lname, city);
    }
}

let p = Person.print.bind(Person);
// ye function me this ke stan per Person object ko bandh dega
// aur uska copy hmko de dega aur use hm baad me use kar skte hai 
// ===> directly invvoke nhi karta hai
p("sidhi")



